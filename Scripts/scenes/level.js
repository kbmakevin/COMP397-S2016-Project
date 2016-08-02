/**
 * @file level.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the level scene for the game.
 * @version 0.1.7 - linked instructions1 and menu to stageloading1
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scenes;
(function (scenes) {
    /**
     * This Level scene extends the objects.Scene object
     *
     * @export
     * @class Level
     * @extends {objects.Scene}
     */
    var Level = (function (_super) {
        __extends(Level, _super);
        /**
         * Creates an instance of Level.
         */
        function Level(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the level scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Level.prototype.Start = function () {
            this._levelLabel = new objects.Label("Level 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._levelLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the level scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Level.prototype.Update = function () {
            // scene updates happen here...
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Level.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.STORY1;
            core.changeScene();
        };
        return Level;
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=level.js.map