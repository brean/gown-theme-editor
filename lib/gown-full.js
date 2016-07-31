(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GOWN = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// full version of gown 
// (includes pixi-layout and pixi-shape, so you only need to add pixi.js 
//  and gown.js into your html file)
if (typeof PIXI === 'undefined') {
    if (window.console) {
        window.console.warn('pixi.js has to be loaded before loading gown.js');
    }
} else {
    PIXI.shapes = require('../external/pixi-shapes/src');
    PIXI.layout = require('../external/pixi-layout/src');

    var core = module.exports = require('./core');

    // controls
    core.Application =            require('./controls/Application');
    core.Button =                 require('./controls/Button');
    core.Check =                  require('./controls/Check');
    core.InputControl =           require('./controls/InputControl');
    core.LayoutGroup =            require('./controls/LayoutGroup');
    core.List =                   require('./controls/List');
    core.PickerList =             require('./controls/PickerList');
    core.Scrollable =             require('./controls/Scrollable');
    core.ScrollBar =              require('./controls/ScrollBar');
    core.ScrollContainer =        require('./controls/ScrollContainer');
    core.Scroller =               require('./controls/Scroller');
    core.ScrollText =             require('./controls/ScrollText');
    core.ScrollThumb =            require('./controls/ScrollThumb');
    core.Slider =                 require('./controls/Slider');
    core.TextInput =              require('./controls/TextInput');
    core.ToggleButton =           require('./controls/ToggleButton');

    // data
    core.ListCollection =         require('./data/ListCollection');

    // control renderer
    core.DefaultListItemRenderer =  require('./controls/renderers/DefaultListItemRenderer');

    // skin
    core.Theme =           require('./skin/Theme');
    core.ThemeFont =       require('./skin/ThemeFont');
    core.ThemeParser =     require('./skin/ThemeParser');

    // add core plugins.
    core.utils          = require('./utils');

    // use default pixi loader
    core.loader = PIXI.loader;

    // mixin the deprecation features.
    //Object.assign(core; require('./deprecation'));

    // export GOWN globally.
    global.GOWN = core;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../external/pixi-layout/src":2,"../external/pixi-shapes/src":10,"./controls/Application":17,"./controls/Button":18,"./controls/Check":19,"./controls/InputControl":20,"./controls/LayoutGroup":21,"./controls/List":22,"./controls/PickerList":23,"./controls/ScrollBar":24,"./controls/ScrollContainer":25,"./controls/ScrollText":26,"./controls/ScrollThumb":27,"./controls/Scrollable":28,"./controls/Scroller":29,"./controls/Slider":30,"./controls/TextInput":31,"./controls/ToggleButton":32,"./controls/renderers/DefaultListItemRenderer":33,"./core":36,"./data/ListCollection":37,"./skin/Theme":38,"./skin/ThemeFont":39,"./skin/ThemeParser":40,"./utils":44}],2:[function(require,module,exports){
module.exports = PIXI.layout = {
    HorizontalLayout:     require('./layout/HorizontalLayout'),
    Layout:               require('./layout/Layout'),
    LayoutAlignment:      require('./layout/LayoutAlignment'),
    TiledColumnsLayout:   require('./layout/TiledColumnsLayout'),
    TiledLayout:          require('./layout/TiledLayout'),
    TiledRowsLayout:      require('./layout/TiledRowsLayout'),
    VerticalLayout:       require('./layout/VerticalLayout')
};

},{"./layout/HorizontalLayout":3,"./layout/Layout":4,"./layout/LayoutAlignment":5,"./layout/TiledColumnsLayout":6,"./layout/TiledLayout":7,"./layout/TiledRowsLayout":8,"./layout/VerticalLayout":9}],3:[function(require,module,exports){
var LayoutAlignment = require('./LayoutAlignment');

/**
 * HorizontalLayout - just set alignment to
 * LayoutAlignment.HORIZONTAL_ALIGNMENT
 *
 * @class HorizontalLayout
 * @extends PIXI.layout.LayoutAlignment
 * @memberof PIXI.layout
 * @constructor
 */
function HorizontalLayout() {
    LayoutAlignment.call(this);
    this.alignment = LayoutAlignment.HORIZONTAL_ALIGNMENT;
}

HorizontalLayout.prototype = Object.create( LayoutAlignment.prototype );
HorizontalLayout.prototype.constructor = HorizontalLayout;
module.exports = HorizontalLayout;

},{"./LayoutAlignment":5}],4:[function(require,module,exports){
/**
 * basic layout stub - see LayoutAlignment
 *
 * @class Layout
 * @memberof PIXI.layout
 * @constructor
 */
function Layout() {
    this.gap = 0;
    this.padding = 0;
}

module.exports = Layout;

/**
 * If the total item height is smaller than the height of the bounds,
 * the items will be aligned to the top.
 *
 * @property VERTICAL_ALIGN_TOP
 * @static
 */
Layout.VERTICAL_ALIGN_TOP = 'top';

/**
 * If the total item height is smaller than the height of the bounds,
 * the items will be aligned to the middle.
 *
 * @property VERTICAL_ALIGN_MIDDLE
 * @static
 */
Layout.VERTICAL_ALIGN_MIDDLE = 'middle';

/**
 * Alignment justified
 *
 * @property ALIGN_JUSTIFY
 * @static
 */
Layout.ALIGN_JUSTIFY = 'justify';

/**
 * If the total item height is smaller than the height of the bounds,
 * the items will be aligned to the bottom.
 *
 * @property VERTICAL_ALIGN_BOTTOM
 * @static
 */
Layout.VERTICAL_ALIGN_BOTTOM = 'bottom';

/**
 * If the total item width is smaller than the width of the bounds, the
 * items will be aligned to the left.
 *
 * @property HORIZONTAL_ALIGN_LEFT
 * @static
 */
Layout.HORIZONTAL_ALIGN_LEFT = 'left';

/**
 * If the total item width is smaller than the width of the bounds, the
 * items will be aligned to the center.
 *
 * @property HORIZONTAL_ALIGN_CENTER
 * @static
 */
Layout.HORIZONTAL_ALIGN_CENTER = 'center';

/**
 * If the total item width is smaller than the width of the bounds, the
 * items will be aligned to the right.
 *
 * @property HORIZONTAL_ALIGN_RIGHT
 * @static
 */
Layout.HORIZONTAL_ALIGN_RIGHT = 'right';



/**
 * The space, in pixels, between items.
 *
 * @property gap
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'gap', {
    get: function() {
        return this._gap;
    },
    set: function(value) {
        if(this._gap === value) {
            return;
        }
        this._gap = value;
        this._needUpdate = true;
    }
});

/**
 * Indicates if the layout needs to be rearranged.
 *
 * @property needUpdate
 * @readonly
 */
Object.defineProperty(Layout.prototype, 'needUpdate', {
    get: function() {
        return this._needUpdate;
    }
});

/**
 * shotrtcut to set all paddings (left, right, top, bottom)
 *
 * @property padding
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'padding', {
    set: function(value) {
        this._paddingLeft = value;
        this._paddingRight = value;
        this._paddingBottom = value;
        this._paddingTop = value;
        this._needUpdate = true;
    },
    get: function (){
        // just return paddingTop, because we do not save the
        // overall padding value (just like feathers)
        return this._paddingTop;
    }
});

/**
 * The minimum space, in pixels, above the items.
 *
 * @default 0
 * @property paddingTop
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'paddingTop', {
    get:  function() {
        return this._paddingTop;
    },
    set: function(value) {
        if(this._paddingTop === value) {
            return;
        }
        this._paddingTop = value;
        this._needUpdate = true;
    }
});

/**
 * The minimum space, in pixels, below the items.
 *
 * @default 0
 * @property paddingTop
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'paddingBottom', {
    get:  function() {
        return this._paddingBottom;
    },
    set: function(value) {
        if(this._paddingBottom === value) {
            return;
        }
        this._paddingBottom = value;
        this._needUpdate = true;
    }
});

/**
 * The space, in pixels, that appears to the left, before the first
 * item.
 *
 * @default 0
 * @property paddingLeft
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'paddingLeft', {
    get:  function() {
        return this._paddingLeft;
    },
    set: function(value) {
        if(this._paddingLeft === value) {
            return;
        }
        this._paddingLeft = value;
        this._needUpdate = true;
    }
});

/**
 * The space, in pixels, that appears to the right, after the last item.
 *
 * @default 0
 * @property paddingLeft
 * @type Number
 */
Object.defineProperty(Layout.prototype, 'paddingRight', {
    get:  function() {
        return this._paddingRight;
    },
    set: function(value) {
        if(this._paddingRight === value) {
            return;
        }
        this._paddingRight = value;
        this._needUpdate = true;
    }
});

/**
 * Position (and possibly resizes) the supplied items.
 *
 * @method layout
 * @param items items that will be layouted {Array}
 * @param viewPortBounds {ViewPortBounds}
 */
/* jshint unused: false */
Layout.prototype.layout = function (items, viewPortBounds) {
};

},{}],5:[function(require,module,exports){
var Layout = require('./Layout');

/**
 * basic layout
 *
 * @class LayoutAlignment
 * @extends PIXI.layout.Layout
 * @memberof PIXI.layout
 * @constructor
 */
function LayoutAlignment() {
    Layout.call(this);
}

LayoutAlignment.prototype = Object.create( Layout.prototype );
LayoutAlignment.prototype.constructor = LayoutAlignment;
module.exports = LayoutAlignment;

LayoutAlignment.VERTICAL_ALIGNMENT = 'vertical';
LayoutAlignment.HORIZONTAL_ALIGNMENT = 'horizontal';

/**
 * apply percentage width/height to items.
 * percentages have higher priorities than fixed with.
 * So if you set a width higher than 0 but also percentWidth,
 * the width will be recalculated according to percentWidth.
 *
 * @method applyPercent
 * @param items
 * @param explicit space we have for the components
 * (this function will handle padding and gap, so the explicitWidth is
 *  for the whole available width)
 */
LayoutAlignment.prototype.applyPercent = function(items, explicit) {
    var _hor = (this.alignment === LayoutAlignment.HORIZONTAL_ALIGNMENT);

    var itemCount = items.length;
    var remaining = explicit;
    var totalExplicit = 0;
    var totalPercent = 0;

    var i, itemPercent, item;
    // sum up width/height required for all items
    for (i = 0; i < itemCount; i++) {
        item = items[i];
        var itemSpace;
        itemPercent = _hor ? item.percentWidth : item.percentHeight;
        itemSpace = _hor ? item.width : item.height;

        if (!isNaN(itemPercent) && itemPercent !== undefined &&
            itemPercent !== null) {
            totalPercent += itemPercent;
        } else if (!isNaN(itemSpace)) {
            // no percentWidth/percentHeight set for this item
            totalExplicit += itemSpace;
        }
    }

    // add space for all gaps
    totalExplicit += this._firstGap > 0 ? this._firstGap : this._gap;
    totalExplicit += (this._gap * (itemCount - 3));
    totalExplicit += this._lastGap > 0 ? this._lastGap : this._gap;

    var padding = _hor ?
        this._paddingLeft + this._paddingRight :
        this._paddingTop + this._paddingBottom;
    totalExplicit += padding;

    // use whole available space - if we do not sum up to 100 we will
    // stretch the items
    if(totalPercent < 100) {
        totalPercent = 100;
    }

    remaining -= totalExplicit;
    var percentToPixels = remaining / totalPercent;
    // claculate width/height for each item based on remaining width/height
    for(i = 0; i < itemCount; i++) {
        item = items[i];
        itemPercent = _hor ? item.percentWidth : item.percentHeight;
        if (itemPercent > 0) {
            if (_hor) {
                item.width = percentToPixels * itemPercent;
            } else {
                item.height = percentToPixels * itemPercent;
            }
        }
    }
};

/**
 * get current gap (includes first and last gap)
 *
 * @method _currentGap
 * @private
 * @param i current item position
 * @param items list of items (to determine if we are at the last gap)
 */
LayoutAlignment.prototype._currentGap = function(i, items) {
    if(!isNaN(this._firstGap) && i === 0)
    {
        return this._firstGap;
    }
    else if(!isNaN(this._lastGap) && i > 0 && i === items.length - 2)
    {
        return this._lastGap;
    }
    return this._gap;
};

/**
 * calculate layout for container
 */
LayoutAlignment.prototype.layoutContainer = function(container) {
    var _hor = (this.alignment === LayoutAlignment.HORIZONTAL_ALIGNMENT);
    return this.layout(container.children, 
        _hor ? container.width : container.height);
};

/**
 * Position (and possibly resizes) the supplied items.
 *
 * @method layout
 * @param items items that will be layouted {Array}
 * @param maxSpace max. width/height for the items {Number}
 */
LayoutAlignment.prototype.layout = function(items, maxSpace) {
    var _hor = (this.alignment === LayoutAlignment.HORIZONTAL_ALIGNMENT);

    maxSpace = maxSpace || NaN;
    // width/height the current layout takes
    var width = 0;
    var height = 0;
    var paddingStart = _hor ? this._paddingLeft : this._paddingTop;

    // recalculate width/height for items with percentages
    this.applyPercent(items, maxSpace);

    var position = paddingStart;

    // calculate item position (x/y coordinates)
    for(var i = 0; i < items.length; i++)
    {
        var item = items[i];

        // move item to position calculated in previous loop
        if (_hor) {
            item.x = Math.floor(position);
            // return height of highest item
            height = Math.max(item.height, height);
        } else {
            item.y = Math.floor(position);
            // return width of widest item
            width = Math.max(item.width, width);
        }
        var itemSpace = _hor ? item.width : item.height;
        // calculate position for next item
        position += itemSpace + this._currentGap(i, items);
    }
    if (_hor) {
        width = position;
    } else {
        height = position;
    }
    return [width, height];
};

/**
 * The space between the first and second element
 *
 * @property firstGap
 * @type String
 */
Object.defineProperty(LayoutAlignment.prototype, 'firstGap', {
    set: function(value) {
        if (value === this._firstGap) {
            return;
        }
        this._firstGap = value;
        this._needUpdate = true;
    },
    get: function() {
        return this._firstGap;
    }
});

/**
 * The space between the last and second-to-last element
 *
 * @property firstGap
 * @type String
 */
Object.defineProperty(LayoutAlignment.prototype, 'lastGap', {
    set: function(value) {
        if (value === this._lastGap) {
            return;
        }
        this._lastGap = value;
        this._needUpdate = true;
    },
    get: function() {
        return this._lastGap;
    }
});

},{"./Layout":4}],6:[function(require,module,exports){
var TiledLayout = require('./TiledLayout');

/**
 * Tiled columns Layout
 * (roughly based on starling TiledColumnsLayout)
 *
 * @class TiledColumnsLayout
 * @extends PIXI.layout.TiledLayout
 * @memberof PIXI.layout
 * @constructor
 */

function TiledColumnsLayout() {
    TiledLayout.call(this);
    this._paging = TiledLayout.PAGING_VERTICAL;
    this._orientation = TiledLayout.ORIENTATION_COLUMNS;
}

TiledColumnsLayout.prototype = Object.create( TiledLayout.prototype );
TiledColumnsLayout.prototype.constructor = TiledColumnsLayout;
module.exports = TiledColumnsLayout;

/**
 * Quickly sets both <code>horizontalGap</code> and <code>verticalGap</code>
 * to the same value. The <code>gap</code> getter always returns the
 * value of <code>verticalGap</code>, but the value of
 * <code>horizontalGap</code> may be different.
 *
 * @default 0
 *
 * @see #_horizontalGap
 * @see #_verticalGap
 * @property gap
 * @type Number
 */
Object.defineProperty(TiledColumnsLayout.prototype, 'gap', {
    set: function(value) {
        this._verticalGap = value;
        this._horizontalGap = value;
        this._needUpdate = true;
    },
    get: function() {
        return this._verticalGap;
    }
});

},{"./TiledLayout":7}],7:[function(require,module,exports){
var Layout = require('./Layout');

/**
 * TiledLayout a layout for tiled rows/columns
 *
 * @class TiledLayout
 * @extends PIXI.layout.Layout
 * @memberof PIXI.layout
 * @constructor
 */
function TiledLayout() {
    Layout.call(this);
    this._useSquareTiles = false;
    this._horizontalGap = 0;
    this._verticalGap = 0;
    this._tileHorizontalAlign = TiledLayout.TILE_HORIZONTAL_ALIGN_CENTER;
    this._tileVerticalAlign = TiledLayout.TILE_VERTICAL_ALIGN_MIDDLE;
    this._paging = TiledLayout.PAGING_NONE;
    this._orientation = TiledLayout.ORIENTATION_ROWS;
    this._needUpdate = true;
}

TiledLayout.prototype = Object.create( Layout.prototype );
TiledLayout.prototype.constructor = TiledLayout;
module.exports = TiledLayout;


TiledLayout.ORIENTATION_ROWS = 'rows';
TiledLayout.ORIENTATION_COLUMNS = 'columns';

/**
 * If an item height is smaller than the height of a tile, the item will
 * be aligned to the top edge of the tile.
 *
 * @property TILE_VERTICAL_ALIGN_TOP
 * @static
 */
TiledLayout.TILE_VERTICAL_ALIGN_TOP = 'top';

/**
 * If an item height is smaller than the height of a tile, the item will
 * be aligned to the middle of the tile.
 *
 * @property TILE_VERTICAL_ALIGN_MIDDLE
 * @static
 */
TiledLayout.TILE_VERTICAL_ALIGN_MIDDLE = 'middle';

/**
 * If an item height is smaller than the height of a tile, the item will
 * be aligned to the bottom edge of the tile.
 *
 * @property TILE_VERTICAL_ALIGN_BOTTOM
 * @static
 */
TiledLayout.TILE_VERTICAL_ALIGN_BOTTOM = 'bottom';

/**
 * The item will be resized to fit the height of the tile.
 *
 * @property TILE_VERTICAL_ALIGN_JUSTIFY
 * @static
 */
TiledLayout.TILE_VERTICAL_ALIGN_JUSTIFY = 'justify';

/**
 * If an item width is smaller than the width of a tile, the item will
 * be aligned to the left edge of the tile.
 *
 * @property TILE_HORIZONTAL_ALIGN_LEFT
 * @static
 */
TiledLayout.TILE_HORIZONTAL_ALIGN_LEFT = 'left';

/**
 * If an item width is smaller than the width of a tile, the item will
 * be aligned to the center of the tile.
 *
 * @property TILE_HORIZONTAL_ALIGN_CENTER
 * @static
 */
TiledLayout.TILE_HORIZONTAL_ALIGN_CENTER = 'center';

/**
 * If an item width is smaller than the width of a tile, the item will
 * be aligned to the right edge of the tile.
 *
 * @property TILE_HORIZONTAL_ALIGN_RIGHT
 * @static
 */
TiledLayout.TILE_HORIZONTAL_ALIGN_RIGHT = 'right';

/**
 * The item will be resized to fit the width of the tile.
 *
 * @property TILE_HORIZONTAL_ALIGN_JUSTIFY
 * @static
 */
TiledLayout.TILE_HORIZONTAL_ALIGN_JUSTIFY = 'justify';

/**
 * The items will be positioned in pages horizontally from left to right.
 *
 * @property PAGING_HORIZONTAL
 * @static
 */
TiledLayout.PAGING_HORIZONTAL = 'horizontal';

/**
 * The items will be positioned in pages vertically from top to bottom.
 *
 * @property PAGING_VERTICAL
 * @static
 */
TiledLayout.PAGING_VERTICAL = 'vertical';



/**
 * calculate layout for container
 */
TiledLayout.prototype.layoutContainer = function(container) {
    return this.layout(container.children, container.width, container.height);
};


/**
 * Positions (and possibly resizes) the supplied items.
 *
 * @method layout
 * @param items items that will be layouted
 * @param maxWidth
 * @param maxHeight
 */
TiledLayout.prototype.layout = function (items, maxWidth, maxHeight) {
    var _rows = this._orientation === TiledLayout.ORIENTATION_ROWS;
    if(items.length === 0) {
        return [0, 0];
    }

    maxWidth = maxWidth || NaN;
    maxHeight = maxHeight || NaN;
    
    // width/height the current layout takes
    var width = 0;
    var height = 0;

    var i, item;
    var tileWidth = 0;
    var tileHeight = 0;

    // get size for tiles by saving the highest/widest tile.
    for(i = 0; i < items.length; i++) {
        item = items[i];
        if(!item) {
            continue;
        }
        
        tileWidth = Math.max(tileWidth, item.width);
        tileHeight = Math.max(tileHeight, item.height);
    }

    // make tiles square
    if (this._useSquareTiles) {
        if (tileWidth > tileHeight) {
            tileHeight = tileWidth;
        } else if (tileHeight > tileWidth) {
            tileWidth = tileHeight;
        }
    }

    // calculate tiles needed (and their width/height)
    var availableWidth = NaN;
    var availableHeight = NaN;

    var horizontalTileCount = _rows ? items.length : 1;

    if(!isNaN(maxWidth)) {
        availableWidth = maxWidth;
        horizontalTileCount = (maxWidth -
            this._paddingLeft - this._paddingRight +
            this._horizontalGap) / (tileWidth + this._horizontalGap);
    }
    horizontalTileCount = Math.floor(Math.max(horizontalTileCount, 1));

    var verticalTileCount = _rows ? 1 : items.length;
    if(!isNaN(maxHeight)) {
        availableHeight = maxHeight;
        verticalTileCount = (maxHeight -
            this._paddingTop - this._paddingBottom +
            this._verticalGap) / (tileHeight + this._verticalGap);
    }
    verticalTileCount = Math.floor(Math.max(verticalTileCount, 1));
    
    var startX = this._paddingLeft;
    var startY = this._paddingTop;

    var perPage = horizontalTileCount * verticalTileCount;
    var pageIndex = 0;
    var nextPageStartIndex = perPage;
    var pageStart = _rows ? startX : startY;
    var positionX = startX;
    var positionY = startY;
    var itemIndex = 0;
    for(i = 0; i < items.length; i++)
    {
        item = items[i];
        if (_rows) {
            if(itemIndex !== 0 && itemIndex % horizontalTileCount === 0)
            {
                positionX = pageStart;
                positionY += tileHeight + this._verticalGap;
            }
        } else { // columns
            if(itemIndex !== 0 && i % verticalTileCount === 0)
            {
                positionX += tileWidth + this._horizontalGap;
                positionY = pageStart;
            }
        }
        if(itemIndex === nextPageStartIndex) {
            pageIndex++;
            nextPageStartIndex += perPage;

            //we can use availableWidth and availableHeight here without
            //checking if they're NaN because we will never reach a
            //new page without them already being calculated.
            if (_rows) {
                if(this._paging === TiledLayout.PAGING_HORIZONTAL)
                {
                    positionX = pageStart === startX + availableWidth * pageIndex;
                    positionY = startY;
                } else if(this._paging === TiledLayout.PAGING_VERTICAL) {
                    positionY = startY + availableHeight * pageIndex;
                }
            } else { // columns
                if(this._paging === TiledLayout.PAGING_HORIZONTAL) {
                    positionX = startX + availableWidth * pageIndex;
                } else if(this._paging === TiledLayout.PAGING_VERTICAL) {
                    positionX = startX;
                    positionY = pageStart = startY + availableHeight * pageIndex;
                }
            }
        }
        if(item) {
            switch(this._tileHorizontalAlign) {
                case TiledLayout.TILE_HORIZONTAL_ALIGN_JUSTIFY:
                    item.x = positionX;
                    item.width = tileWidth;
                    break;
                case TiledLayout.TILE_HORIZONTAL_ALIGN_LEFT:
                    item.x = positionX;
                    break;
                case TiledLayout.TILE_HORIZONTAL_ALIGN_RIGHT:
                    item.x = positionX + tileWidth - item.width;
                    break;
                default: //center or unknown
                    item.x = positionX + (tileWidth - item.width) / 2;
            }
            switch(this._tileVerticalAlign) {
                case TiledLayout.TILE_VERTICAL_ALIGN_JUSTIFY:
                    item.y = positionY;
                    item.height = tileHeight;
                    break;
                case TiledLayout.TILE_VERTICAL_ALIGN_TOP:
                    item.y = positionY;
                    break;
                case TiledLayout.TILE_VERTICAL_ALIGN_BOTTOM:
                    item.y = positionY + tileHeight - item.height;
                    break;
                default: //middle or unknown
                    item.y = positionY + (tileHeight - item.height) / 2;
            }
        }
        if (_rows) {
            positionX += tileWidth + this._horizontalGap;
        } else { // columns
            positionY += tileHeight + this._verticalGap;
        }
        itemIndex++;
    }

    this._needUpdate = false;
    return [width, height];
};

/**
 * use same width and height for the tiles (calculated by biggest square)
 *
 * @property useSquareTiles
 * @type Boolean
 */
Object.defineProperty(TiledLayout.prototype, 'useSquareTiles', {
    set: function(useSquareTiles) {
        this._useSquareTiles = useSquareTiles;
        this._needUpdate = true;
    },
    get: function() {
        return this._useSquareTiles;
    }
});

},{"./Layout":4}],8:[function(require,module,exports){
var TiledLayout = require('./TiledLayout');

/**
 * Tiled rows Layout
 * (roughly based on starling TiledRowsLayout)
 *
 * @class TiledRowsLayout
 * @extends PIXI.layout.TiledLayout
 * @memberof PIXI.layout
 * @constructor
 */
function TiledRowsLayout() {
    TiledLayout.call(this);
    this._paging = TiledLayout.PAGING_HORIZONTAL;
    this._orientation = TiledLayout.ORIENTATION_ROWS;
}

TiledRowsLayout.prototype = Object.create( TiledLayout.prototype );
TiledRowsLayout.prototype.constructor = TiledRowsLayout;
module.exports = TiledRowsLayout;

/**
 * Quickly sets both <code>horizontalGap</code> and <code>verticalGap</code>
 * to the same value. The <code>gap</code> getter always returns the
 * value of <code>horizontalGap</code>, but the value of
 * <code>verticalGap</code> may be different.
 *
 * @default 0
 *
 * @see #_horizontalGap
 * @see #_verticalGap
 *
 * @property gap
 * @type Number
 */
Object.defineProperty(TiledRowsLayout.prototype, 'gap', {
    get: function() {
        return this._horizontalGap;
    },
    set: function(value) {
        this._verticalGap = value;
        this._horizontalGap = value;
        this._needUpdate = true;
    }
});

},{"./TiledLayout":7}],9:[function(require,module,exports){
var LayoutAlignment = require('./LayoutAlignment');

/**
 * VerticalLayout - just set alignment to
 * LayoutAlignment.VERTICAL_ALIGNMENT
 *
 * @class VerticalLayout
 * @extends PIXI.layout.LayoutAlignment
 * @memberof PIXI.layout
 * @constructor
 */
function VerticalLayout() {
    LayoutAlignment.call(this);
    this.alignment = LayoutAlignment.VERTICAL_ALIGNMENT;
}

VerticalLayout.prototype = Object.create( LayoutAlignment.prototype );
VerticalLayout.prototype.constructor = VerticalLayout;
module.exports = VerticalLayout;

},{"./LayoutAlignment":5}],10:[function(require,module,exports){
module.exports = PIXI.shapes = {
    Shape:          require('./shapes/Shape'),
    Diamond:        require('./shapes/Diamond'),
    Ellipse:        require('./shapes/Ellipse'),
    Line:           require('./shapes/Line'),
    Rect:           require('./shapes/Rect')
};

},{"./shapes/Diamond":11,"./shapes/Ellipse":12,"./shapes/Line":13,"./shapes/Rect":14,"./shapes/Shape":15}],11:[function(require,module,exports){
var Shape = require('./Shape');

/**
 * basic diamond shape
 *
 * @class Diamond
 * @extends PIXI.shapes.Shape
 * @memberof PIXI.shapes
 * @constructor
 */
function Diamond(color, alpha, width, height) {
    Shape.call(this, color, alpha, width, height);
}

Diamond.prototype = Object.create( Shape.prototype );
Diamond.prototype.constructor = Diamond;
module.exports = Diamond;

/**
 * draw the diamond during redraw.
 *
 * @method _drawShape
 * @private
 */
Diamond.prototype._drawShape = function() {
    this.moveTo(this._width/2, 0)
        .lineTo(this._width, this._height/2)
        .lineTo(this._width/2, this._height)
        .lineTo(0, this._height/2)
        .lineTo(this._width/2, 0);
};

},{"./Shape":15}],12:[function(require,module,exports){
var Shape = require('./Shape');

/**
 * basic ellipse shape
 *
 * @class Ellipse
 * @extends PIXI.shape.Shape
 * @memberof PIXI.shape
 * @constructor
 */
function Ellipse(color, alpha, width, height) {
    Shape.call(this, color, alpha, width, height);
}

Ellipse.prototype = Object.create( Shape.prototype );
Ellipse.prototype.constructor = Ellipse;
module.exports = Ellipse;

/**
 * draw the ellipse during redraw.
 *
 * @method _drawShape
 * @private
 */
Ellipse.prototype._drawShape = function() {
    

    this.drawEllipse(this.width/2, this.height/2, 
        Math.abs(this.width/2), 
        Math.abs(this.height/2));
};

},{"./Shape":15}],13:[function(require,module,exports){
var Shape = require('./Shape');

/**
 * basic line
 *
 * @class Line
 * @extends PIXI.shape.Shape
 * @memberof PIXI.shape
 * @constructor
 */

function Line(color, alpha, width, height, lineWidth, reverse) {
    this._reverse = reverse;
    Shape.call(this, color, alpha, width, height);
    this.lineWidth = lineWidth || 1;
}

Line.prototype = Object.create( Shape.prototype );
Line.prototype.constructor = Line;
module.exports = Line;

/**
 * draw the rect during redraw. will use drawRoundRect if a radius is provided.
 *
 * @method _drawShape
 * @private
 */
Line.prototype._drawShape = function() {
    if (this.reverse) {
        this.moveTo(this._width, 0);
        this.lineTo(0, this._height);
    } else {
        this.moveTo(0, 0);
        this.lineTo(this._width,this._height);
    }
};

/**
 * The radius of the rectangle border, setting this will redraw the component.
 *
 * @property color
 * @type Number
 */
Object.defineProperty(Line.prototype, 'reverse', {
    get: function() {
        return this._reverse;
    },
    set: function(reverse) {
        this._reverse = reverse;
        this.invalid = true;
    }
});


/**
 * update before draw call
 * Line has to be drawn different than other Shapes
 *
 * @method redraw
 */
Line.prototype.redraw = function() {
    if(!this.invalid) {
        return;
    }

    var lineWidth = this.lineWidth;
    this.clear();
    this.lineStyle(lineWidth, this.color);
    this._drawShape();

    this.invalid = false;
};

},{"./Shape":15}],14:[function(require,module,exports){
var Shape = require('./Shape');

/**
 * basic rectangular shape
 *
 * @class Rect
 * @extends PIXI.shapes.Shape
 * @memberof PIXI.shapes
 * @constructor
 */

function Rect(color, alpha, width, height, radius) {
    Shape.call(this, color, alpha, width, height);
    this._radius = radius;
}

Rect.prototype = Object.create( Shape.prototype );
Rect.prototype.constructor = Rect;
module.exports = Rect;

/**
 * draw the rect during redraw. will use drawRoundRect if a radius is provided.
 *
 * @method _drawShape
 * @private
 */
Rect.prototype._drawShape = function() {
    if (this.radius) {
        this.drawRoundedRect(
            Math.min(this._width, 0), 
            Math.min(this._height, 0), 
            Math.abs(this._width),
            Math.abs(this._height),
            this.radius);
    } else {
        this.drawRect(
            Math.min(this._width, 0), 
            Math.min(this._height, 0), 
            Math.abs(this._width),
            Math.abs(this._height));
    }
};

/**
 * The radius of the rectangle border, setting this will redraw the component.
 *
 * @property color
 * @type Number
 */
Object.defineProperty(Rect.prototype, 'radius', {
    get: function() {
        return this._radius;
    },
    set: function(radius) {
        this._radius = radius;
        this.invalid = true;
    }
});

},{"./Shape":15}],15:[function(require,module,exports){
/**
 * shape base class
 *
 * @class Shape
 * @extends PIXI.Graphics
 * @memberof PIXI.shapes
 * @constructor
 */
function Shape(color, alpha, width, height) {
    PIXI.Graphics.call(this);
    this._color = color;
    this._alpha = alpha || 1.0;
    this._width = width;
    this._height = height;
    this.invalid = true;
}

Shape.prototype = Object.create( PIXI.Graphics.prototype );
Shape.prototype.constructor = Shape;
module.exports = Shape;

// setter/getter
/**
 * The width of the shape, setting this will redraw the component.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(Shape.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(width) {
        this._width = width;
        this.invalid = true;
    }
});

/**
 * The height of the shape, setting this will redraw the component.
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Shape.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(height) {
        this._height = height;
        this.invalid = true;
    }
});

/**
 * The fill color of the shape, setting this will redraw the component.
 *
 * @property color
 * @type Number
 */

Object.defineProperty(Shape.prototype, 'color', {
    get: function() {
        return this._color;
    },
    set: function(color) {
        this._color = color;
        this.invalid = true;
    }
});

/**
 * The alpha of the shape, setting this will redraw the component.
 *
 * @property alpha
 * @type Number
 */

Object.defineProperty(Shape.prototype, 'alpha', {
    get: function() {
        return this._alpha;
    },
    set: function(alpha) {
        this._alpha = alpha;
        this.invalid = true;
    }
});

/**
 * apply the color to the shape (called during redraw)
 *
 * @method applyColor
 */
Shape.prototype.applyColor = function() {
    this.beginFill(this.color, this.alpha);
};

/**
 * apply the border around shape (called during redraw)
 *
 * @method drawBorder
 */
Shape.prototype.drawBorder = function() {
    if (this.border) {
        this.lineStyle(this.border, this.borderColor);
    }
};

/**
 * draw the shape during redraw. defaults to a simple rect
 *
 * @method _drawShape
 * @private
 */
Shape.prototype._drawShape = function() {
    // default shape is a rect
    this.drawRect(
        Math.min(this._width, 0), 
        Math.min(this._height, 0), 
        Math.abs(this._width),
        Math.abs(this._height));
};


Shape.prototype.updateTransform = function() {
    this.redraw();

    PIXI.Graphics.prototype.updateTransform.call(this);
};


/**
 * update before draw call
 * redraw control for current state from theme
 *
 * @method redraw
 */
Shape.prototype.redraw = function() {
    if(!this.invalid) {
        return;
    }

    this.clear();
    this.applyColor();
    this.drawBorder();
    this._drawShape();

    this.invalid = false;
};

},{}],16:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

