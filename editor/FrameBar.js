/**
 * Bar showing all frame images
 *
 * @class FrameBar
 * @extends PIXI.Container
 * @constructor
 */
function FrameBar(app, themeData) {
	this.themeData = themeData;
	PIXI.Container.call(this);
    this.createUI();
    // keep FrameBar to application height
    app.on('resize', this.onresize, this);
}

FrameBar.prototype = Object.create( PIXI.Container.prototype );
FrameBar.prototype.constructor = FrameBar;

FrameBar.prototype.createUI = function() {
    this.background = new PIXI.shapes.Rect(0xaaaaaa, 0.9, 300);
    this.addChild(this.background);

	var frameList = this.frameList = new GOWN.List(null);
    frameList.itemRendererProperties.labelField = "name";
	frameList.dataProvider = new GOWN.ListCollection(this.themeData);

	frameList.itemRendererFactory = function() {
        var renderer = new GOWN.DefaultListItemRenderer();
		renderer.width = 300;
		renderer.on('click', function() {
			app.preview( this.data );
		})
        return renderer;
    };

    frameList.viewPort.height = frameList.height = this.themeData.length * 20;
    frameList.viewPort.width = frameList.width = 300;
    this.addChild(frameList);
};


FrameBar.prototype.onresize = function(width, height) {
    this.background.height = height;
	this.frameList.viewPort.height = this.frameList.height = this.themeData.length * 20;
};
