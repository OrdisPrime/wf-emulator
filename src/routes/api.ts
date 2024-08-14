import express from "express";
import { addFriendImageController } from "@/src/controllers/api/addFriendImageController";
import { artifactsController } from "../controllers/api/artifactsController";
import { checkDailyMissionBonusController } from "@/src/controllers/api/checkDailyMissionBonusController";
import { claimCompletedRecipeController } from "@/src/controllers/api/claimCompletedRecipeController";
import { createGuildController } from "@/src/controllers/api/createGuildController";
import { deleteSessionController } from "@/src/controllers/api/deleteSessionController";
import { dojoController } from "@/src/controllers/api/dojoController";
import { dronesController } from "@/src/controllers/api/dronesController";
import { evolveWeaponController } from "@/src/controllers/api/evolveWeaponController";
import { findSessionsController } from "@/src/controllers/api/findSessionsController";
import { focusController } from "@/src/controllers/api/focusController";
import { genericUpdateController } from "@/src/controllers/api/genericUpdateController";
import { getAllianceController } from "@/src/controllers/api/getAllianceController";
import { getCreditsController } from "@/src/controllers/api/getCreditsController";
import { getDailyDealStockLevelsController } from "@/src/controllers/api/getDailyDealStockLevelsController";
import { getFriendsController } from "@/src/controllers/api/getFriendsController";
import { getGuildController } from "@/src/controllers/api/getGuildController";
import { getGuildDojoController } from "@/src/controllers/api/getGuildDojoController";
import { getGuildLogController } from "../controllers/api/getGuildLogController";
import { getIgnoredUsersController } from "@/src/controllers/api/getIgnoredUsersController";
import { getNewRewardSeedController } from "@/src/controllers/api/getNewRewardSeedController";
import { getShipController } from "@/src/controllers/api/getShipController";
import { getVendorInfoController } from "@/src/controllers/api/getVendorInfoController";
import { gildWeaponController } from "@/src/controllers/api/gildWeaponController";
import { guildTechController } from "../controllers/api/guildTechController";
import { hostSessionController } from "@/src/controllers/api/hostSessionController";
import { hubController } from "@/src/controllers/api/hubController";
import { hubInstancesController } from "@/src/controllers/api/hubInstancesController";
import { inboxController } from "@/src/controllers/api/inboxController";
import { infestedFoundryController } from "@/src/controllers/api/infestedFoundryController";
import { inventoryController } from "@/src/controllers/api/inventoryController";
import { inventorySlotsController } from "@/src/controllers/api/inventorySlotsController";
import { joinSessionController } from "@/src/controllers/api/joinSessionController";
import { loginController } from "@/src/controllers/api/loginController";
import { loginRewardsController } from "@/src/controllers/api/loginRewardsController";
import { logoutController } from "@/src/controllers/api/logoutController";
import { marketRecommendationsController } from "@/src/controllers/api/marketRecommendationsController";
import { missionInventoryUpdateController } from "@/src/controllers/api/missionInventoryUpdateController";
import { modularWeaponCraftingController } from "@/src/controllers/api/modularWeaponCraftingController";
import { modularWeaponSaleController } from "@/src/controllers/api/modularWeaponSaleController";
import { nameWeaponController } from "@/src/controllers/api/nameWeaponController";
import { projectionManagerController } from "../controllers/api/projectionManagerController";
import { purchaseController } from "@/src/controllers/api/purchaseController";
import { queueDojoComponentDestructionController } from "@/src/controllers/api/queueDojoComponentDestructionController";
import { rerollRandomModController } from "@/src/controllers/api/rerollRandomModController";
import { saveLoadoutController } from "@/src/controllers/api/saveLoadout";
import { sellController } from "@/src/controllers/api/sellController";
import { setActiveQuestController } from "@/src/controllers/api/setActiveQuestController";
import { setActiveShipController } from "@/src/controllers/api/setActiveShipController";
import { setBootLocationController } from "@/src/controllers/api/setBootLocationController";
import { setShipCustomizationsController } from "@/src/controllers/api/setShipCustomizationsController";
import { setSupportedSyndicateController } from "@/src/controllers/api/setSupportedSyndicateController";
import { setWeaponSkillTreeController } from "../controllers/api/setWeaponSkillTreeController";
import { shipDecorationsController } from "@/src/controllers/api/shipDecorationsController";
import { startDojoRecipeController } from "@/src/controllers/api/startDojoRecipeController";
import { startRecipeController } from "@/src/controllers/api/startRecipeController";
import { stepSequencersController } from "@/src/controllers/api/stepSequencersController";
import { surveysController } from "@/src/controllers/api/surveysController";
import { syndicateSacrificeController } from "../controllers/api/syndicateSacrificeController";
import { tauntHistoryController } from "@/src/controllers/api/tauntHistoryController";
import { trainingResultController } from "@/src/controllers/api/trainingResultController";
import { updateChallengeProgressController } from "@/src/controllers/api/updateChallengeProgressController";
import { updateSessionGetController, updateSessionPostController } from "@/src/controllers/api/updateSessionController";
import { updateQuestcontroller } from "@/src/controllers/api/updateQuestController";
import { giveKeyChainTriggeredItemsController } from "@/src/controllers/api/giveKeyChainTriggeredItemsController";
import { unlockShipFeatureController } from "@/src/controllers/api/unlockShipFeatureController";
import { updateThemeController } from "../controllers/api/updateThemeController";
import { upgradesController } from "@/src/controllers/api/upgradesController";