//
// We store our EE objects in a plain object whose properties are event names.
// If `Object.create(null)` is not supported we prefix the event names with a
// `~` to make sure that the built-in object properties are not overridden or
// used as an attack vector.
// We also assume that `Object.create(null)` is available when the event name
// is an ES6 Symbol.
//
var prefix = typeof Object.create !== 'function' ? '~' : false;

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} [once=false] Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Hold the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var events = this._events
    , names = []
    , name;

  if (!events) return names;

  for (name in events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events && this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Mixed} context Only remove listeners matching this context.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return this;

  var listeners = this._events[evt]
    , events = [];

  if (fn) {
    if (listeners.fn) {
      if (
           listeners.fn !== fn
        || (once && !listeners.once)
        || (context && listeners.context !== context)
      ) {
        events.push(listeners);
      }
    } else {
      for (var i = 0, length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[evt] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[prefix ? prefix + event : event];
  else this._events = prefix ? {} : Object.create(null);

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}],17:[function(require,module,exports){
var Control = require('../core/Control');

/**
 * entry point for your application, makes some assumptions, (e.g. that you
 * always want fullscreen) and shortcuts some fancy stuff like a gradient
 * background.
 *
 * @class Application
 * @extends GOWN.Control
 * @memberof GOWN
 * @constructor
 * @param config {Object} - equals the renderer config for pixi with an
 *  exception: the backgroundColor is an Array a of colors it will drawn as
 *  vertical gradient
 *  (default: {backgroundColor: 0xffffff})
 * @param fullscreen {Boolean}
 *  (default: true)
 * @param renderer {WebGLRenderer|CanvasRenderer}
 *  (default: null - will create a new renderer)
 * @param stage {Stage}
 *  (default null - will use a new PIXI.Container)
 */
function Application(config, fullscreen, renderer, stage) {
    var width = 800;
    var height = 600;
    if (fullscreen) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

    if (!config) {
        config = {
            backgroundColor: 0xffffff
        };
    }

    var _background; // to store background if it is an array because we want
                     // to set the backgroundColor in config to a hex value
    if (!stage || !renderer) {
        stage = new PIXI.Container();
        if (config.backgroundColor && config.backgroundColor instanceof Array) {
            _background = config.backgroundColor;
            config.backgroundColor = 0xffffff;
        }
        this._background = config.backgroundColor;
        renderer = PIXI.autoDetectRenderer(width, height, config);
        document.body.appendChild(renderer.view);
    }
    /* jshint ignore:start */
    this._stage = stage;
    this._renderer = renderer;
    /* jshint ignore:end */
    this._width = renderer.width;
    this._height = renderer.height;

    Control.call(this);
    stage.addChild(this);

    if (_background) {
        this.background = _background;
    }
    this.fullscreen = fullscreen === undefined || fullscreen;

    this.animate();
}

Application.prototype = Object.create( Control.prototype );
Application.prototype.constructor = Application;
module.exports = Application;

/**
 * call requestAnimationFrame to render the application at max. FPS
 *
 * @method animate
 */
/* jshint ignore:start */
Application.prototype.animate = function() {
    var scope = this;
    var animate = function() {
        if (scope._stage) {
            scope._renderer.render(scope._stage);
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
};
/* jshint ignore:end */

/**
 * creates a gradient rect that can be used as background
 * (uses a separate canvas to create a new Texture)
 *
 * @method _createGradientRect
 * @private
 */
Application.prototype._createGradientRect = function(gradient, width, height) {
    var bgCanvas = document.createElement('canvas');
    bgCanvas.width = width || 256;
    bgCanvas.height = height || 256;
    var ctx = bgCanvas.getContext('2d');
    var linearGradient = ctx.createLinearGradient(0, 0, 0, bgCanvas.height);
    for (var i = 0; i < gradient.length; i++) {
        var color = gradient[i];
        if (typeof(color) === 'number') {
            color = '#' +  gradient[i].toString(16);
        }
        linearGradient.addColorStop(i, color);
    }
    ctx.fillStyle = linearGradient;
    ctx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
    return PIXI.Texture.fromCanvas(bgCanvas);
};

/**
 * clean application: remove event listener, free memory
 * (can also remove the canvas from the DOM tree if wanted)
 *
 * @method destroy
 * @param [destroyChildren=false] {boolean} if set to true, all the children will have their destroy method called as well
 * @param [removeCanvas=true] {boolean} destroys the canvas and remove it from the dom tree
 */
Application.prototype.destroy = function(destroyChildren, removeCanvas) {
    removeCanvas = removeCanvas === undefined || removeCanvas;
    this._removeBackground();
    this.fullscreen = false; // remove event listener on resize using setter
    PIXI.Container.prototype.destroy.call(this, destroyChildren);
    if (removeCanvas) {
        document.body.removeChild(this._renderer.view);
    }
    this._stage = null;
    this._renderer = null;
};

/**
 * called when the browser window / the application is resized
 *
 * @method onresize
 */
Application.prototype.onresize = function() {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._renderer.resize(this._width, this._height);
    if (this.bg) {
        this.bg.width = this._width;
        this.bg.height = this._height;
    }
    this.emit('resize', this._width, this._height);
};

/**
 * remove background
 * @method _removeBackground
 * @private
 */
Application.prototype._removeBackground = function() {
    if (this.bg) {
        this.removeChild(this.bg);
        this.bg = null;
    }
};

/**
 * set fullscreen and resize to screen size
 *
 * @property enabled
 * @type Boolean
 */
Object.defineProperty(Application.prototype, 'fullscreen', {
    get: function() {
        return this._fullscreen;
    },
    set: function(value) {
        if (this._fullscreen && !value) {
            window.removeEventListener('resize', this._onresize);
        } else if (!this._fullscreen && value) {
            this._renderer.view.style.top = 0;
            this._renderer.view.style.left = 0;
            this._renderer.view.style.right = 0;
            this._renderer.view.style.bottom = 0;
            this._renderer.view.style.position = 'absolute';
            this._onresize = this.onresize.bind(this);
            window.addEventListener('resize', this._onresize);
        }
        this._fullscreen = value;
    }
});

/**
 * set and draw background
 *
 * @property enabled
 * @type Boolean
 */
Object.defineProperty(Application.prototype, 'background', {
    get: function() {
        return this._background;
    },
    set: function(value) {
        if (value === this._background) {
            return;
        }
        this._removeBackground();
        if (value instanceof Array) {
            this.bg = new PIXI.Sprite(this._createGradientRect(value));
            this.bg.width = this._width;
            this.bg.height = this._height;
            this.addChildAt(this.bg, 0);
        } else {
            this._renderer.backgroundColor = value;
        }
        this._background = value;
    }
});

},{"../core/Control":34}],18:[function(require,module,exports){
var Skinable = require('../core/Skinable');
var ScaleContainer = require('../utils/ScaleContainer');

/**
 * The basic Button with 3 states (up, down and hover) and a label that is
 * centered on it
 *
 * @class Button
 * @extends GOWN.Skinable
 * @memberof GOWN
 * @constructor
 */
function Button(theme, skinName) {
    this.skinName = skinName || Button.SKIN_NAME;
    this._validStates = this._validStates || Button.stateNames;
    Skinable.call(this, theme);
    this.handleEvent('up');

    this.updateLabel = false; // label text changed

    this.touchstart = this.mousedown;
    this.touchend = this.mouseupoutside = this.mouseup;
    this.touchendoutside = this.mouseout;
}

Button.prototype = Object.create( Skinable.prototype );
Button.prototype.constructor = Button;
module.exports = Button;

// name of skin that will be applied
Button.SKIN_NAME = 'button';

// Identifier for the different button states
/**
 * Up state: mouse button is released or finger is removed from the screen
 *
 * @property UP
 * @static
 * @final
 * @type String
 */
Button.UP = 'up';

/**
 * Down state: mouse button is pressed or finger touches the screen
 *
 * @property DOWN
 * @static
 * @final
 * @type String
 */
Button.DOWN = 'down';

/**
 * Hover state: mouse pointer hovers over the button
 * (ignored on mobile)
 *
 * @property HOVER
 * @static
 * @final
 * @type String
 */
Button.HOVER = 'hover';

/**
 * names of possible states for a button
 *
 * @property stateNames
 * @static
 * @final
 * @type String
 */
Button.stateNames = [
    Button.DOWN, Button.HOVER, Button.UP
];

// triggered event name for button
Button.TRIGGERED = 'triggered';

/**
 * initiate all skins first
 * (to prevent flickering)
 *
 * @method preloadSkins
 */
Button.prototype.preloadSkins = function() {
    for (var i = 0; i < this._validStates.length; i++) {
        var name = this._validStates[i];
        this.fromSkin(name, this.skinLoaded);
    }
};

/**
 * skin has been loaded (see preloadSkins) and stored into the skinCache.
 * add to container, hide and resize
 *
 * @method skinLoaded
 */
Button.prototype.skinLoaded = function(skin) {
    this.addChildAt(skin, 0);
    skin.alpha = 0.0;
    if (this.width) {
        skin.width = this.width;
    } else if (skin.minWidth) {
        this.width = skin.width = skin.minWidth;
    }
    if (this.height) {
        skin.height = this.height;
    } else if (skin.minHeight) {
        this.height = skin.height = skin.minHeight;
    }
}

Button.prototype.mousedown = function() {
    this.handleEvent(Button.DOWN);
};

Button.prototype.mouseup = function() {
    this.handleEvent(Button.UP);
};

Button.prototype.mousemove = function() {
};

Button.prototype.mouseover = function() {
    this.handleEvent(Button.HOVER);
};

Button.prototype.mouseout = function() {
    this.handleEvent('out');
};


/**
 * update width/height of the button
 *
 * @method updateDimensions
 */
Button.prototype.updateDimensions = function() {
    var width = this.worldWidth;
    var height = this.worldHeight;
    if (this.hitArea) {
        this.hitArea.width = width;
        this.hitArea.height = height;
    } else {
        this.hitArea = new PIXI.Rectangle(0, 0, width, height);
    }
    for (var i = 0; i < this._validStates.length; i++) {
        var name = this._validStates[i];
        var skin = this.skinCache[name];
        if (skin) {
            skin.width = width;
            skin.height = height;
        }
    }

    if(this.labelText) {
        var scaleY = height / this._height;
        this.labelText.style.fontSize = this.theme.textStyle.fontSize * scaleY;
        this.labelText.style = this.labelText.style; // trigger setter
        this.updateLabelDimensions();
    }
};

/**
 * handle one of the mouse/touch events
 *
 * @method handleEvent
 * @param type one of the valid states
 */
Button.prototype.handleEvent = function(type) {
    if (!this._enabled) {
        return;
    }
    if (type === Button.DOWN) {
        this.currentState = Button.DOWN;
        this._pressed = true;
    } else if (type === Button.UP) {
        this._pressed = false;

        if (this._over) {
            // the user taps or clicks the button
            this.emit(Button.TRIGGERED, this);
            if (this.theme.hoverSkin) {
                this.currentState = Button.HOVER;
            }
        } else {
            this.currentState = Button.UP;
        }
    } else if (type === Button.HOVER) {
        this._over = true;
        if (this._pressed) {
            this.currentState = Button.DOWN;
        } else if (this.theme.hoverSkin) {
            this.currentState = Button.HOVER;
        }
    } else  { // type === rollout and default
        if (this._over) {
            this._over = false;
        }
        this.currentState = Button.UP;
    }
};

// performance increase to avoid using call.. (10x faster)
Button.prototype.redrawSkinable = Skinable.prototype.redraw;

/**
 * update before draw call (position label)
 *
 * @method redraw
 */
Button.prototype.redraw = function() {
    if (this.updateLabel) {
        this.createLabel();
    }
    this.redrawSkinable();
};

/**
 * create/update a label for this button
 *
 * @method createLabel
 */
Button.prototype.createLabel = function() {
    if(this.labelText) {
        this.labelText.text = this._label;
        this.labelText.style = this.theme.textStyle.clone();
    } else {
        this.labelText = new PIXI.Text(this._label, this.theme.textStyle.clone());
        this.addChild(this.labelText);
    }
    this.updateLabelDimensions();
    this.updateLabel = false;
};

/**
 * create/update the position of the label
 *
 * @method updateLabelDimensions
 */
Button.prototype.updateLabelDimensions = function () {
    if (this.labelText && this.labelText.text &&
        (this.worldWidth - this.labelText.width) >= 0 &&
        (this.worldHeight - this.labelText.height) >= 0) {
        this.labelText.x = Math.floor((this.worldWidth - this.labelText.width) / 2);
        this.labelText.y = Math.floor((this.worldHeight - this.labelText.height) / 2);
    }
};

Button.prototype.skinableSetTheme = Skinable.prototype.setTheme;

/**
 * change the theme
 *
 * @method setTheme
 * @param theme the new theme {Theme}
 */
Button.prototype.setTheme = function(theme) {
    // this theme has other font or color settings - update the label
    if (this.labelText) {
        this.updateLabel = (this.updateLabel ||
            this.labelText.font !== this.theme.labelFont ||
            this.labelText.color !== this.theme.labelColor );
    }
    this.skinableSetTheme(theme);
};


/**
 * The current state (one of _validStates)
 *
 * @property currentState
 * @type String
 */
Object.defineProperty(Button.prototype, 'currentState',{
    get: function() {
        return this._currentState;
    },
    set: function(value) {
        if (this._currentState === value) {
            return;
        }
        if (this._validStates.indexOf(value) < 0) {
            throw new Error('Invalid state: ' + value + '.');
        }
        this._currentState = value;
        // invalidate state so the next draw call will redraw the control
        this.invalidState = true;
    }
});

/**
 * Create/Update the label of the button.
 *
 * @property label
 * @type String
 */
Object.defineProperty(Button.prototype, 'label', {
    get: function() {
        return this._label;
    },
    set: function(label) {
        if(this._label === label) {
            return;
        }
        this._label = label;
        this.updateLabel = true;
    }
});

},{"../core/Skinable":35,"../utils/ScaleContainer":42}],19:[function(require,module,exports){
var ToggleButton = require('./ToggleButton');

/**
	* A toggle control that contains a label and a box that may be checked
	* or not to indicate selection.
  *
  * @class Check
  * @extends GOWN.ToggleButton
  * @memberof GOWN
  * @constructor
  */
function Check(theme, skinName) {
    skinName = skinName || Check.SKIN_NAME;
    ToggleButton.call(this, theme, skinName);
}

Check.prototype = Object.create( ToggleButton.prototype );
Check.prototype.constructor = Check;
module.exports = Check;

// name of skin that will be applied
Check.SKIN_NAME = 'check';

},{"./ToggleButton":32}],20:[function(require,module,exports){
var Skinable = require('../core/Skinable'),
    InputWrapper = require('../utils/InputWrapper');

/**
 * InputControl used for TextInput, TextArea and everything else that
 * is capable of entering text
 *
 * based on PIXI.Input InputObject by Sebastian Nette,
 * see https://github.com/SebastianNette/PIXI.Input
 *
 * @class InputControl
 * @extends GOWN.Skinable
 * @memberof GOWN
 * @constructor
 */
function InputControl(text, theme) {
    Skinable.call(this, theme);
    this.text = text || '';
    // create DOM Input (if we need one)
    InputWrapper.createInput();
    this.hasFocus = false;

    /**
     * indicates if the mouse button has been pressed
     * @property _mouseDown
     * @type {boolean}
     * @private
     */
    this._mouseDown = false;

    /**
     * TODO: description!
     *
     * @type {Array}
     * @private
     */
    this._clipPos = [0, 0];
}

InputControl.prototype = Object.create( Skinable.prototype );
InputControl.prototype.constructor = InputControl;
module.exports = InputControl;

/**
 * currently selected input control (used for tab index)
 *
 * @property currentInput
 * @type GOWN.InputControl
 * @static
 */
InputControl.currentInput = null;

InputControl.prototype.onKeyUp = function() {
    this.emit('change', this);
};

InputControl.prototype.onEnter = function() {
    this.emit('enter', this);
};

InputControl.prototype.onKeyDown = function() {
};

/**
 * determine where the click was made along the string
 *
 * @method clickPos
 * @param x
 * @returns {Number}
 */
InputControl.prototype.clickPos = function(x)
{

    var text = this.pixiText.text,
        totalWidth = this.pixiText.x,
        pos = text.length;

    if (x < this.textWidth(text) + totalWidth)
    {
        // loop through each character to identify the position
        for (var i=0; i<text.length; i++)
        {
            totalWidth += this.textWidth(text[i]);
            if (totalWidth >= x)
            {
                pos = i;
                break;
            }
        }
    }

    return this._clipPos[0] + pos;
};

InputControl.prototype.posToCoord = function(pos) {
    var text = this.pixiText.text,
        totalWidth = this.pixiText.x;

    if (pos < text.length) {
        return totalWidth + this.textWidth(text.substring(0, pos));
    } else {
        return totalWidth + this.textWidth(text);
    }
};

/**
 * get text width
 *
 * @method textWidth
 * @param text
 * @returns {*}
 */
InputControl.prototype.textWidth = function(text) {
    if(!this.text._isBitmapFont)
    {
        var ctx = this.pixiText.context;
        return ctx.measureText(text || '').width;
    }
    else
    {
        var prevCharCode = null;
        var width = 0;
        var data = this.pixiText._data;
        for(var i = 0; i < text.length; i++) {
            var charCode = text.charCodeAt(i);
            var charData = data.chars[charCode];
            if(!charData) {
                continue;
            }
            if(prevCharCode && charData.kerning[prevCharCode]) {
                width += charData.kerning[prevCharCode];
            }
            width += charData.xAdvance;
            prevCharCode = charCode;
        }
        return width * this.pixiText._scale;
    }
};

/**
 * focus on this input and set it as current
 *
 * @method focus
 */
InputControl.prototype.focus = function () {
    // is already current input
    if (GOWN.InputControl.currentInput === this) {
        return;
    }

    // drop focus
    if (GOWN.InputControl.currentInput) {
        GOWN.InputControl.currentInput.blur();
    }

    // set focus
    GOWN.InputControl.currentInput = this;
    this.hasFocus = true;

    // check custom focus event
    this.onfocus();

    this.emit('focusIn', this);
    /*
     //TODO
     // is read only
     if(this.readonly) {
        return;
     }
     */

    // focus hidden input
    InputWrapper.focus();
};

/**
 * determine if the input has the focus
 *
 * @property hasFocus
 * @type Boolean
 */
Object.defineProperty(InputControl.prototype, 'hasFocus', {
    get: function() {
        return this._hasFocus;
    },
    set: function(focus) {
        this._hasFocus = focus;
    }
});

InputControl.prototype.onMouseUpOutside = function() {
    if(this.hasFocus && !this._mouseDown)
    {
        this.blur();
    }
    this._mouseDown = false;
};

/**
 * callback to execute code on focus
 * @method onFocus
 */
InputControl.prototype.onfocus = function () {
};

/**
 * blur the text input (remove focus)
 *
 * @method blur
 */
InputControl.prototype.blur = function() {
    if (GOWN.InputControl.currentInput === this) {
        GOWN.InputControl.currentInput = null;
        this.hasFocus = false;

        // blur hidden input
        InputWrapper.blur();
        this.onblur();
    }
};

/**
 * callback that will be executed once the text input is blurred
 *
 * @method onblur
 */
InputControl.prototype.onblur = function() {
    this.emit('focusOut', this);
};

// blur current input
InputControl.blur = function() {
    if (GOWN.InputControl.currentInput &&
        !GOWN.InputControl.currentInput._mouseDown) {
        GOWN.InputControl.currentInput.blur();
        GOWN.InputControl.currentInput = null;
    }
};
window.addEventListener('blur', InputControl.blur, false);

},{"../core/Skinable":35,"../utils/InputWrapper":41}],21:[function(require,module,exports){
var Control = require('../core/Control');

/**
 * The LayoutGroup allows you to add PIXI.js children that will be positioned
 *
 * @class LayoutGroup
 * @extends GOWN.Layout
 * @memberof GOWN
 * @constructor
 */
function LayoutGroup(maxWidth, maxHeight) {
    this.percentWidth = this.percentWidth ;
    this.percentHeight = this.percentHeight;
    this.maxWidth = maxWidth || Infinity;
    this.maxHeight = maxHeight || Infinity;
    Control.call(this);
    this._needUpdate = true;
}

LayoutGroup.prototype = Object.create( Control.prototype );
LayoutGroup.prototype.constructor = LayoutGroup;
module.exports = LayoutGroup;

/**
 * update before draw call (position label)
 *
 * @method redraw
 */
LayoutGroup.prototype.redraw = function() {
    var dimensionChanged = false;
    if (this._width && this.maxWidth !== this._width) {
        this._width = Math.min(this._width, this.maxWidth);
        dimensionChanged = true;
    }
    if (this._height && this.maxHeight !== this._height) {
        this._height = Math.min(this._height, this.maxHeight);
        dimensionChanged = true;
    }
    if (this.layout &&
        (this._needUpdate || dimensionChanged || this.layout.needUpdate)) {
        this.layout.layoutContainer(this);
        this._needUpdate = false;
    }
};

/* istanbul ignore next */
LayoutGroup.prototype.addChild = function(child) {
    var re = Control.prototype.addChild.call(this, child);
    this._needUpdate = true;
    return re;
};

/* istanbul ignore next */
LayoutGroup.prototype.addChildAt = function(child, pos) {
    var re = Control.prototype.addChildAt.call(this, child, pos);
    this._needUpdate = true;
    return re;
};

/**
 * add some space between children
 *
 * @param space {Number}
 */
LayoutGroup.prototype.addSpacer = function(space) {
    var spacer = new Control();
    spacer.width = spacer.height = space;
    this.addChild(spacer);
};

/**
 * Indicates if the given child is inside the viewport (only used for scrolling)
 *
 * @method childIsRenderAble
 * @type boolean
 * @param child one child with set coordinates and dimensions
 * @param x X-position on the scroll-container
 * @param y Y-position on the scroll-container
 * @param width width of the viewport
 * @param height height of the viewport
 */
LayoutGroup.prototype.childIsRenderAble = function(child, x, y, width, height) {
    return child.x < width + x &&
        child.y < height + y &&
        child.x > x - child.width &&
        child.y > y - child.height;
};


/**
 * Update renderable (culling of non visible objects)
 *
 * @method updateRenderable
 * @param x X-position on the scroll-container
 * @param y Y-position on the scroll-container
 * @param width width of the viewport
 * @param height height of the viewport
 */
LayoutGroup.prototype.updateRenderable = function(x, y, width, height) {
    for(var i=0, j=this.children.length; i<j; i++) {
        var child = this.children[i];
        child.renderable = this.childIsRenderAble(child, x, y, width, height);
    }
};


/**
 * The width of the group, will get the position and the width of the right child.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(LayoutGroup.prototype, 'width', {
    set: function(width) {
        this._width = width;
    },
    get: function() {
        if (this._width > 0) {
            return this._width;
        }
        var width = 0;
        if (this.children) {
            for (var i = 0; i < this.children.length; i++) {
                var child = this.getChildAt(i);
                width = Math.max(width, child.x+child.width);
            }
        }
        return width;
    }
});

/**
 * The height of the group, will get the position and the height of the bottom child.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(LayoutGroup.prototype, 'height', {
    set: function(height) {
        this._height = height;
    },
    get: function() {
        if (this._height > 0) {
            return this._height;
        }
        var height = 0;
        if (this.children) {
            for (var i = 0; i < this.children.length; i++) {
                var child = this.getChildAt(i);
                height = Math.max(height, child.y+child.height);
            }
        }
        return height;
    }
});

},{"../core/Control":34}],22:[function(require,module,exports){
var Scroller = require('./Scroller');
var ListCollection = require('../data/ListCollection');
var LayoutGroup = require('./LayoutGroup');
var DefaultListItemRenderer = require('./renderers/DefaultListItemRenderer');

/**
 * The basic list
 *
 * @class List
 * @extends GOWN.List
 * @memberof GOWN
 * @constructor
 */
function List(dataProvider, theme) {
    Scroller.call(this, theme);
    this.skinName = this.skinName || List.SKIN_NAME;

    // Determines if items in the list may be selected.
    this._selectable = true;

    // The index of the currently selected item.
    this._selectedIndex = -1;

    // If true multiple items may be selected at a time.
    this._allowMultipleSelection = false;

    // The indices of the currently selected items.
    this._selectedIndices = [];

    this._itemRenderer = [];
    this._itemChangeHandler = this.itemChangeHandler.bind(this);
    this._itemRendererChangeHandler = this.itemRendererChangeHandler.bind(this);

    // create new instance of the item renderer
    this._itemRendererFactory = this._itemRendererFactory || this._defaultItemRendererFactory;

    // The collection of data displayed by the list.
    this.dataProvider = dataProvider;

    /**
     * properties that will be passed down to every item
     * renderer when the list validates.
     */
    this._itemRendererProperties = {};

    // TODO: itemRendererStyleName (?)

    // initialize
    if (!this.viewPort) {

        // We do not implement ListDataViewPort from feathers
        // (most of what that it does is implemented in List directly to
        //  manage the viewport)
        // and instead use the normal LayoutGroup (less abstraction, less code)
        this.viewPort = new LayoutGroup();
    }

    var layout = this._layout;

    if (!layout) {
        layout = new PIXI.layout.VerticalLayout();
        layout.padding = 0;
        layout.gap = 0;
        layout.horizontalAlign = PIXI.layout.VerticalLayout.HORIZONTAL_ALIGN_JUSTIFY;
        layout.verticalAlign = PIXI.layout.VerticalLayout.VERTICAL_ALIGN_TOP;
    }
    // use setter to set layout of the viewport
    this.layout = layout;
}

List.prototype = Object.create( Scroller.prototype );
List.prototype.constructor = List;
module.exports = List;

// name of skin that will be applied
List.SKIN_NAME = 'list';

/**
 * Dispatched when the selected item changes.
 */
List.CHANGE = 'change';


/**
 * A function called that is expected to return a new item renderer
 */
List.prototype._defaultItemRendererFactory = function(theme) {
    return new DefaultListItemRenderer(theme);
};

List.prototype.itemChangeHandler = function() {
    // this code is executed when new data is added or removed
    // to the dataProvider
    // TODO: test code so it will handle if item is removed
    // deselect removed items
    var index = this._dataProvider.data.length;
    if (this._selectedIndex >= index) {
        this._selectedIndex = -1;
    }
    var indexCount = this._selectedIndices.length;
    for (var i = 0; i < indexCount; i++) {
        var currentIndex = this._selectedIndices[i];
        if (currentIndex >= index) {
            this._selectedIndices.splice(i, 1);
        }
    }
    // force redraw
    this.dataInvalid = true;
};

/**
 * select one of the item
 */
List.prototype.selectItem = function(item) {
    this.selectedIndex = this._dataProvider.data.indexOf(item);
};


// performance increase to avoid using call.. (10x faster)
List.prototype.scrollerRedraw = Scroller.prototype.redraw;
/**
 * update before draw call
 *
 * @method redraw
 */
List.prototype.redraw = function() {
    var basicsInvalid = this.dataInvalid;
    if (basicsInvalid) {
        this.refreshRenderers();
    }
    this.scrollerRedraw();
};

List.prototype.refreshRenderers = function () {
    //TODO: update only new renderer
    //      see ListDataViewPort --> refreshInactieRenderers
    this._itemRenderer.length = 0;
    if (this._dataProvider && this.viewPort) {
        this.viewPort.removeChildren();
        for (var i = 0; i < this._dataProvider.length; i++) {
            var item = this._dataProvider.getItemAt(i);
            var itemRenderer = this._itemRendererFactory(this.theme);

            if (this._itemRendererProperties) {
                itemRenderer.labelField = this._itemRendererProperties.labelField;
            }

            itemRenderer.on('change', this._itemRendererChangeHandler);
            itemRenderer.data = item;
            this._itemRenderer.push(itemRenderer);
            this.viewPort.addChild(itemRenderer);
        }
    }

    this.dataInvalid = false;
};

/**
 * item catch/forward renderer change event
 * this is thrown when the state of the itemRenderer Changes
 * (e.g. from unselected to selected), not when the data changes
 */
List.prototype.itemRendererChangeHandler = function(itemRenderer, value) {
    // TODO: update selected item
    var i;
    this._selectedIndices.length = 0;

    if (!this.allowMultipleSelection) {
        for (i = 0; i < this._itemRenderer.length; i++) {
            if (this._itemRenderer[i] !== itemRenderer && value === true) {
                this._itemRenderer[i].selected = false;
            }
        }
        if (value === true) {
            this._selectedIndices = [this._itemRenderer.indexOf(itemRenderer)];
        }
    } else {
        for (i = 0; i < this._itemRenderer.length; i++) {
            if (this._itemRenderer[i].selected === true) {
                this._selectedIndices.push(i);
            }
        }
    }

    this.emit('change', itemRenderer, value);
};

/**
 * set layout and pass eventlistener to it
 *
 * @property layout
 * @type LayoutAlignment
 */
Object.defineProperty(List.prototype, 'layout', {
    set: function(layout) {
        if (this._layout === layout) {
            return;
        }
        if (this.viewPort) {
            // this is different from feathers - there the viewport does not
            // know the layout (feathers uses ListDataViewPort, not LayoutGroup
            // as viewPort for List)
            this.viewPort.layout = layout;
        }
        // TODO: this.invalidate(INVALIDATION_FLAG_LAYOUT);
    },
    get: function() {
        return this._layout;
    }
});

/**
 * set item renderer properties (e.g. labelField) and update all itemRenderer
 *
 * @property itemRendererProperties
 * @type LayoutAlignment
 */
Object.defineProperty(List.prototype, 'itemRendererProperties', {
    set: function(itemRendererProperties) {
        this._itemRendererProperties = itemRendererProperties;
        this.dataInvalid = true;
    },
    get: function() {
        return this._itemRendererProperties;
    }
});


/**
 * set item renderer factory (for custom item Renderer)
 *
 * @property itemRendererFactory
 * @type LayoutAlignment
 */
Object.defineProperty(List.prototype, 'itemRendererFactory', {
    set: function(itemRendererFactory) {
        this._itemRendererFactory = itemRendererFactory;
        this.dataInvalid = true;
    },
    get: function() {
        return this._itemRendererFactory;
    }
});

/**
 * allow/disallow multiple selection
 * if selection has been disallowed, deselect all but one.
 *
 * @property allowMultipleSelection
 * @type Boolean
 */
 Object.defineProperty(List.prototype, 'allowMultipleSelection', {
     set: function(allowMultipleSelection) {
         if (this._allowMultipleSelection === allowMultipleSelection) {
             return;
         }
         this._allowMultipleSelection = allowMultipleSelection;

         if (!this._allowMultipleSelection && this._selectedIndices) {
             // only last index is selected
             this._selectedIndices = [this._selectedIndices.pop()];
         }
         //TODO: this.refreshSelection();
     },
     get: function() {
         return this._allowMultipleSelection;
     }
 });


Object.defineProperty(List.prototype, 'selectedIndex', {
    set: function(selectedIndex) {
        this._selectedIndex = selectedIndex;
        // force redraw
        this.dataInvalid = true;
    },
    get: function() {
        return this._selectedIndex;
    }
});

/**
 * dataProvider for list
 * the dataProvider is a sturcture thats provides the data.
 * in its simplest form it is a array containing the data
 *
 * @property dataProvider
 * @type Array
 */
Object.defineProperty(List.prototype, 'dataProvider', {
    set: function(dataProvider) {
        if (this._dataProvider === dataProvider) {
            return;
        }
        if (!(dataProvider instanceof ListCollection || dataProvider === null)) {
            throw new Error('the dataProvider has to be a GOWN.ListCollection');
        }

        if (this._dataProvider) {
            this._dataProvider.off(ListCollection.CHANGED, this._itemChangeHandler);
        }
        this._dataProvider = dataProvider;

        //reset the scroll position because this is a drastic change and
        //the data is probably completely different
        this.horizontalScrollPosition = 0;
        this.verticalScrollPosition = 0;

        if (this._dataProvider) {
            this._dataProvider.on(ListCollection.CHANGED, this._itemChangeHandler);
        }

        this.selectedIndex = -1;
        this.dataInvalid = true;
    },
    get: function() {
        return this._dataProvider;
    }
});

},{"../data/ListCollection":37,"./LayoutGroup":21,"./Scroller":29,"./renderers/DefaultListItemRenderer":33}],23:[function(require,module,exports){
var ToggleButton = require('./ToggleButton');

/**
 * PickerList allows the user to select an option from a list
 *
 * @class PickerList
 * @extends PIXI_UI.Control
 * @memberof PIXI_UI
 * @constructor
 */
function PickerList(theme) {
    this.skinName = this.skinName || PickerList.SKIN_NAME;
    ToggleButton.call(this, theme);
    this._dataProvider = [];

    this.invalidIcon = true;
}

PickerList.prototype = Object.create( ToggleButton.prototype );
PickerList.prototype.constructor = PickerList;
module.exports = PickerList;

// name of skin that will be applied
PickerList.SKIN_NAME = 'pickerlist';

/**
 * show icon for selection
 *
 * @method showIcon
 * @param skin
 */
PickerList.prototype.showIcon = function(skin) {
    if (this.iconSkin !== skin) {
        if(this.iconSkin) {
            this.removeChild(this.iconSkin);
        }

        this.addChild(skin);
        this.iconSkin = skin;
    }
    skin.x = this.width - skin.getBounds().width - 10;
    skin.y = Math.floor((this.height - skin.getBounds().height )/ 2);
    this.invalidIcon = false;
};

/**
 * redraw the skin
 *
 * @method redraw
 */
PickerList.prototype.redraw = function() {
    this.redrawSkinable();
    if (this.invalidIcon) {
        this.fromSkin('picker_list_'+this._currentState, this.showIcon);
    }
};

// TODO: setter/gettter for List to get selectedItem or set dataProvider
// TODO: prompt
// TODO: PopupManager (?)
// TODO: createButton/ListItem
// TODO: createList

},{"./ToggleButton":32}],24:[function(require,module,exports){
var Scrollable = require('./Scrollable');

// TODO: decreement/increment Button
// TODO: thumbFactory?
// TODO: this.showButtons

/**
 * scoll bar with thumb
 * hosting some Viewport (e.g. a ScrollContainer or a Texture)
 *
 * @class ScrollBar
 * @extends GOWN.Scrollable
 * @memberof GOWN
 * @constructor
 */
function ScrollBar(direction, theme) {
    this.skinName = this.skinName || ScrollBar.SKIN_NAME;

    this.direction = direction;
    if (this.direction === undefined) {
        this.direction = Scrollable.HORIZONTAL;
    }
    Scrollable.call(this, theme);
}

ScrollBar.prototype = Object.create( Scrollable.prototype );
ScrollBar.prototype.constructor = ScrollBar;
module.exports = ScrollBar;

ScrollBar.prototype.minThumbWidth = 20;
ScrollBar.prototype.minThumbHeight = 20;

ScrollBar.SKIN_NAME = 'scroll_bar';

ScrollBar.prototype.scrollableredraw = Scrollable.prototype.redraw;
/**
 * recalculate scroll thumb width/height
 * @method redraw
 */
ScrollBar.prototype.redraw = function() {
    if (this.invalidTrack) {
        if (this.scrollArea && this.thumb) {
            if (this.direction === Scrollable.HORIZONTAL) {
                this.thumb.width = Math.max(this.minThumbWidth,
                    this.scrollArea.width /
                    (this.scrollArea.content.width / this.scrollArea.width));
            } else {
                this.thumb.height = Math.max(this.minThumbHeight,
                    this.scrollArea.height /
                    (this.scrollArea.content.height / this.scrollArea.height));
            }
        }
        this.scrollableredraw(this);
    }
};

/**
 * thumb has been moved - scroll content to position
 * @param x x-position to scroll to (ignored when vertical)
 * @param y y-position to scroll to (ignored when horizontal)
 * @method thumbMoved
 */
ScrollBar.prototype.thumbMoved = function(x, y) {
    if (this.scrollArea && this.scrollArea.content) {

        if (this._direction === Scrollable.HORIZONTAL) {
            this.scrollArea._scrollContent(
                -(this.scrollArea.content.width - this.scrollArea.width) *
                    (x / (this.scrollArea.width - this.thumb.width)),
                0);
        } else {
            this.scrollArea._scrollContent(
                0,
                -(this.scrollArea.content.height - this.scrollArea.height) *
                    (y / (this.scrollArea.height - this.thumb.height)));
        }
    }
};

/**
 * Determines if the scroll bar's thumb can be dragged horizontally or
 * vertically.
 *
 * @property direction
 * @type String
 */
Object.defineProperty(ScrollBar.prototype, 'direction', {
    get: function() {
        return this._direction;
    },
    set: function(direction) {
        this._direction = direction;
        this.invalid = true;
    }
});

/**
 * value of the scrollbar
 * TODO: put in Scrollable
 *
 * @property value
 * @type Number
 */
Object.defineProperty(ScrollBar.prototype, 'value', {
    get: function() {
        return this._value;
    },
    set: function(value) {
        this._value = value;
    }
});

},{"./Scrollable":28}],25:[function(require,module,exports){
var Scroller = require('./Scroller');
//var ScrollBar = require('./ScrollBar');

/**
 * @class ScrollContainer
 * @extends GOWN.Scroller
 * @memberof GOWN
 * @constructor
 */
function ScrollContainer(theme) {
    Scroller.call(this, theme);
}

ScrollContainer.prototype = Object.create( Scroller.prototype );
ScrollContainer.prototype.constructor = ScrollContainer;
module.exports = ScrollContainer;

},{"./Scroller":29}],26:[function(require,module,exports){

},{}],27:[function(require,module,exports){
var Button = require('./Button');

/**
 * thumb button that can be moved on the scrollbar
 *
 * @class ScrollThumb
 * @extends GOWN.Button
 * @memberof GOWN
 * @constructor
 */
function ScrollThumb(scrollable, theme, skinName) {
    this.scrollable = scrollable;
    var defaultSkin = ScrollThumb.SKIN_NAME;
    if (!theme.thumbSkin) {
        defaultSkin = Button.SKIN_NAME;
    }
    this.skinName = skinName || defaultSkin;
    if (theme.thumbSkin) {
        this._validStates = ScrollThumb.THUMB_STATES;
    }
    if (theme.thumbWidth) {
        this.width = theme.thumbWidth;
    }
    if (theme.thumbHeight) {
        this.height = theme.thumbHeight;
    }
    Button.call(this, theme, this.skinName);
    this.invalidTrack = true;

    this.touchmove = this.mousemove;
    /* jshint unused: false */
    this.touchdown = this.mousedown;
    /* jshint unused: false */
    this.touchend = this.touchendoutside = this.mouseup;
}

ScrollThumb.prototype = Object.create( Button.prototype );
ScrollThumb.prototype.constructor = ScrollThumb;
module.exports = ScrollThumb;


ScrollThumb.SKIN_NAME = 'scroll_thumb';

ScrollThumb.THUMB_STATES = [
    'horizontal_up', 'vertical_up',
    'horizontal_down', 'vertical_down',
    'horizontal_hover', 'vertical_hover'
];

var originalCurrentState = Object.getOwnPropertyDescriptor(Button.prototype, 'currentState');

/**
 * The current state (one of _validStates)
 *
 * @property currentState
 * @type String
 */
Object.defineProperty(ScrollThumb.prototype, 'currentState',{
    set: function(value) {
        if (this.theme.thumbSkin) {
            // use skin including direction instead of default skin
            value = this.scrollable.direction + '_' + value;
        }
        originalCurrentState.set.call(this, value);
    }
});

ScrollThumb.prototype.buttonmousedown = Button.prototype.mousedown;
ScrollThumb.prototype.mousedown = function(mouseData) {
    this.buttonmousedown(mouseData);
    var local = mouseData.data.getLocalPosition(this.scrollable);
    this.scrollable._start = [local.x, local.y];
    //this.scrollable.handleDown(mouseData);
    mouseData.stopPropagation();
};

ScrollThumb.prototype.buttonmousemove = Button.prototype.mousemove;
ScrollThumb.prototype.mousemove = function (mouseData) {
    this.buttonmousemove(mouseData);
    this.scrollable.handleMove(mouseData);
};

ScrollThumb.prototype.buttonmouseup = Button.prototype.mouseup;
ScrollThumb.prototype.mouseup = function (mouseData) {
    this.buttonmouseup(mouseData);
    this.scrollable.handleUp();
};

/**
 * show track icon on thumb
 *
 * @method showTrack
 * @param skin
 */
ScrollThumb.prototype.showTrack = function(skin) {
    if (this.skin !== skin) {
        if(this.skin) {
            this.removeChild(this.skin);
        }

        this.addChild(skin);
        this.skin = skin;
    }
    skin.x = Math.floor((this.width - skin.getBounds().width )/ 2);
    skin.y = Math.floor((this.height - skin.getBounds().height )/ 2);
    this.invalidTrack = false;
};

/**
 * redraw the skin
 *
 * @method redraw
 */
ScrollThumb.prototype.redraw = function() {
    this.redrawSkinable();
    if (this.invalidTrack && this.theme.thumbSkin) {
        this.fromSkin(this.scrollable.direction+'_thumb', this.showTrack);
    }
};


/**
 * move the thumb on the scroll bar within its bounds
 *
 * @param x new calculated x position of the thumb
 * @param y new calculated y position of the thumb
 * @returns {boolean} returns true if the position of the thumb has been
 * moved
 * @method move
 */
ScrollThumb.prototype.move = function(x, y) {
    if (this.scrollable.direction === GOWN.Scrollable.HORIZONTAL) {
        if (isNaN(x)) {
            return false;
        }
        x = Math.min(x, this.scrollable.maxWidth());
        x = Math.max(x, 0);
        if (x !== this.x) {
            this.x = x;
            return true;
        }
    } else {
        if (isNaN(y)) {
            return false;
        }
        y = Math.min(y, this.scrollable.maxHeight());
        y = Math.max(y, 0);
        if (y !== this.y) {
            this.y = y;
            return true;
        }
    }
    return false;
};

},{"./Button":18}],28:[function(require,module,exports){
var Skinable = require('../core/Skinable'),
    ScrollThumb = require('./ScrollThumb'),
    SliderData = require('../utils/SliderData');

/**
 * a scrollabe control provides a thumb that can be be moved along a fixed track.
 * This is the common ground for ScrollBar and Slider
 *
 * @class Scrollable
 * @extends GOWN.Scrollable
 * @memberof GOWN
 * @constructor
 */
function Scrollable(theme) {
    this.mode = this.mode || Scrollable.DESKTOP_MODE;

    Skinable.call(this, theme);

    this.direction = this.direction || Scrollable.HORIZONTAL;

    this.invalidTrack = true;
    this._inverse = false;
    this._start = null;
    this._minimum = this._minimum || 0;
    this._maximum = this._maximum || 100;
    this.step = this.step || 1; //TODO: implement me!
    this.page = this.page || 10; //TODO: implement me!
    this._value = this.minimum;

    // # of pixel you scroll at a time (if the event delta is 1 / -1)
    this.scrolldelta = 10;

    this.touchstart = this.mousedown = this.handleDown;
    this.touchendoutside = this.touchend = this.mouseup = this.mouseupoutside = this.handleUp;

    this.thumbFactoryInvalid = true;
}

Scrollable.prototype = Object.create( Skinable.prototype );
Scrollable.prototype.constructor = Scrollable;
module.exports = Scrollable;


/**
 * in desktop mode mouse wheel support is added (default)
 *
 * @property DESKTOP_MODE
 * @static
 */
Scrollable.DESKTOP_MODE = 'desktop';

/**
 * in mobile mode mouse wheel support is disabled
 *
 * @property MOBILE_MODE
 * @static
 */
Scrollable.MOBILE_MODE = 'mobile';

/**
 * show horizontal scrollbar/slider
 *
 * @property HORIZONTAL
 * @static
 */
Scrollable.HORIZONTAL = 'horizontal';

/**
 * show vertical scrollbar/slider
 *
 * @property VERTICAL
 * @static
 */
Scrollable.VERTICAL = 'vertical';

Scrollable.prototype.createThumb = function() {
    this._thumbFactory = this._thumbFactory || this.defaultThumbFactory;
    this.thumb = this._thumbFactory();
    this.addChild(this.thumb);
};

Scrollable.prototype.defaultThumbFactory = function() {
    return new ScrollThumb(this, this.theme);
};

/**
 * handle mouse down/touch start
 * move scroll thumb clicking somewhere on the scroll bar (outside the thumb)
 *
 * @method handleDown
 * @param mouseData mousedata provided by pixi
 */
Scrollable.prototype.handleDown = function(mouseData) {
    var local = mouseData.data.getLocalPosition(this);
    var center = {
        x: local.x - this.thumb.width / 2,
        y: local.y - this.thumb.height / 2
    };
    if (mouseData.target === this &&
        this.moveThumb(center.x, center.y)) {
        this._start = [local.x, local.y];
        this.thumbMoved(center.x, center.y);
    }
};

/**
 * @private
 */
Scrollable.prototype.decrement = function() {
  this.value -= this._step;
};

/**
 * @private
 */
Scrollable.prototype.increment = function() {
  this.value += this._step;
};

/**
 * handle mouse up/touch end
 *
 * @method handleUp
 */
Scrollable.prototype.handleUp = function() {
    this._start = null;
};

/**
 * handle mouse move: move thumb
 *
 * @method handleMove
 * @param mouseData mousedata provided by pixi
 */
Scrollable.prototype.handleMove = function(mouseData) {
    if (this._start) {
        var local = mouseData.data.getLocalPosition(this);
        var x = this.thumb.x + local.x - this._start[0];
        var y = this.thumb.y + local.y - this._start[1];
        if (this.moveThumb(x, y)) {
            // do not override localX/localY in start
            // if we do not move the thumb
            this.thumbMoved(x, y);
            this._start[0] = local.x;
            this._start[1] = local.y;
        }
    }
};

/**
 * handle mouse wheel: move thumb on track
 *
 * @method handleWheel
 * @param event mousewheel event from browser
 */
Scrollable.prototype.handleWheel = function (event) {
    var x = this.thumb.x - event.delta * this.scrolldelta;
    var y = this.thumb.y - event.delta * this.scrolldelta;
    if (this.moveThumb(x, y)) {
        this.thumbMoved(x, y);
    }
};

/**
 * thumb has new x/y position
 *
 * @method thumbMoved
 * @param x x-position that has been scrolled to (ignored when vertical)
 * @param y y-position that has been scrolled to (ignored when horizontal)
 */
/* jshint unused: false */
Scrollable.prototype.thumbMoved = function(x, y) {
};

/**
 * show the progress skin from the start/end of the scroll track to the current
 * position of the thumb.
 *
 * @method _updateProgressSkin
 * @private
 */
Scrollable.prototype._updateProgressSkin = function() {
    if (!this.progressSkin) {
        return;
    }
    if(this.direction === Scrollable.HORIZONTAL) {
        var progressPosX = this.thumb.x + this.thumb.width / 2;
        if (this.inverse) {
            this.progressSkin.x = progressPosX;
            this.progressSkin.width = this.width - progressPosX;
            this.progressSkin.height = this.skin.height;
        } else {
            this.progressSkin.x = 0;
            this.progressSkin.width = progressPosX;
            this.progressSkin.height = this.skin.height;
        }
        // 2 px is the default in the Aeon-Theme.
        // TODO: make this theme configurable?!
        this.progressSkin.y = 2;
        this.progressSkin.height -= this.progressSkin.y*2;
    } else {
        var progressPosY = this.thumb.y + this.thumb.height / 2;
        if (this.inverse) {
            this.progressSkin.y = progressPosY;
            this.progressSkin.height = this.height - progressPosY;
            this.progressSkin.width = this.skin.width;
        } else {
            this.progressSkin.y = 0;
            this.progressSkin.height =progressPosY;
            this.progressSkin.width = this.skin.width;
        }
    }
};

/**
 * returns the max. width in pixel
 * (normally this.width - thumb width)
 *
 * @method maxWidth
 * @returns {Number}
 */
Scrollable.prototype.maxWidth = function() {
    return this.width - this.thumb.width;
};

/**
 * returns the max. height in pixel
 * (normally this.height - thumb height)
 *
 * @method maxHeight
 * @returns {Number}
 */
Scrollable.prototype.maxHeight = function() {
    return this.height - this.thumb.height;
};

/**
 * move the thumb on the scroll bar within its bounds
 *
 * @param x new calculated x position of the thumb
 * @param y new calculated y position of the thumb
 * @returns {boolean} returns true if the position of the thumb has been
 * moved
 * @method moveThumb
 */
Scrollable.prototype.moveThumb = function(x, y) {
    if (this.thumb.move(x, y)) {
        this._updateProgressSkin();
        return true;
    }
    return false;
};

/**
 * show scroll track
 *
 * @method showTrack
 * @param skin
 */
Scrollable.prototype.showTrack = function(skin) {
    if (this.skin !== skin) {
        if(this.skin) {
            this.removeChild(this.skin);
        }

        this.addChildAt(skin, 0);
        this.skin = skin;
        if (this.progressSkin) {
            this._updateProgressSkin();
        }
    }
};

/**
 * show progress on track (from the start/end of the track to the
 * current position of the thumb)
 *
 * @method showProgress
 * @param skin
 */
Scrollable.prototype.showProgress = function(skin) {
    if (this.progressSkin !== skin) {
        if(this.progressSkin) {
            this.removeChild(this.progressSkin);
        }
        skin.width = skin.height = 0;
        this.addChildAt(skin, 0);
        this.progressSkin = skin;
        if (this.skin) {
            this._updateProgressSkin();
        }
    }
};

/**
 * redraw track and progressbar
 *
 * @method redraw
 */
Scrollable.prototype.redraw = function() {
    if (this.thumbFactoryInvalid) {
        this.createThumb();
        this.thumbFactoryInvalid = false;
    }
    if (this.invalidTrack) {
        this.fromSkin(this.direction+'_progress', this.showProgress);
        this.fromSkin(this.direction+'_track', this.showTrack);
        if (this.skin) {
            if (this.direction === Scrollable.HORIZONTAL) {
                this.skin.width = this.width;
            } else {
                this.skin.height = this.height;
            }
            this.invalidTrack = false;
        }
    }
};


/**
 * The width of the Scrollable, setting this will redraw the track and thumb.

 *
 * @property width
 * @type Number
 */
Object.defineProperty(Scrollable.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(width) {
        this._width = width;
        this.invalidTrack = true;
        if (this.thumb) {
            this.thumb.invalidTrack = true;
        }
    }
});

/**
 * Inverse the progress bar
 *
 * @property inverse
 * @type Boolean
 */
Object.defineProperty(Scrollable.prototype, 'inverse', {
    get: function() {
        return this._inverse;
    },
    set: function(inverse) {
        if (inverse !== this._inverse) {
            this._inverse = inverse;

            if (this.direction === Scrollable.HORIZONTAL) {
                this.moveThumb(0, this.width - this.thumb.x);
            } else {
                this.moveThumb(0, this.height - this.thumb.y);
            }

            this.invalidTrack = true;
            if (this.thumb) {
                this.thumb.invalidTrack = true;
            }
        }
    }
});

/**
 * The height of the Scrollable, setting this will redraw the track and thumb.
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Scrollable.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(height) {
        this._height = height;
        this.invalidTrack = true;
        if (this.thumb) {
            this.thumb.invalidTrack = true;
        }
    }
});

/**
 * set value (between minimum and maximum)
 *
 * @property value
 * @type Number
 * @default 0
 */
Object.defineProperty(Scrollable.prototype, 'value', {
    get: function() {
        return this._value;
    },
    set: function(value) {
        if (isNaN(value)) {
            return;
        }
        value = Math.min(value, this.maximum);
        value = Math.max(value, this.minimum);
        if (this._value === value) {
            return;
        }

        this.emit('change', value, this);
        // move thumb
        if (this.thumb) {
            var pos = this.valueToLocation(value);
            if (this.direction === Scrollable.HORIZONTAL) {
                this.moveThumb(pos, 0);
            } else {
                this.moveThumb(0, pos);
            }
        }

        this._value = value;
        if (this.change) {
            var sliderData = new SliderData();
            sliderData.value = this._value;
            sliderData.target = this;
            this.change(sliderData);
        }
    }
});

/**
 * set minimum and update value if necessary
 *
 * @property minimum
 * @type Number
 * @default 0
 */
Object.defineProperty(Scrollable.prototype, 'minimum', {
    get: function() {
        return this._minimum;
    },
    set: function(minimum) {
        if(!isNaN(minimum) && this.minimum !== minimum && minimum < this.maximum) {
            this._minimum = minimum;
        }
        if (this._value < this.minimum) {
            this.value = this._value;
        }
    }
});

/**
 * set maximum and update value if necessary
 *
 * @property maximum
 * @type Number
 * @default 100
 */
Object.defineProperty(Scrollable.prototype, 'maximum', {
    get: function() {
        return this._maximum;
    },
    set: function(maximum) {
        if(!isNaN(maximum) && this.maximum !== maximum && maximum > this.minimum) {
            this._maximum = maximum;
        }
        if (this._value > this.maximum) {
            this.value = maximum;
        }
    }
});

},{"../core/Skinable":35,"../utils/SliderData":43,"./ScrollThumb":27}],29:[function(require,module,exports){
var ScrollBar = require('./ScrollBar');
var Control = require('../core/Control');
var Scrollable = require('./Scrollable');

/**
 * Allows horizontal and vertical scrolling of a view port.
 * Not meant to be used as a standalone container or component.
 * Generally meant to be the super class of another component that needs to
 * support scrolling.
 * To put components in a generic scrollable container (with optional layout),
 * see ScrollContainer. To scroll long passages of text, see ScrollText.
 *
 * @class Scroller
 * @extends GOWN.Control
 * @memberof GOWN
 * @constructor
 */
function Scroller(theme) {
    Control.call(this);
    this.setTheme(theme);
    this.interactive = true;
    this.sizeValid = true;
    this._clipContent = true;
    this._horizontalScrollBarFactory = this.defaultScrollBarFactory;
    this._verticalScrollBarFactory = this.defaultScrollBarFactory;
    this.createScrollBars();
}

Scroller.prototype = Object.create( Control.prototype );
Scroller.prototype.constructor = Scroller;
module.exports = Scroller;

/**
 * The scroller may scroll if the view port is larger than the
 * scroller's bounds. Only than the scroll bar will be visible.
 */
Scroller.SCROLL_POLICY_AUTO = 'auto';

/**
 * The scroller will always scroll, the scroll bar will always be visible.
 */
Scroller.SCROLL_POLICY_ON = 'on';

/**
 * The scroller does not scroll at all, the scroll bar will never be visible.
 */
Scroller.SCROLL_POLICY_OFF = 'off';

/**
 * us a mask to clip content
 */
Object.defineProperty(Scroller.prototype, 'clipContent', {
    get: function() {
        return this._clipContent;
    },
    set: function(value) {
        if (this._clipContent === value) {
			return;
		}
		this._clipContent = value;
    }
});

Object.defineProperty(Scroller.prototype, 'viewPort', {
    get: function() {
        return this._viewPort;
    },
    set: function(value) {
        if (this._viewPort === value) {
			return;
		}
		if(this._viewPort) {
			//TODO: this._viewPort.off(FeathersEventType.RESIZE, viewPort_resizeHandler);
            this.removeChild(this._viewPort);
		}
		this._viewPort = value;
		if(this._viewPort) {
			//TODO: this._viewPort.addEventListener(FeathersEventType.RESIZE, viewPort_resizeHandler);
            this.addChildAt(this._viewPort, 0);
		}
		//this.invalidate(Control.INVALIDATION_FLAG_SIZE);
        this.sizeValid = false;
    }
});

// performance increase to avoid using call.. (10x faster)
Scroller.prototype.controlRedraw = Control.prototype.redraw;
/**
 * update before draw call
 *
 * @method redraw
 */
Scroller.prototype.redraw = function() {
    if(this.clippingInvalid) {
		this.refreshClipRect();
	}

    if (this._viewPort.updateRenderable) {
        this._viewPort.updateRenderable(
            -this._viewPort.x, -this._viewPort.y,
            this.width, this.height);
    }
    this.controlRedraw();
};

Scroller.prototype.refreshClipRect = function() {
    if (this.height && this.width && this._clipContent) {
        if (this.clipRect === undefined) {
            this.clipRect = new PIXI.Graphics();
        }
        //TODO: for scaling save scrollPosition!
        //TODO this.clipRect.x = this._horizontalScrollPosition;
        //TODO this.clipRect.y = this._verticalScrollPosition;

        // update clipRectDimensions in own draw-function
        this.drawClipRect();
    } else {
        if (this.clipRect) {
            this.clipRect.clear();
        }
        this.clipRect = undefined;
    }

    this.clippingInvalid = false;
};


/**
 * draw mask (can be overwritten, e.g. to show something above the
 * scroll area when using a vertical layout)
 * @private
 * @method drawMask
 */
Scroller.prototype.drawClipRect = function() {
    var pos = new PIXI.Point(0, 0);
    var global = this.toGlobal(pos);

    // TODO: viewportOffsets for width/height
    // (see Scroller.as refreshClipRect)
    //var clipWidth:Number = this.actualWidth - this._leftViewPortOffset - this._rightViewPortOffset;

    this.clipRect.clear()
        .beginFill('#fff', 1)
        .drawRect(global.x, global.y, this.width, this.height)
        .endFill();
    this.mask = this.clipRect;
    if (this.hitArea) {
        this.hitArea.width = this.width;
        this.hitArea.height = this.height;
    } else {
        this.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
    }
};


/**
 * Creates and adds the <code>horizontalScrollBar</code> and
 * <code>verticalScrollBar</code> sub-components and removes the old
 * instances, if they exist.
 *
 * <p>Meant for internal use, and subclasses may override this function
 * with a custom implementation.</p>
 *
 * @see #horizontalScrollBar
 * @see #verticalScrollBar
 * @see #horizontalScrollBarFactory
 * @see #verticalScrollBarFactory
 */
Scroller.prototype.createScrollBars = function() {
    this.horizontalScrollBar = this._horizontalScrollBarFactory(Scrollable.HORIZONTAL);
    this.verticalScrollBar = this._verticalScrollBarFactory(Scrollable.VERTICAL);
};

Scroller.prototype.defaultScrollBarFactory = function(direction) {
    return new ScrollBar(direction, this.theme);
};


Scroller.prototype.revealHorizontalScrollBar = function() {
    //TODO: implement me!
};

Scroller.prototype.revealVerticalScrollBar = function() {
    //TODO: implement me!
};

/**
 * The width of the Scroller (defines the viewport)
 *
 * @property width
 * @type Number
 */
Object.defineProperty(Scroller.prototype, 'width', {
    get: function() {
        if (!this._width) {
            return this._viewPort.width;
        }
        return this._width;
    },
    set: function(width) {
        this._width = width;
        this.clippingInvalid = true;
    }
});

/**
 * The height of the Scroller (defines the viewport)
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Scroller.prototype, 'height', {
    get: function() {
        if (!this._height) {
            return this._viewPort.height;
        }
        return this._height;
    },
    set: function(height) {
        this._height = height;
        this.clippingInvalid = true;
    }
});

// TODO: elastic scrollSteps pageIndex updateVerticalScrollFromTouchPosition throwTo hideHorizontalScrollBar revealHorizontalScrollBar

},{"../core/Control":34,"./ScrollBar":24,"./Scrollable":28}],30:[function(require,module,exports){
var Scrollable = require('./Scrollable'),
    SliderData = require('../utils/SliderData');

/**
 * Simple slider with min. and max. value
 *
 * @class Slider
 * @extends GOWN.Scrollable
 * @memberof GOWN
 * @constructor
 */

function Slider(thumb, theme, skinName) {
    this.skinName = skinName || Slider.SKIN_NAME;

    this._minimum = this._minimum || 0;
    this._maximum = this._maximum || 100;
    this.step = this.step || 0; //TODO: implement me!
    this.page = this.page || 10; //TODO: implement me!
    this._value = this.minimum;
    this.change = null;

    Scrollable.call(this, thumb, theme);
}

Slider.prototype = Object.create( Scrollable.prototype );
Slider.prototype.constructor = Slider;
module.exports = Slider;


Slider.SKIN_NAME = 'scroll_bar';

/**
 * thumb has been moved - calculate new value
 *
 * @param x x-position to scroll to (ignored when vertical)
 * @param y y-position to scroll to (ignored when horizontal)
 */
Slider.prototype.thumbMoved = function(x, y) {
    var pos = 0;
    if (this.orientation === Scrollable.HORIZONTAL) {
        pos = x;
    } else {
        pos = y;
    }
    this.value = this.pixelToValue(pos);
};

/**
 * calculate value of slider based on current pixel position of thumb
 *
 * @param position
 * @method pixelToValue
 * @returns Number value between minimum and maximum
 */
Slider.prototype.pixelToValue = function(position) {
    var max = 0;
    if (this.orientation === Scrollable.HORIZONTAL) {
        max = this.maxWidth();
    } else {
        max = this.maxHeight();
    }
    if (this._inverse) {
        position = max - position;
    }
    return position / max * (this.maximum - this.minimum) + this.minimum;
};

/**
 * calculate current pixel position of thumb based on given value
 *
 * @param value
 * @method valueToPixel
 * @returns Number position of the scroll thumb in pixel
 */
Slider.prototype.valueToPixel = function(value) {
    var max = 0;
    if (this.orientation === Scrollable.HORIZONTAL) {
        max = this.maxWidth();
    } else {
        max = this.maxHeight();
    }
    var position = (value - this.minimum) / (this.maximum - this.minimum) * max;
    if (this._inverse) {
        position = max - position;
    }
    return position;
};

/**
 * set value (between minimum and maximum)
 *
 * @property value
 * @type Number
 * @default 0
 */
Object.defineProperty(Slider.prototype, 'value', {
    get: function() {
        return this._value;
    },
    set: function(value) {
        if (isNaN(value)) {
            return;
        }
        value = Math.min(value, this.maximum);
        value = Math.max(value, this.minimum);
        if (this._value === value) {
            return;
        }

        // move thumb
        var pos = this.valueToPixel(value);
        if (this.orientation === Scrollable.HORIZONTAL) {
            this.moveThumb(pos, 0);
        } else {
            this.moveThumb(0, pos);
        }

        this._value = value;
        if (this.change) {
            var sliderData = new SliderData();
            sliderData.value = this._value;
            sliderData.target = this;
            this.change(sliderData);
        }
    }
});

/**
 * set minimum and update value if necessary
 *
 * @property minimum
 * @type Number
 * @default 0
 */
Object.defineProperty(Slider.prototype, 'minimum', {
    get: function() {
        return this._minimum;
    },
    set: function(minimum) {
        if(!isNaN(minimum) && this.minimum !== minimum && minimum < this.maximum) {
            this._minimum = minimum;
        }
        if (this._value < this.minimum) {
            this.value = this._value;
        }
    }
});

/**
 * set maximum and update value if necessary
 *
 * @property maximum
 * @type Number
 * @default 100
 */
Object.defineProperty(Slider.prototype, 'maximum', {
    get: function() {
        return this._maximum;
    },
    set: function(maximum) {
        if(!isNaN(maximum) && this.maximum !== maximum && maximum > this.minimum) {
            this._maximum = maximum;
        }
        if (this._value > this.maximum) {
            this.value = maximum;
        }
    }
});

},{"../utils/SliderData":43,"./Scrollable":28}],31:[function(require,module,exports){
var Control = require('../core/Control'),
    InputControl = require('./InputControl'),
    InputWrapper = require('../utils/InputWrapper');
/**
 * The basic Text Input - based on PIXI.Input Input by Sebastian Nette,
 * see https://github.com/SebastianNette/PIXI.Input
 *
 * @class TextInput
 * @extends GOWN.InputControl
 * @memberof GOWN
 * @param text editable text shown in input
 * @param displayAsPassword Display TextInput as Password (default false)
 * @param theme default theme
 * @constructor
 */

function TextInput(text, displayAsPassword, theme, skinName) {
    // show and load background image as skin (exploiting skin states)
    this.skinName = skinName || TextInput.SKIN_NAME;
    this._validStates = this._validStates || TextInput.stateNames;
    this._currentState = 'background';
    this.invalidState = true;

    InputControl.call(this, text, theme);

    this._displayAsPassword = displayAsPassword || false;

    /**
     * timer used to indicate if the cursor is shown
     *
     * @property _cursorTimer
     * @type {Number}
     * @private
     */
    this._cursorTimer = 0;

    /**
     * indicates if the cursor position has changed
     *
     * @property _cursorNeedsUpdate
     * @type {Boolean}
     * @private
     */

    this._cursorNeedsUpdate = true;

    /**
     * interval for the cursor (in milliseconds)
     *
     * @property blinkInterval
     * @type {number}
     */
    this.blinkInterval = 500;

    /**
     * selected area (start and end)
     *
     * @type {Array}
     * @private
     */
    this.selection = [0, 0];

    // caret/selection sprite
    this.cursor = new PIXI.Text('|', this.theme.textStyle);
    this.addChild(this.cursor);

    // selection background
    this.selectionBg = new PIXI.Graphics();
    this.addChildAt(this.selectionBg, 0);

    // set up events
    this.boundOnMouseUp = this.onMouseUp.bind(this);
    this.boundOnMouseUpOutside = this.onMouseUpOutside.bind(this);
    this.boundOnMouseDown = this.onMouseDown.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);

    this.mousemove = this.touchmove = this.boundOnMouseMove;
    this.mousedown = this.touchstart = this.boundOnMouseDown;
    this.mouseup = this.touchend = this.boundOnMouseUp;
    this.mouseupoutside = this.touchendoutside = this.boundOnMouseUpOutside;
}

TextInput.prototype = Object.create(InputControl.prototype);
TextInput.prototype.constructor = TextInput;
module.exports = TextInput;


// name of skin
TextInput.SKIN_NAME = 'text_input';

/**
 * set the text that is shown inside the input field.
 * calls onTextChange callback if text changes
 *
 * @property text
 * @type String
 */
Object.defineProperty(TextInput.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (text) {
        text += ''; // add '' to assure text is parsed as string
        if (this._origText === text) {
            // return if text has not changed
            return;
        }
        this._origText = text;
        if (this._displayAsPassword) {
            text = text.replace(/./gi, '*');
        }
        this._text = text || '';
        if (!this.pixiText) {
            this.pixiText = new PIXI.Text(text, this.theme.textStyle);
            this.addChild(this.pixiText);
        } else {
            this.pixiText.text = text;
        }

        // update text input if this text field has the focus
        if (this.hasFocus) {
            InputWrapper.setText(this.value);
        }

        // reposition cursor
        this._cursorNeedsUpdate = true;
    }
});

/**
 * The maximum number of characters that may be entered. If 0,
 * any number of characters may be entered.
 * (same as maxLength for DOM inputs)
 *
 * @default 0
 * @property maxChars
 * @type String
 */
Object.defineProperty(TextInput.prototype, 'maxChars', {
    get: function () {
        return this._maxChars;
    },
    set: function (value) {
        if (this._maxChars === value) {
            return;
        }
        InputWrapper.setMaxLength(value);
        this._maxChars = value;
    }
});

Object.defineProperty(TextInput.prototype, 'value', {
    get: function() {
        return this._origText;
    }
});

/**
 * set text and type of DOM text input
 *
 * @method onfocus
 */
TextInput.prototype.onfocus = function() {
    InputWrapper.setText(this.value);
    InputWrapper.setMaxLength(this.maxChars);
    if (this._displayAsPassword) {
        InputWrapper.setType('password');
    } else {
        InputWrapper.setType('text');
    }
};

/**
 * set selected text
 *
 * @method updateSelection
 * @param start
 * @param end
 * @returns {boolean}
 */
TextInput.prototype.updateSelection = function (start, end) {
    if (this.selection[0] !== start || this.selection[1] !== end) {
        this.selection[0] = start;
        this.selection[1] = end;
        InputWrapper.setSelection(start, end);
        this._cursorNeedsUpdate = true;
        this.updateSelectionBg();
        return true;
    } else {
        return false;
    }
};

TextInput.prototype.updateSelectionBg = function() {
    var start = this.posToCoord(this.selection[0]),
        end = this.posToCoord(this.selection[1]);

    this.selectionBg.clear();
    if (start !== end) {
        this.selectionBg.beginFill(0x0080ff);
        this.selectionBg.drawRect(0, 0, end - start, this.pixiText.height);
        this.selectionBg.x = start;
        this.selectionBg.y = this.pixiText.y;
    }
};


TextInput.prototype.inputControlOnBlur = InputControl.prototype.onblur;
TextInput.prototype.onblur = function() {
    this.inputControlOnBlur();
    this.updateSelection(0, 0);
};

TextInput.prototype.inputControlKeyDown = InputControl.prototype.onKeyDown;
TextInput.prototype.onKeyDown = function () {
    this.inputControlKeyDown();
    // update the canvas input state information from the hidden input
    this.updateTextState();
};

TextInput.prototype.inputControlKeyUp = InputControl.prototype.onKeyUp;
TextInput.prototype.onKeyUp = function () {
    this.updateTextState();
    this.inputControlKeyUp();
};

/**
 * position cursor on the text
 */
TextInput.prototype.setCursorPos = function () {
    this.cursor.x = this.textWidth(this.text.substring(0, this.cursorPos)) | 0;
};

/**
 * draw the cursor
 *
 * @method drawCursor
 */
TextInput.prototype.drawCursor = function () {
    if (this.hasFocus || this._mouseDown) {
        var time = Date.now();

        // blink interval for cursor
        if ((time - this._cursorTimer) >= this.blinkInterval) {
            this._cursorTimer = time;
            this.cursor.visible = !this.cursor.visible;
        }

        // update cursor position
        if (this.cursor.visible && this._cursorNeedsUpdate) {
            this.setCursorPos();
            this._cursorNeedsUpdate = false;
        }
    } else {
        this.cursor.visible = false;
    }
};

TextInput.prototype.redraw = function () {
    this.drawCursor();
    Control.prototype.redraw.call(this);
};

TextInput.prototype.onMouseMove = function (e) {
    var mouse = this.mousePos(e);
    if (!this.hasFocus || !this._mouseDown || this.selectionStart < 0) { // || !this.containsPoint(mouse)) {
        return false;
    }

    var curPos = this.clickPos(mouse.x, mouse.y),
        start = Math.min(this.selectionStart, curPos),
        end = Math.max(this.selectionStart, curPos);

    if (this.updateSelection(start, end)) {
        this.cursorPos = curPos;
        this.setCursorPos();
        this._cursorNeedsUpdate = true;
    }
    return true;
};

TextInput.prototype.onMouseDown = function (e) {
    var originalEvent = e.data.originalEvent;
    if (originalEvent.which === 2 || originalEvent.which === 3) {
        originalEvent.preventDefault();
        return false;
    }

    // focus input
    this.focus();

    this._mouseDown = true;
    var mouse = this.mousePos(e);

    // start the selection drag if inside the input
    this.selectionStart = this.clickPos(mouse.x, mouse.y);
    this.updateSelection(this.selectionStart, this.selectionStart);
    this.cursorPos = this.selectionStart;
    this.setCursorPos();
    return true;
};

TextInput.prototype.onMouseUp = function (e) {
    var originalEvent = e.data.originalEvent;
    if (originalEvent.which === 2 || originalEvent.which === 3) {
        originalEvent.preventDefault();
        return false;
    }

    var mouse = this.mousePos(e);

    // update selection if a drag has happened
    var clickPos = this.clickPos(mouse.x, mouse.y);

    // update the cursor position
    if (!(this.selectionStart >= 0 && clickPos !== this.selectionStart)) {
        this.cursorPos = clickPos;
        this.setCursorPos();
        this.updateSelection(this.cursorPos, this.cursorPos);
    }

    this.selectionStart = -1;
    this._mouseDown = false;
    return true;
};

/**
 * synchronize TextInput with DOM element
 *
 * @method updateTextState
 */
TextInput.prototype.updateTextState = function () {
    var text = InputWrapper.getText();

    if (text !== this.text) {
        this.text = text;
    }

    var sel = InputWrapper.getSelection();
    if (this.updateSelection(sel[0], sel[1])) {
        this.cursorPos = sel[0];
    }
    this.setCursorPos();
};

},{"../core/Control":34,"../utils/InputWrapper":41,"./InputControl":20}],32:[function(require,module,exports){
var Button = require('./Button');

/**
 * basic button that has a selected state which indicates if the button
 * is pressed or not.
 *
 * @class ToggleButton
 * @extends GOWN.Button
 * @memberof GOWN
 * @constructor
 */
function ToggleButton(theme, skinName) {
    skinName = skinName || ToggleButton.SKIN_NAME;
    this._validStates = ToggleButton.stateNames;
    Button.call(this, theme, skinName);

    /**
     * The pressed state of the Button
     *
     * @property selected
     * @type Boolean
     */
    this._selected = false;
}

ToggleButton.prototype = Object.create( Button.prototype );
ToggleButton.prototype.constructor = ToggleButton;
module.exports = ToggleButton;

/**
 * Dispatched when the button is selected or deselected either
 * programmatically or as a result of user interaction.The value of the
 * <code>selected</code> property indicates whether the button is selected.
 * or not.
 */
ToggleButton.CHANGE = 'change';

ToggleButton.SKIN_NAME = 'toggle_button';

ToggleButton.SELECTED_UP = 'selected_up';
ToggleButton.SELECTED_DOWN = 'selected_down';
ToggleButton.SELECTED_HOVER = 'selected_hover';

ToggleButton.stateNames = Button.stateNames.concat([
    ToggleButton.SELECTED_UP,
    ToggleButton.SELECTED_DOWN,
    ToggleButton.SELECTED_HOVER]);


var originalCurrentState = Object.getOwnPropertyDescriptor(Button.prototype, 'currentState');

/**
 * The current state (one of _validStates)
 *
 * @property currentState
 * @type String
 */
Object.defineProperty(ToggleButton.prototype, 'currentState',{
    set: function(value) {
        if (this._selected) {
            value = 'selected_' + value;
        }
        originalCurrentState.set.call(this, value);
    }
});

/**
 * Indicate if the button is selected (pressed)
 *
 * @property selected
 * @type Boolean
 */
Object.defineProperty(ToggleButton.prototype, 'selected', {
    set: function(selected) {
        var state = this._currentState;
        this.invalidState = this._selected !== selected || this.invalidState;
        if (state.indexOf('selected_') === 0) {
            state = state.substr(9, state.length);
        }
        if (this._selected !== selected) {
            this._selected = selected;
            this.emit(ToggleButton.CHANGE, this, selected);
        }
        this._pressed = false; //to prevent toggling on touch/mouse up
        this.currentState = state;
    },
    get: function() {
        return this._selected;
    }
});

/**
 * toggle state
 */
ToggleButton.prototype.toggle = function() {
    this.selected = !this._selected;
};


ToggleButton.prototype.buttonHandleEvent = Button.prototype.handleEvent;

/**
 * handle Touch/Tab Event
 * @method handleEvent
 * @param {Object} type the type of the press/touch.
 * @protected
 **/
ToggleButton.prototype.handleEvent = function(type) {
    if (!this._enabled) {
        return;
    }
    var pressedBefore = this._pressed;
    this.buttonHandleEvent(type);
    if (type === Button.UP && this._over && pressedBefore) {
        this.toggle();
    }
};

},{"./Button":18}],33:[function(require,module,exports){
var ToggleButton = require('../ToggleButton');
var Button = require('../Button');

function DefaultListItemRenderer(theme) {
    //this._skinName = DefaultListItemRenderer.SKIN_NAME;
    ToggleButton.call(this, theme);

    /**
     * A key in the item data that will be shown as label for the item.
     * e.g. 'text' for item.text.
     * will be ignored if labelFunction is set.
     *
     * the item will be shown directly (using toString) if
     * labelField and labelFunction are not set.
     *
     * @default 'text'
     */
    this.labelField = 'text';

    /**
	 * A function used to generate label text for a specific item. If this
	 * function is not null, then the <code>labelField</code> will be
	 * ignored.
	 *
	 * <p>The function is expected to have the following signature:</p>
	 * <pre>function( item )</pre> and return a string
	 *
	 * <p>In the following example, the label function is customized:</p>
	 * renderer.labelFunction = function( item ) {
	 *    return item.firstName + " " + item.lastName;
	 * };</listing>
	 *
	 * @default null
	 *
	 * @see #labelField
	 */
    this.labelFunction = null;

    this._data = null;
    this.dataInvalid = false;
}

DefaultListItemRenderer.prototype = Object.create( ToggleButton.prototype );
DefaultListItemRenderer.prototype.constructor = DefaultListItemRenderer;
module.exports = DefaultListItemRenderer;

//DefaultListItemRenderer.STYLE_NAME = "default_item_renderer";

// performance increase to avoid using call.. (10x faster)
DefaultListItemRenderer.prototype.redrawButton = Button.prototype.redraw;

/**
 * update before draw call update button text
 *
 * @method redraw
 */
DefaultListItemRenderer.prototype.redraw = function() {
    if (this.dataInvalid) {
        this.commitData();
    }
    this.redrawButton();
};

Object.defineProperty(DefaultListItemRenderer.prototype, 'data', {
    set: function(data) {
        this._data = data;
        this.dataInvalid = true;
    },
    get: function() {
        return this._data;
    }
});

/**
 * Updates the renderer to display the item's data. Override this
 * function to pass data to sub-components and react to data changes.
 *
 * <p>Don't forget to handle the case where the data is <code>null</code>.</p>
 *
 * @method commitData
 */
DefaultListItemRenderer.prototype.commitData = function() {
    if(this._data) {
        this.label = this.itemToLabel(this._data);
    }
    this.dataInvalid = false;
};

/**
 * Using <code>labelField</code> and <code>labelFunction</code>,
 * generates a label from the item.
 *
 * <p>All of the label fields and functions, ordered by priority:</p>
 * <ol>
 *     <li><code>labelFunction</code></li>
 *     <li><code>labelField</code></li>
 * </ol>
 *
 * @method itemToLabel
 */
DefaultListItemRenderer.prototype.itemToLabel = function(item) {
	if (this.labelFunction) {
		return this.labelFunction(item).toString();
	}
	else if (this.labelField && item && item.hasOwnProperty(this.labelField)) {
		return item[this.labelField].toString();
	}
	else if(item) {
		return item.toString();
	}
	return '';
};

},{"../Button":18,"../ToggleButton":32}],34:[function(require,module,exports){
/**
 * base for all UI controls (see controls/)
 * based on pixi-DisplayContainer that supports adding children, so all
 * controls are container
 * @class Control
 * @extends PIXI.Container
 * @memberof GOWN
 * @constructor
 */
function Control() {
    PIXI.Container.call(this);
    this.enabled = this.enabled !== false;
    // assume all controls are interactive
    this.interactive = true;
}

Control.prototype = Object.create( PIXI.Container.prototype );
Control.prototype.constructor = Control;
module.exports = Control;

/**
 * change the theme (every control can have a theme, even if it does not
 * inherit Skinable, e.g. if there is only some color in the skin that will
 * be taken or if it has some skinable components as children)
 *
 * @method setTheme
 * @param theme the new theme {Theme}
 */
Control.prototype.setTheme = function(theme) {
    if (theme === this.theme && theme) {
        return;
    }

    this.theme = theme;
    this.invalidSkin = true;
};

Control.prototype.updateTransformContainer = PIXI.Container.prototype.updateTransform;
/**
 * PIXI method to update the object transform for rendering
 * Used to call redraw() before rendering
 *
 * @method updateTransform
 */
Control.prototype.updateTransform = function() {
    if (!this.parent) {
        return;
    }
    if (this.redraw) {
        this.redraw();
    }
    this.updateTransformContainer();
};

/**
 * get local mouse position from PIXI.InteractionData
 *
 * @method mousePos
 * @returns {PIXI.Point}
 */
Control.prototype.mousePos = function(e) {
    return e.data.getLocalPosition(this);
};

/**
 * update before draw call
 * redraw control for current state from theme
 *
 * @method redraw
 */
Control.prototype.redraw = function() {
};

/**
 * Enables/Disables the control.
 * (not implemented yet)
 *
 * @property enabled
 * @type Boolean
 */
Object.defineProperty(Control.prototype, 'enabled', {
    get: function() {
        return this._enabled;
    },
    set: function(value) {
        this._enabled = value;
    }
});


//var originalWidth = Object.getOwnPropertyDescriptor(PIXI.DisplayObjectContainer.prototype, 'width');

/**
 * The width of the shape, setting this will redraw the component.
 * (set redraw)
 *
 * @property width
 * @type Number
 */
Object.defineProperty(Control.prototype, 'width', {
    get: function() {
        return this._width;
        //return originalWidth.get.call(this);
    },
    set: function(width) {
        this._width = width;
        //originalWidth.set.call(this, width);
    }
});

//var originalHeight = Object.getOwnPropertyDescriptor(PIXI.DisplayObjectContainer.prototype, 'height');

/**
 * The height of the shape, setting this will redraw the component.
 * (set redraw)
 *
 * @property height
 * @type Number
 */
Object.defineProperty(Control.prototype, 'height', {
    get: function() {
        //return originalHeight.get.call(this);
        return this._height;
    },
    set: function(height) {
        //originalHeight.set.call(this, height);
        this._height = height;
    }
});

},{}],35:[function(require,module,exports){
var Control = require('./Control');
var resizeScaling = require('../utils/resizeScaling');
var mixin = require('../utils/mixin');

/**
 * Control that requires a theme (e.g. a button)
 *
 * @class Skinable
 * @extends GOWN.Control
 * @memberof GOWN
 * @constructor
 */
function Skinable(theme) {
    Control.call(this);
    this.skinCache = {};
    this.setTheme(theme || GOWN.theme);

    if (this.theme === undefined) {
        throw new Error('you need to define a theme first');
    }

    // invalidate state so the control will be redrawn next time
    this.invalidState = true; // draw for the first time

    this.initResizeScaling();
}

Skinable.prototype = Object.create( Control.prototype );
Skinable.prototype.constructor = Skinable;
module.exports = Skinable;

Skinable.prototype.controlSetTheme = Control.prototype.setTheme;
/**
 * change the theme
 *
 * @method setTheme
 * @param theme the new theme {Theme}
 */
Skinable.prototype.setTheme = function(theme) {
    if (theme === this.theme && theme) {
        return;
    }

    this.controlSetTheme(theme);
    this.preloadSkins();
    // force states to redraw
    this.invalidState = true;
};

/**
 * remove old skin and add new one
 *
 * @method changeSkin
 * @param skin {DisplayObject}
 */
Skinable.prototype.changeSkin = function(skin) {
    if (this._currentSkin !== skin) {
        this._lastSkin = this._currentSkin;
        this.addChildAt(skin, 0);
        skin.alpha = 1.0;
        this._currentSkin = skin;

    }
    this.invalidState = false;
};

/**
 * initiate all skins first
 *
 * @method preloadSkins
 */
Skinable.prototype.preloadSkins = function() {
};

/**
 * get image from skin (will execute a callback with the loaded skin
 * when it is loaded or call it directly when it already is loaded)
 *
 * @method fromSkin
 * @param name name of the state
 * @param callback callback that is executed if the skin is loaded
 */
Skinable.prototype.fromSkin = function(name, callback) {
    var skin;
    if (this.skinCache[name]) {
        skin = this.skinCache[name];
    } else {
        skin = this.theme.getSkin(this.skinName, name);
        this.skinCache[name] = skin;
    }
    if (skin) {
        callback.call(this, skin);
    }
};


mixin(Skinable.prototype, resizeScaling);

/**
 * change the skin name
 * You normally set the skin name as constant in your control, but if you
 * want you can set another skin name to change skins for single components
 * at runtime.
 *
 * @property skinName
 * @type String
 */
Object.defineProperty(Skinable.prototype, 'skinName', {
    get: function() {
        return this._skinName;
    },
    set: function(value) {
        if ( this._skinName === value ) {
            return;
        }
        this._skinName = value;
        this.invalidState = true;
    }
});

},{"../utils/mixin":45,"../utils/resizeScaling":48,"./Control":34}],36:[function(require,module,exports){
/**
 * @file        Main export of the gown.js core library
 * @author      Andreas Bresser <andreasbresser@gmail.com>
 * @copyright   2015 Andreas Bresser
 * @license     {@link https://github.com/brean/gown.js/blob/master/LICENSE|Apache License}
 */

/**
 * @namespace GOWN.core
 */
module.exports = {
    Control:        require('./Control'),
    Skinable:       require('./Skinable'),
};

},{"./Control":34,"./Skinable":35}],37:[function(require,module,exports){
var EventEmitter = require('eventemitter3');

/**
 * used to handle data manipulation (emit events when data changes so for
 *  example a List showing it can be updated and the user does not need to
 *  call a special update function every time he adds/removes data from the
 *  ListCollection.
 * use the ListCollection functions to manipulate the data-array OR modify it
 * using the default array-functions and dispatch the CHANGED-Event yourself.
 *
 * @class ListCollection
 * @extends GOWN.ListCollection
 * @memberof GOWN
 * @constructor
 */
function ListCollection(data) {
    if (!data) {
        data = [];
    }
    this.data = data;
}
ListCollection.prototype = Object.create( EventEmitter.prototype );
ListCollection.prototype.constructor = ListCollection;
module.exports = ListCollection;

ListCollection.CHANGED = 'changed';

ListCollection.RESET = 'reset';
ListCollection.REMOVE_ITEM = 'removeItem';
ListCollection.REPLACE_ITEM = 'replaceItem';
ListCollection.ADD_ITEM = 'addItem';

/**
 * The data source for this collection. Has to be an array.
 *
 * @property data
 * @type Object
 */
Object.defineProperty(ListCollection.prototype, 'data', {
    set: function(data) {
        this._data = data;
        this.emit(ListCollection.CHANGED);
    },
    get: function() {
        return this._data;
    }
});

Object.defineProperty(ListCollection.prototype, 'length', {
    get: function() {
        if (!this.data) {
            return 0;
        }
        return this._data.length;
    }
});

ListCollection.prototype.getItemAt = function(index) {
    return this._data[index];
};

ListCollection.prototype.getItemIndex = function(item) {
    return this._data.indexOf(item);
};

/**
 * add new item between index and index+1
 */
ListCollection.prototype.addItemAt = function(item, index) {
    this._data.splice(index, 0, item);
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.ADD_ITEM, item, index);
};

/**
 * Removes the item at the specified index from the collection and
 * returns it.
 */
ListCollection.prototype.removeItemAt = function (index) {
    var item = this._data.splice(index, 1);
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.REMOVE_ITEM, item, index);
    return item;
};

