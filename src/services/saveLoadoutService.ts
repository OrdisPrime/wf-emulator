import {
    IItemEntry,
    ILoadoutClient,
    ILoadoutEntry,
    IOperatorConfigEntry,
    ISaveLoadoutRequestNoUpgradeVer
} from "@/src/types/saveLoadoutTypes";
import { LoadoutModel } from "@/src/models/inventoryModels/loadoutModel";
import { getInventory } from "@/src/services/inventoryService";
import { IOid } from "@/src/types/commonTypes";

export const isEmptyObject = (obj: unknown): boolean => {
    return Boolean(obj && Object.keys(obj).length === 0 && obj.constructor === Object);
};

//setup default items on account creation or like originally in giveStartingItems.php

//export const updateLoadout = (loadout: ISaveLoadoutRequest, accountId: string) => {};

//support multiple loadouts and multiple items and multiple configs per item
export const handleInventoryItemConfigChange = async (
    equipmentChanges: ISaveLoadoutRequestNoUpgradeVer,
    accountId: string
) => {
    for (const [_equipmentName, _equipment] of Object.entries(equipmentChanges)) {
        const equipment = _equipment as ISaveLoadoutRequestNoUpgradeVer[keyof ISaveLoadoutRequestNoUpgradeVer];
        const equipmentName = _equipmentName as keyof ISaveLoadoutRequestNoUpgradeVer;

        if (isEmptyObject(equipment)) {
            continue;
        }
        // non-empty is a change in loadout(or suit...)

        switch (equipmentName) {
            case "OperatorLoadOuts":
            case "AdultOperatorLoadOuts": {
                console.log("loadout received", equipmentName);

                const inventory = await getInventory(accountId);
                const operatorConfig = equipment as IOperatorConfigEntry;
                const operatorLoadout = inventory[equipmentName];

                // all non-empty entries are one loadout slot
                for (const [loadoutId, loadoutConfig] of Object.entries(operatorConfig)) {
                    // console.log("loadoutId", loadoutId, "loadoutconfig", loadoutConfig);
                    const loadout = operatorLoadout.find(loadout => loadout._id?.toString() === loadoutId);

                    // if no config with this id exists, create a new one
                    if (!loadout) {
                        const { ItemId, ...loadoutConfigItemIdRemoved } = loadoutConfig;
                        operatorLoadout.push({
                            _id: ItemId.$oid,
                            ...loadoutConfigItemIdRemoved
                        });
                        await inventory.save();
                        continue;
                    }
                    loadout.set(loadoutConfig);

                    //({ _id: loadoutId }, loadoutConfig);
                }
                await inventory.save();
                break;
            }
            case "LoadOuts": {
                console.log("loadout received");

                for (const [_loadoutSlot, _loadout] of Object.entries(equipment)) {
                    const loadoutSlot = _loadoutSlot as keyof ILoadoutClient;
                    const newLoadout = _loadout as ILoadoutEntry;

                    //console.log("key", loadoutSlot, "value", loadout);

                    // empty loadout slot like: "NORMAL": {}
                    if (isEmptyObject(newLoadout)) {
                        continue;
                    }

                    const loadout = await LoadoutModel.findOne({ loadoutOwnerId: accountId });
                    //const {, ...loadout } = loadoutWithLoadoutOwnerId;

                    if (!loadout) {
                        throw new Error("loadout not found");
                    }
                    // all non-empty entries are one loadout slot
                    for (const [loadoutId, loadoutConfig] of Object.entries(newLoadout)) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        //const { loadoutOwnerId, ...loadout } = loadoutWithLoadoutOwnerId;
                        // console.log("loadoutId", loadoutId, "loadoutconfig", loadoutConfig);

                        const oldLoadoutConfig = loadout[loadoutSlot].find(
                            loadout => loadout._id.toString() === loadoutId
                        );

                        // if no config with this id exists, create a new one
                        if (!oldLoadoutConfig) {
                            const { ItemId, ...loadoutConfigItemIdRemoved } = loadoutConfig;
                            loadout[loadoutSlot].push({
                                _id: ItemId.$oid,
                                ...loadoutConfigItemIdRemoved
                            });
                            await loadout.save();
                            continue;
                        }

                        const loadoutIndex = loadout[loadoutSlot].indexOf(oldLoadoutConfig);

                        if (loadoutIndex === undefined || loadoutIndex === -1) {
                            throw new Error("loadout index not found");
                        }

                        //console.log("parent id", oldLoadoutConfig.ownerDocument()._id);
                        loadout[loadoutSlot][loadoutIndex].set(loadoutConfig);
                        //loadout.NORMAL[loadoutIndex].overwrite(loadoutConfig);
                        //console.log("db", loadout[loadoutSlot][loadoutIndex].schema);

                        await loadout.save();
                        //({ _id: loadoutId }, loadoutConfig);
                    }
                }
                break;
            }
            case "LongGuns":
            case "Pistols":
            case "Suits":
            case "Melee": {
                console.log("? ???? ?", equipmentName, equipment);

                const itemEntry = equipment as IItemEntry;
                const inventory = await getInventory(accountId);
                for (const [itemId, itemConfig] of Object.entries(itemEntry)) {
                    const inventoryItem = inventory[equipmentName].find(item => item._id.toString() === itemId);

                    if (!inventoryItem) {
                        throw new Error(`inventory item ${equipmentName} not found with id ${itemId}`);
                    }

                    //config ids are 0,1,2 can there be a 3?
                    for (const [configId, config] of Object.entries(itemConfig)) {
                        inventoryItem.Configs[parseInt(configId)] = config;
                    }
                }
                await inventory.save();
                break;
            }
            case "CurrentLoadOutIds": {
                //TODO: remove duplicate getInventory after finding out when currentloadOutId is sent
                const loadoutIds = equipment as IOid[];
                const inventory = await getInventory(accountId);
                inventory.CurrentLoadOutIds = loadoutIds;
                await inventory.save();
                break;
            }
            default: {
                console.log("category not implemented", equipmentName);
            }
        }

        //case "OperatorAmps":
        // case "Sentinels":
        // case "SentinelWeapons":
        // case "KubrowPets":
        // case "SpaceSuits":
        // case "SpaceGuns":
        // case "SpaceMelee":
        // case "Scoops":
        // case "SpecialItems":
        // case "MoaPets":
        // case "Hoverboards":
        // case "DataKnives":
        // case "MechSuits":
        // case "CrewShipHarnesses":
        // case "Horses":
        // case "DrifterMelee":

        // case "CrewShips":
        //case "KahlLoadOuts": not sure yet how to handle kahl: it is not sent in inventory
    }
};