const apiRouter = express.Router();

// get
apiRouter.get("/checkDailyMissionBonus.php", checkDailyMissionBonusController);
apiRouter.get("/credits.php", getCreditsController);
apiRouter.get("/deleteSession.php", deleteSessionController);
apiRouter.get("/dojo", dojoController);
apiRouter.get("/drones.php", dronesController);
apiRouter.get("/getDailyDealStockLevels.php", getDailyDealStockLevelsController);
apiRouter.get("/getFriends.php", getFriendsController);
apiRouter.get("/getGuild.php", getGuildController);
apiRouter.get("/getGuildDojo.php", getGuildDojoController);
apiRouter.get("/getGuildLog.php", getGuildLogController);
apiRouter.get("/getIgnoredUsers.php", getIgnoredUsersController);
apiRouter.get("/getNewRewardSeed.php", getNewRewardSeedController);
apiRouter.get("/getShip.php", getShipController);
apiRouter.get("/getVendorInfo.php", getVendorInfoController);
apiRouter.get("/hub", hubController);
apiRouter.get("/hubInstances", hubInstancesController);
apiRouter.get("/inbox.php", inboxController);
apiRouter.get("/inventory.php", inventoryController);
apiRouter.get("/loginRewards.php", loginRewardsController);
apiRouter.get("/logout.php", logoutController);
apiRouter.get("/marketRecommendations.php", marketRecommendationsController);
apiRouter.get("/marketSearchRecommendations.php", marketRecommendationsController);
apiRouter.get("/modularWeaponSale.php", modularWeaponSaleController);
apiRouter.get("/queueDojoComponentDestruction.php", queueDojoComponentDestructionController);
apiRouter.get("/setActiveQuest.php", setActiveQuestController);
apiRouter.get("/setActiveShip.php", setActiveShipController);
apiRouter.get("/setBootLocation.php", setBootLocationController);
apiRouter.get("/setSupportedSyndicate.php", setSupportedSyndicateController);
apiRouter.get("/surveys.php", surveysController);
apiRouter.get("/updateSession.php", updateSessionGetController);

// post
apiRouter.post("/unlockShipFeature.php", unlockShipFeatureController);
apiRouter.post("/giveKeyChainTriggeredItems.php", giveKeyChainTriggeredItemsController);
apiRouter.post("/updateQuest.php", updateQuestcontroller);
apiRouter.post("/addFriendImage.php", addFriendImageController);
apiRouter.post("/artifacts.php", artifactsController);
apiRouter.post("/claimCompletedRecipe.php", claimCompletedRecipeController);
apiRouter.post("/createGuild.php", createGuildController);
apiRouter.post("/evolveWeapon.php", evolveWeaponController);
apiRouter.post("/findSessions.php", findSessionsController);
apiRouter.post("/focus.php", focusController);
apiRouter.post("/genericUpdate.php", genericUpdateController);
apiRouter.post("/getAlliance.php", getAllianceController);
apiRouter.post("/gildWeapon.php", gildWeaponController);
apiRouter.post("/guildTech.php", guildTechController);
apiRouter.post("/hostSession.php", hostSessionController);
apiRouter.post("/infestedFoundry.php", infestedFoundryController);
apiRouter.post("/inventorySlots.php", inventorySlotsController);
apiRouter.post("/joinSession.php", joinSessionController);
apiRouter.post("/login.php", loginController);
apiRouter.post("/missionInventoryUpdate.php", missionInventoryUpdateController);
apiRouter.post("/modularWeaponCrafting.php", modularWeaponCraftingController);
apiRouter.post("/nameWeapon.php", nameWeaponController);
apiRouter.post("/projectionManager.php", projectionManagerController);
apiRouter.post("/purchase.php", purchaseController);
apiRouter.post("/rerollRandomMod.php", rerollRandomModController);
apiRouter.post("/saveLoadout.php", saveLoadoutController);
apiRouter.post("/sell.php", sellController);
apiRouter.post("/setShipCustomizations.php", setShipCustomizationsController);
apiRouter.post("/setWeaponSkillTree.php", setWeaponSkillTreeController);
apiRouter.post("/shipDecorations.php", shipDecorationsController);
apiRouter.post("/startDojoRecipe.php", startDojoRecipeController);
apiRouter.post("/startRecipe.php", startRecipeController);
apiRouter.post("/stepSequencers.php", stepSequencersController);
apiRouter.post("/syndicateSacrifice.php", syndicateSacrificeController);
apiRouter.post("/tauntHistory.php", tauntHistoryController);
apiRouter.post("/trainingResult.php", trainingResultController);
apiRouter.post("/updateChallengeProgress.php", updateChallengeProgressController);
apiRouter.post("/updateNodeIntros.php", genericUpdateController);
apiRouter.post("/updateSession.php", updateSessionPostController);
apiRouter.post("/updateTheme.php", updateThemeController);
apiRouter.post("/upgrades.php", upgradesController);

export { apiRouter };