ListCollection.prototype.removeItem = function (item) {
    var index = this.getItemIndex(item);
    if (index >= 0) {
		this.removeItemAt(index);
	}
};


ListCollection.prototype.removeAll = function (item) {
    if (this._data.length === 0) {
        return;
    }
    this._data.length = 0;
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.RESET);
};

ListCollection.prototype.setItemAt = function (item, index) {
    this._data[index] = item;
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.REPLACE_ITEM, index, item);
};

ListCollection.prototype.push = function (item) {
    this._data.push(item);
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.ADD_ITEM, item, this._data.length-1);
};

ListCollection.prototype.pop = function () {
    var item = this._data.pop();
    this.emit(ListCollection.CHANGE, item);
    this.emit(ListCollection.REMOVE_ITEM, item, this._data.length);
};

ListCollection.prototype.unshift = function (item) {
    this.addItemAt(item, 0);
};

ListCollection.prototype.shift = function () {
    this.removeItemAt(0);
};

ListCollection.prototype.contains = function (item) {
    return this.getItemIndex(item) >= 0;
};

},{"eventemitter3":16}],38:[function(require,module,exports){
var ScaleContainer = require('../utils/ScaleContainer');
var ThemeFont = require('./ThemeFont');
var EventEmitter = require('eventemitter3');

/**
 * basic theming/skinning.
 *
 * @class Theme
 * @memberof GOWN
 * @constructor
 */
function Theme(global) {
    EventEmitter.call(this);

    // at its core a theme is just a dict that holds a collection of skins
    this._skins = {};

    // default font for labels (e.g. buttons)
    if (this.textStyle) {
        this.textStyle.clone();
    } else {
        this.textStyle = new ThemeFont();
    }

    if (global === true || global === undefined) {
        GOWN.theme = this;
    }
    this.textureCache = null;
    // own skin for scroll/slider track
    // (uses the default button skin otherwise)
    this.thumbSkin = true;

    // desktop themes have a hover skin if the mouse moves over the button
    this.hoverSkin = true;
}

Theme.prototype = Object.create( EventEmitter.prototype );
Theme.prototype.constructor = Theme;
module.exports = Theme;

// skin has changed
Theme.SKIN_CHANGED = 'skin_changed';

// theme texture loaded
Theme.LOADED = 'loaded';

// theme texture has been loaded and all controls have an assigned skin
Theme.COMPLETE = 'complete';

/**
 * Set skin for ui component
 *
 * @method setSkin
 * @param comp ui-component that we want to skin, e.g. "button" {String}
 * @param id id for the skin (e.g. state when the skinning function will be applied {String}
 * @param skin skin-function that will executed once the component gets updated  {String}
 */
Theme.prototype.setSkin = function(comp, id, skin) {
    this._skins[comp] = this._skins[comp] || {};
    this._skins[comp][id] = skin;
    this.emit(Theme.SKIN_CHANGED, comp, this);
};

/**
 * Set up the asset loader and load files
 *
 * @method loadImage
 * @param jsonPath {Array}
 */
Theme.prototype.loadImage = function(jsonPath) {
    this._jsonPath = jsonPath;
    GOWN.loader
        .add(jsonPath)
        .load(this.loadComplete.bind(this));
};

/**
 * executed when loadImage has finished
 *
 * @method loadComplete
 */
Theme.prototype.loadComplete = function(loader, resources) {
    this.setCache(resources);
    this.emit(Theme.LOADED, this);
    this.applyTheme();
};


/**
 * set texture cache (normally called when loading is complete)
 *
 * @method loadComplete
 */
Theme.prototype.setCache = function(resources) {
    this.textureCache = resources[this._jsonPath].textures;
};


/**
 * apply theme to controls
 * (normally executed only once after the texture has been loaded)
 *
 * @method applyTheme
 */
Theme.prototype.applyTheme = function() {
    this.emit(Theme.COMPLETE, this);
};

/**
 * Create new Scalable Container
 *
 * @method getScaleContainer
 * @param name id defined in the asset loader {String}
 * @param grid grid defining the inner square of the scalable container {Rectangle}
 * @returns {Function}
 */
Theme.prototype.getScaleContainer = function(name, grid, middleWidth, centerHeight) {
    var scope = this;
    return function() {
        var texture = scope.textureCache[name];
        if(!texture) {
            throw new Error('The frameId "' + name + '" does not exist ' +
            'in the texture cache');
        }
        return new ScaleContainer(texture, grid, middleWidth, centerHeight);

    };
};

/**
 * Create new Sprite from image name
 *
 * @method getImage
 * @param name id defined in the asset loader {String}
 * @returns {Function}
 */
Theme.prototype.getImage = function(name) {
    var scope = this;
    return function() {
        return new PIXI.Sprite(scope.textureCache[name]);
    };
};

/**
 * Get skin by component and state (or type)
 *
 * @method getSkin
 * @param comp name of the component (e.g. button) {String}
 * @param state (state or type of the skin e.g. "up") {String}
 * @returns {DisplayObject}
 */
Theme.prototype.getSkin = function(comp, state) {
    if (this._skins[comp] && this._skins[comp][state]) {
        return this._skins[comp][state]();
    }
    return null;
};

/**
 * Shortcut to remove the theme from global context
 *
 * @method removeTheme
 */
Theme.removeTheme = function() {
    GOWN.theme = undefined;
};

},{"../utils/ScaleContainer":42,"./ThemeFont":39,"eventemitter3":16}],39:[function(require,module,exports){
var OPTIONS = ['fontSize', 'fontFamily', 'fill', 'align', 'stroke',
               'strokeThickness', 'wordWrap', 'wordWrapWidth', 'lineHeight',
               'dropShadow', 'dropShadowColor', 'dropShadowAngle',
               'dropShadowDistance', 'padding', 'textBaseline',
               'lineJoin', 'miterLimit'];

/**
 * @class ThemeFont
 * @memberof GOWN
 * @constructor
 */
function ThemeFont(data) {
    for(var key in data) {
        if(OPTIONS.indexOf(key) !== -1) {
            this[key] = data[key];
        }
    }

    this.fill = this.fill || '#000';
    // default font for label (e.g. buttons)
    this._fontFamily = this._fontFamily || 'Arial';
    this._fontSize = this._fontSize || 12;
}

module.exports = ThemeFont;


/**
 * clone ThemeFont instance
 *
 * @method clone
 */
ThemeFont.prototype.clone = function() {
    var re = new ThemeFont();
    for(var key in this) {
        if(OPTIONS.indexOf(key) !== -1) {
            re[key] = this[key];
        }
    }
    return re;
};

/**
 * update font string
 *
 * @method _updateFont
 * @private
 */
ThemeFont.prototype._updateFont = function() {
    this._font = this._fontSize + 'px ' + this._fontFamily;
};

/**
 * instead of setting font using fontFamily and fontSize is encouraged
 *
 * @property font
 * @type String
 */
Object.defineProperty(ThemeFont.prototype, 'font', {
    get: function() {
        return this._font;
    }
});


/**
 * Font Size
 *
 * @property fontSize
 * @type Number
 */
Object.defineProperty(ThemeFont.prototype, 'fontSize', {
    get: function() {
        return this._fontSize;
    },
    set: function(value) {
        this._fontSize = value;
        this._updateFont();
    }
});


/**
 * Font Familiy
 *
 * @property fontFamily
 * @type String
 */
Object.defineProperty(ThemeFont.prototype, 'fontFamily', {
    get: function() {
        return this._fontFamily;
    },
    set: function(value) {
        this._fontFamily = value;
        this._updateFont();
    }
});

},{}],40:[function(require,module,exports){
var Theme = require('./Theme'),
    Button = require('../controls/Button'),
    ToggleButton = require('../controls/ToggleButton'),
	ScrollBar = require('../controls/ScrollBar'),
	ScrollThumb = require('../controls/ScrollThumb'),
	Check = require('../controls/Check');

/**
 * load theme from .json file.
 *
 * @class Theme
 * @memberof GOWN
 * @constructor
 */
function ThemeParser(jsonPath, global) {
    Theme.call(this, global);

    // components that show something and can be used as skin (see PIXI.shapes)
    this.skinComponents = this.skinComponents || this.getSkinComponents();

    this.loadThemeData(jsonPath);
}

ThemeParser.prototype = Object.create( Theme.prototype );
ThemeParser.prototype.constructor = ThemeParser;
module.exports = ThemeParser;

// load theme data
ThemeParser.DATA_LOADED = 'data_loaded';

/**
 * get component classes that can create skins (in general all PIXI.shapes)
 * note that image textures are not components
 */
ThemeParser.prototype.getSkinComponents = function () {
    var cmps = {};
    if (PIXI.shapes) {
        cmps.rect = PIXI.shapes.Rect;
        cmps.diamond = PIXI.shapes.Diamond;
        cmps.ellipse = PIXI.shapes.Ellipse;
        cmps.line = PIXI.shapes.Line;
    }
    return cmps;
};

ThemeParser.components = {};
ThemeParser.components[Button.SKIN_NAME] = Button.stateNames;
ThemeParser.components[ToggleButton.SKIN_NAME] = ToggleButton.stateNames;
ThemeParser.components[Check.SKIN_NAME] = ToggleButton.stateNames;
ThemeParser.components[ScrollBar.SKIN_NAME] = [
	'horizontal_track', 'vertical_track'
];
ThemeParser.components[ScrollThumb.SKIN_NAME] = ScrollThumb.THUMB_STATES;

ThemeParser.prototype.loadComplete = function(loader, resources) {
    this.setCache(resources);

    if (resources) {
        var res = resources[this._jsonPath];
        if (res) {
            this.themeData = res.data;
        }

        this.applyTheme();
        Theme.prototype.loadComplete.call(this, loader, resources);
    }
};

ThemeParser.prototype.themeApplyTheme = Theme.prototype.applyTheme;
ThemeParser.prototype.applyTheme = function() {
    if (!this.themeData) {
        return;
    }
    this.parseData(this.themeData);
    this.themeApplyTheme();
};

/**
 * get scale9 grid data from theme data
 */
ThemeParser.prototype.getScale9 = function(scale) {
    return new PIXI.Rectangle(
        parseInt(scale[0])*this.themeScale, parseInt(scale[1])*this.themeScale,
        parseInt(scale[2])*this.themeScale, parseInt(scale[3])*this.themeScale);
};

/**
 * create new skin from theme data
 * @param data {String}
 * @returns {function}
 */
ThemeParser.prototype.skinFromData = function(skinData, data) {
    if (skinData.type === 'texture') {
        var scale9;
        if (skinData.scale9 in data.grids) {
            scale9 = this.getScale9(data.grids[skinData.scale9]);
        } else {
            return this.getImage(skinData.texture);
        }
        if (!(skinData.texture in data.frames) && window.console) {
            window.console.error('texture not found in texture atlas: ' +
                skinData.texture + ' ' +
                'please check ' + this._jsonPath);
            return null;
        }

        return this.getScaleContainer(skinData.texture, scale9, skinData.middleWidth, skinData.centerHeight);
    } else if (skinData.type in this.skinComponents) {
        // keep component in scope
        var CmpClass = this.skinComponents[skinData.type];
        return function() {
            var cmp = new CmpClass();
            for (var key in skinData) {
                if (key === 'type') {
                    continue;
                }
                cmp[key] = skinData[key];
            }
            return cmp;
        };
    }
};

/**
 * create dictionary containing skin data (including default values)
 * @param stateName name of current state (e.g. GOWN.Button.UP) {String}
 * @param skinData data gathered from previous runs {String}
 * @param data new data that will be copied into skinData {Object}
 */
ThemeParser.prototype.getSkinData = function(stateName, skinData, data) {
    if (!data) {
        return;
    }

    var copyInto = function(source, target) {
        if (!source) {
            return;
        }
        for (var key in source) {
            target[key] = source[key];
        }
    };

    // get default skin for all states...
    copyInto(data.all, skinData);

    // ... override default values for current state
    copyInto(data[stateName], skinData);
};

ThemeParser.prototype.parseData = function(data) {
    this.hoverSkin = data.hoverSkin;
    this.thumbSkin = data.thumbSkin;
    this.themeScale = data.themeScale || 1.0;

    if (data.textStyle) {
        this.textStyle.fill = data.textStyle.fill;
        this.textStyle.fontFamily = data.textStyle.fontFamily;
    }
    if (!data.skins) {
        return;
    }

    for (var componentName in ThemeParser.components) {
        // create skin for componentName (e.g. button) from data

        var states = ThemeParser.components[componentName];
        //var skins = data.skins[componentName];
        for (var i = 0; i < states.length; i++) {
            var stateName = states[i];
            var skinData = {};
            // set defaults
            this.getSkinData(stateName, skinData, data.skins.default);

            // override defaults with component data
            if (componentName in data.skins) {
                this.getSkinData(stateName, skinData, data.skins[componentName]);
            }

            // create skin from skinData for current skin
            var skin = this.skinFromData(skinData, data);
            if (skin) {
                this.setSkin(componentName, stateName, skin);
            }
        }
    }
};

ThemeParser.prototype.loadThemeData = function(jsonPath) {
    this.loadImage(jsonPath);
};

},{"../controls/Button":18,"../controls/Check":19,"../controls/ScrollBar":24,"../controls/ScrollThumb":27,"../controls/ToggleButton":32,"./Theme":38}],41:[function(require,module,exports){
/**
 * Wrapper for DOM Text Input
 *
 * based on PIXI.Input InputObject by Sebastian Nette,
 * see https://github.com/SebastianNette/PIXI.Input
 *
 * @class InputWrapper
 * @memberof GOWN
 * @static
 */
function InputWrapper() {
}

module.exports = InputWrapper;

/**
 * DOM input field.
 * we use one input field for all InputControls
 *
 * @property hiddenInput
 * @type DOMObject
 * @static
 */
InputWrapper.hiddenInput = null;

/**
 * create/return unique input field.
 * @returns {DOMObject}
 */
InputWrapper.createInput = function() {
    if (!InputWrapper.hiddenInput) {
        var input = document.createElement('input');
        input.type = 'text';
        input.tabindex = -1;
        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.style.pointerEvents = 'none';
        input.style.left = '0px';
        input.style.bottom = '0px';
        input.style.left = '-100px';
        input.style.top = '-100px';
        input.style.zIndex = 10;

        // add blur handler
        input.addEventListener('blur', function()
        {
            if (GOWN.InputControl.currentInput)
            {
                GOWN.InputControl.currentInput.onMouseUpOutside();
            }
        }, false);

        // on key down
        input.addEventListener('keydown', function(e)
        {
            if (GOWN.InputControl.currentInput)
            {
                e = e || window.event;
                if (GOWN.InputControl.currentInput.hasFocus)
                {
                    GOWN.InputControl.currentInput.onKeyDown();
                    var keyCode = e.which;

                    // ESC
                    if (keyCode === 27) {
                        GOWN.InputControl.currentInput.blur();
                        return;
                    }

                    // add support for Ctrl/Cmd+A selection - select whole input text
                    if (keyCode === 65 && (e.ctrlKey || e.metaKey)) {
                        e.preventDefault();
                        GOWN.InputControl.currentInput.updateSelection(
                            0, GOWN.InputControl.currentInput.text.length);
                        return;
                    }

                    // block keys that shouldn't be processed
                    if (keyCode === 17 || e.metaKey || e.ctrlKey) {
                        return;
                    }

                    // enter key
                    if (keyCode === 13) {
                        e.preventDefault();
                        GOWN.InputControl.currentInput.onEnter();
                    }
                }
            }
        });

        // on key up
        input.addEventListener('keyup', function(e)
        {
            if(GOWN.InputControl.currentInput)
            {
                e = e || window.event;
                if (GOWN.InputControl.currentInput.hasFocus)
                {
                    GOWN.InputControl.currentInput.onKeyUp();
                }
            }
        });

        document.body.appendChild(input);

        InputWrapper.hiddenInput = input;
    }
    return InputWrapper.hiddenInput;
};

/**
 * key to get text ('value' for default input field)
 * @type {string}
 * @static
 * @private
 */
InputWrapper.textProp = 'value';

/**
 * activate the text input
 */
InputWrapper.focus = function()
{
    if (InputWrapper.hiddenInput) {
        InputWrapper.hiddenInput.focus();
    }
};

/**
 * deactivate the text input
 */
InputWrapper.blur = function()
{
    if (InputWrapper.hiddenInput) {
        InputWrapper.hiddenInput.blur();
    }
};


/**
 * set selection
 * @returns {DOMObject}
 */
InputWrapper.setSelection = function(start, end)
{
    if (InputWrapper.hiddenInput) {
        InputWrapper.hiddenInput.selectionStart = start;
        InputWrapper.hiddenInput.selectionEnd = end;
    } else {
        InputWrapper._selection = [start, end];
    }
};

/**
 * get start and end of selection
 * @returns {Array}
 */
InputWrapper.getSelection = function() {
    if (InputWrapper.hiddenInput) {
        return [
            InputWrapper.hiddenInput.selectionStart,
            InputWrapper.hiddenInput.selectionEnd
        ];
    } else {
        return InputWrapper._selection;
    }
};

/**
 * get text value from hiddenInput
 * @returns {String}
 */
InputWrapper.getText = function() {
    if (InputWrapper.hiddenInput) {
        var textProp = InputWrapper.textProp;
        var txt = InputWrapper.hiddenInput[textProp];
        return txt.replace(/\r/g, '');
    } else {
        return InputWrapper._text;
    }

};

/**
 * get text value to hiddenInput
 * @param {String} text
 */
InputWrapper.setText = function(text) {
    if (InputWrapper.hiddenInput) {
        var textProp = InputWrapper.textProp;
        InputWrapper.hiddenInput[textProp] = text;
    } else {
        InputWrapper._text = text;
    }
};

/**
 * set max. length setting it to 0 will allow unlimited text input
 * @param length
 */
InputWrapper.setMaxLength = function(length) {
    if (InputWrapper.hiddenInput) {
        if (!length || length < 0) {
            InputWrapper.hiddenInput.removeAttribute('maxlength');
        } else {
            InputWrapper.hiddenInput.setAttribute('maxlength', length);
        }
    } else {
        InputWrapper._maxLength = length;
    }
};

InputWrapper.setType = function(type) {
    if (InputWrapper.hiddenInput) {
        InputWrapper.hiddenInput.type = type;
    } else {
        InputWrapper._type = type;
    }
};

InputWrapper.getType = function() {
    if (InputWrapper.hiddenInput) {
        return InputWrapper.hiddenInput.type;
    } else {
        return InputWrapper._type;
    }
};

},{}],42:[function(require,module,exports){
/**
 * Scale 9 Container.
 * e.g. useful for scalable buttons.
 *
 * @class ScaleContainer
 * @extends PIXI.Container
 * @memberof GOWN
 * @constructor
 * @param texture {Texture}
 * @param rect rectangle with position and dimensions of the center piece. Will be used to calculate positons of all other pieces {PIXI.Rectangle}
 * @middleWidth (optional) alternative width to crop the center piece (only needed if we want to scale the image smaller than the original)
 * @centerHeight (optional) alternative height to crop the center piece (only needed if we want to scale the image smaller than the original)
 */

function ScaleContainer(texture, rect, middleWidth, centerHeight) {
    PIXI.Container.call( this );

    this.rect = rect;
    this.baseTexture = texture.baseTexture;
    this.frame = texture.frame;

    this._width = this.frame.width;
    this._height = this.frame.height;

    // left / middle / right width
    var lw = rect.x;
    var mw = rect.width;
    var rw = this.frame.width - (mw + lw);

    // top / center / bottom height
    var th = rect.y;
    var ch = rect.height;
    var bh = this.frame.height - (ch + th);

    middleWidth = middleWidth || mw;
    centerHeight = centerHeight || ch;

    /**
     * calculated min. width based on tile sizes in pixel without scaling
     * (if middleWidth is not set it is the same as the width of the
     *  texture in the atlas)
     */
    this.minWidth = lw + middleWidth + rw;

    /**
     * calculated min. height based on tile sizes in pixel without scaling
     * (if middleWidth is not set it is the same as the height of the
     *  texture in the atlas)
     */
    this.minHeight = th + centerHeight + bh;

    // top left
    if (lw > 0 && th > 0) {
        this.tl = this._getTexture(0, 0, lw, th);
        this.addChild(this.tl);
    }
    // top middle
    if (mw > 0 && th > 0) {
        this.tm = this._getTexture(lw, 0, middleWidth, th);
        this.addChild(this.tm);
        this.tm.x = lw;
    }
    // top right
    if (rw > 0 && th > 0) {
        this.tr = this._getTexture(lw + mw, 0, rw, th);
        this.addChild(this.tr);
    }

    // center left
    if (lw > 0 && ch > 0) {
        this.cl = this._getTexture(0, th, lw, centerHeight);
        this.addChild(this.cl);
        this.cl.y = th;
    }
    // center middle
    if (mw > 0 && ch > 0) {
        this.cm = this._getTexture(lw, th, middleWidth, centerHeight);
        this.addChild(this.cm);
        this.cm.y = th;
        this.cm.x = lw;
    }
    // center right
    if (rw > 0 && ch > 0) {
        this.cr = this._getTexture(lw + mw, th, rw, centerHeight);
        this.addChild(this.cr);
        this.cr.y = th;
    }

    // bottom left
    if (lw > 0 && bh > 0) {
        this.bl = this._getTexture(0, th + ch, lw, bh);
        this.addChild(this.bl);
    }
    // bottom middle
    if (mw > 0 && bh > 0) {
        this.bm = this._getTexture(lw, th + ch, middleWidth, bh);
        this.addChild(this.bm);
        this.bm.x = lw;
    }
    // bottom right
    if (rw > 0 && bh > 0) {
        this.br = this._getTexture(lw + mw, th + ch, rw, bh);
        this.addChild(this.br);
    }
}

// constructor
ScaleContainer.prototype = Object.create( PIXI.Container.prototype );
ScaleContainer.prototype.constructor = ScaleContainer;
module.exports = ScaleContainer;

/**
 * set scaling width and height
 *
 * @method _updateScales
 * @private
 */
ScaleContainer.prototype._updateScales = function() {
    this._positionTilable();

    var scaleOriginals = this.scaleOriginals = {};

    var scaleOriginal = function(name, elem) {
        if (elem && elem.width && elem.height) {
            scaleOriginals[name] = {
                width: elem.width,
                height: elem.height
            };
        }
    };

    scaleOriginal('tl', this.tl);
    scaleOriginal('tm', this.tm);
    scaleOriginal('tr', this.tr);

    scaleOriginal('cl', this.cl);
    scaleOriginal('cm', this.cm);
    scaleOriginal('cr', this.cr);

    scaleOriginal('bl', this.bl);
    scaleOriginal('bm', this.bm);
    scaleOriginal('br', this.br);
};

/**
 * create a new texture from a base-texture by given dimensions
 *
 * @method _getTexture
 * @private
 */
ScaleContainer.prototype._getTexture = function(x, y, w, h) {
    var frame = new PIXI.Rectangle(this.frame.x+x, this.frame.y+y, w, h);
    var t = new PIXI.Texture(this.baseTexture, frame, frame.clone(), null);
    return new PIXI.Sprite(t);
};

/**
 * The width of the container, setting this will redraw the component.
 *
 * @property width
 * @type Number
 */
Object.defineProperty(ScaleContainer.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(value) {
        if (this._width !== value) {
            if (this.minWidth && this.minWidth > 0 &&
                value < this.minWidth) {
                value = this.minWidth;
            }
            this._width = value;
            this.invalid = true;
            this._updateScales();
        }
    }
});

/**
 * The height of the container, setting this will redraw the component.
 *
 * @property height
 * @type Number
 */
Object.defineProperty(ScaleContainer.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(value) {
        if (this._height !== value) {
            if (this.minHeight && this.minHeight > 0 &&
                value < this.minHeight) {
                value = this.minHeight;
            }
            this._height = value;
            this.invalid = true;
            this._updateScales();
        }
    }
});

/**
 * update before draw call (reposition textures)
 *
 * @method redraw
 */
ScaleContainer.prototype.redraw = function() {
    if (this.invalid) {
        this._positionTilable();
        this.invalid = false;
    }
};

/**
 * recalculate the position of the tiles (every time width/height changes)
 *
 * @method _positionTilable
 * @private
 */
ScaleContainer.prototype._positionTilable = function() {
    // left / middle / right width
    var lw = this.rect.x;
    var mw = this.rect.width;
    var rw = this.frame.width - (mw + lw);

    // top / center / bottom height
    var th = this.rect.y;
    var ch = this.rect.height;
    var bh = this.frame.height - (ch + th);

    var rightX = this._width - rw;
    var bottomY = this._height - bh;
    if (this.cr) {
        this.cr.x = rightX;
    }
    if (this.br) {
        this.br.x = rightX;
        this.br.y = bottomY;
    }
    if (this.tr) {
        this.tr.x = rightX;
    }

    var middleWidth = this._width - (lw + rw);
    var centerHeight = this._height - (th + bh);
    if (this.cm) {
        this.cm.width = middleWidth;
        this.cm.height = centerHeight;
    }
    if (this.bm) {
        this.bm.width = middleWidth;
        this.bm.y = bottomY;
    }
    if (this.tm) {
        this.tm.width = middleWidth;
    }
    if (this.cl) {
        this.cl.height = centerHeight;
    }
    if (this.cr) {
        this.cr.height = centerHeight;
    }

    if (this.bl) {
        this.bl.y = bottomY;
    }
};

/**
 *
 * Helper function that creates a sprite that will contain a texture from
 * the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @method fromFrame
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @param rect {Rectangle} defines tilable area
 * @return {ScaleTexture} A new Scalable Texture (e.g. a button) using
 *                        a texture from the texture cache matching the frameId
 */
ScaleContainer.fromFrame = function(frameId, rect) {
    var texture = PIXI.utils.TextureCache[frameId];
    if(!texture) {
        throw new Error('The frameId "' + frameId + '" does not exist ' +
                        'in the texture cache');
    }
    return new ScaleContainer(texture, rect);
};

},{}],43:[function(require,module,exports){
/**
 * Holds all information related to a Slider change event
 *
 * @class SliderData
 * @memberof GOWN
 * @constructor
 */
function SliderData()
{
    this.value = 0;
    /**
     * The target Sprite that was interacted with
     *
     * @property target
     * @type Sprite
     */
    this.target = null;
}

module.exports = SliderData;

},{}],44:[function(require,module,exports){
/**
 * @file        Main export of the gown.js util library
 * @author      Andreas Bresser <andreasbresser@gmail.com>
 * @copyright   2015 Andreas Bresser
 * @license     {@link https://github.com/brean/gown.js/blob/master/LICENSE|Apache License}
 */

/**
 * @namespace GOWN.util
 */
module.exports = {
    InputWrapper:           require('./InputWrapper'),
    mouseWheelSupport:      require('./mouseWheelSupport'),
    position:               require('./position'),
    ScaleContainer:         require('./ScaleContainer'),
    SliderData:             require('./SliderData'),
    resizeScaling:          require('./resizeScaling'),
    mixin:                  require('./mixin')
};

},{"./InputWrapper":41,"./ScaleContainer":42,"./SliderData":43,"./mixin":45,"./mouseWheelSupport":46,"./position":47,"./resizeScaling":48}],45:[function(require,module,exports){
module.exports = function(destination, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            if(key === 'defineProperty') {
                for (var name in source[key]) {
                    var data = source[key][name];
                    if (data.configurable === undefined) {
                         // We change our default case, so that we can
                         // overwrite properties later on
                        data.configurable = true;
                    }
                    Object.defineProperty(destination, name, data);
                }
            } else {
                destination[key] = source[key];
            }
        }
    }
    return destination;
};

},{}],46:[function(require,module,exports){
/**
 * TODO: make it work with PIXI (this is just copied from createjs_ui / WIP)
 * (e.g. get currently selected object using this.stage.interactionManager.hitTest(this, e)
 * and then execute an "onwheel"-callback)
 *
 * enable or disable mouse wheel support for canvas (e.g. for scroller)
 * using HTML 5 scrolling. will do nothing if it is already activated/
 * deactivated
 * based on http://www.sitepoint.com/html5-javascript-mouse-wheel/
 * @param stage the PIXI-stage
 * @param enable true to enable mouse support, false to disable,
 */
function mouseWheelSupport(stage, enable) {
    var canvas = stage.canvas;
    if (enable || enable === undefined) {
        if (GOWN._mouseWheelHandler !== undefined) {
            return;
        }
        GOWN._mouseWheelHandler = function(event) {
            event = window.event || event;
            var delta = Math.max(-1, Math.min(1,
                (event.wheelDelta || -event.detail)));

            var target = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY, 1);
            if (!target) {
                return;
            }
            for(var i = 0; i < target.length; i++) {
                var t = target[i];
                t.mouseMove(delta);
                /*
                var evt = new createjs.MouseEvent(
                    "mousewheel", true, false,
                    t.x, t.y, event, -1, true, t.rawX, t.rawY);
                evt.delta = delta;
                t.dispatchEvent(evt);
                */
            }
        };
        if (canvas.addEventListener) {
            canvas.addEventListener('mousewheel',
                GOWN._mouseWheelHandler, false);
            canvas.addEventListener('DOMMouseScroll',
                GOWN._mouseWheelHandler, false);
        } else {
            canvas.attachEvent('onmousewheel',
                GOWN._mouseWheelHandler);
        }
    } else {
        if (GOWN._mouseWheelHandler === undefined) {
            return;
        }
        if (canvas.removeEventListener) {
            canvas.removeEventListener('mousewheel',
                GOWN._mouseWheelHandler);
            canvas.removeEventListener('DOMMouseScroll',
                GOWN._mouseWheelHandler);
        } else {
            canvas.detachEvent('onmousewheel',
                GOWN._mouseWheelHandler);
        }
        GOWN._mouseWheelHandler = undefined;
    }
}

module.exports = mouseWheelSupport;
},{}],47:[function(require,module,exports){
/**
 * center element on parent vertically
 * @param elem
 * @param parent (optional)
 * @method centerVertical
 */
function centerVertical(elem, parent) {
    parent = parent || elem.parent;
    elem.y = Math.floor((parent.height - elem.height ) / 2);
}

/**
 *
 * @param elem
 * @param parent (optional)
 */
function bottom(elem, parent) {
    parent = parent || elem.parent;
    elem.y = parent.height - elem.height;
}

/**
 * center element on parent horizontally
 * @param elem
 * @param parent (optional)
 * @method centerHorizontal
 */
function centerHorizontal(elem, parent) {
    parent = parent || elem.parent;
    elem.x = Math.floor((parent.width - elem.width ) / 2);
}


/**
 * center element on parent
 * @param elem
 * @param parent (optional)
 * @method center
 */
function center(elem, parent) {
    centerVertical(elem, parent);
    centerHorizontal(elem, parent);
}


module.exports = {
    centerHorizontal: centerHorizontal,
    centerVertical: centerVertical,
    center: center,
    bottom: bottom
};

},{}],48:[function(require,module,exports){

module.exports = {
    /**
     * this should be called from inside the constructor
     *
     * @method initResizeScaling
     */
    initResizeScaling: function() {
        this.resizeScaling = true; // resize instead of scale

        this.minWidth = 1;
        this.minHeight = 1;

        // update dimension flag
        this._lastWidth = NaN;
        this._lastHeight = NaN;
    },

    /**
     * update before draw call
     * redraw control for current state from theme
     *
     * @method redraw
     */
    redraw: function() {
        // remove last skin after new one has been added
        // (just before rendering, otherwise we would see nothing for a frame)
        if (this._lastSkin) {
            //this.removeChild(this._lastSkin);
            this._lastSkin.alpha = 0;
            this._lastSkin = null;
        }
        if (this.invalidState) {
            this.fromSkin(this._currentState, this.changeSkin);
        }
        var width = this.worldWidth;
        var height = this.worldHeight;
        if (this._currentSkin &&
            (this._lastWidth !== width || this._lastHeight !== height) &&
            width > 0 && height > 0) {

            this._currentSkin.width = this._lastWidth = width;
            this._currentSkin.height = this._lastHeight = height;
            this.updateDimensions();
        }
    },

    updateDimensions: function() {
    },


    updateTransform: function() {
        var wt = this.worldTransform;
        var scaleX = 1;
        var scaleY = 1;

        if(this.redraw) {

            if(this.resizeScaling) {
                var pt = this.parent.worldTransform;

                scaleX = Math.sqrt(Math.pow(pt.a, 2) + Math.pow(pt.b, 2));
                scaleY = Math.sqrt(Math.pow(pt.c, 2) + Math.pow(pt.d, 2));
            }

            this.worldWidth = Math.round(Math.max(this._width * scaleX, this.minWidth));
            this.worldHeight = Math.round(Math.max(this._height * scaleY, this.minHeight));
            this.redraw();
        }

        // obmit Control.updateTransform as it calls redraw as well
        if(!this.resizeScaling) {
            PIXI.Container.prototype.updateTransform.call(this);
        } else {
            PIXI.DisplayObject.prototype.updateTransform.call(this);

            // revert scaling
            var tx = wt.tx;
            var ty = wt.ty;
            scaleX = scaleX !== 0 ? 1/scaleX : 0;
            scaleY = scaleY !== 0 ? 1/scaleY : 0;
            wt.scale(scaleX, scaleY);
            wt.tx = tx;
            wt.ty = ty;

            for (var i = 0, j = this.children.length; i < j; ++i) {
                this.children[i].updateTransform();
            }
        }
    },

    defineProperty: {

            'height': {
                get: function() {
                    return this._height;
                },
                set: function(value) {
                    this._height = value;
                    this.minHeight = Math.min(value, this.minHeight);
                }
            },
            'width': {
                get: function() {
                    return this._width;
                },
                set: function(value) {
                    this._width = value;
                    this.minWidth = Math.min(value, this.minWidth);
                }
            }
    }
};

},{}]},{},[1])(1)
});


//# sourceMappingURL=gown-full.js.map
