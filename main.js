var themes = {
    'aeon_desktop': {},
    'metalworks_desktop': {},
    'metalworks_mobile': {}
};

//load themes
function loadText(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               callback(xmlhttp.responseText, url);
           } else if (xmlhttp.status == 400) {
               throw new Error('file not found: ' + url);
           }
           else {
               throw new Error('Error: ' + xmlhttp.status);
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var theme = new GOWN.ThemeParser('assets/aeon_desktop/aeon_desktop.json');
theme.once(GOWN.Theme.COMPLETE, onCompleteAeon, this);

var app;

function onCompleteAeon() {
    app = new GOWN.Application({backgroundColor: 0xffffff});

    var texture = PIXI.Texture.fromImage('assets/aeon_desktop/aeon_desktop.png');
    var sprite = new PIXI.Sprite(texture);
    app.addChild(sprite);
    sprite.x = 300;
    sprite.interactive = true;
    var themeData = [];
    sprite.on('mousedown', function(mouseEvent) {
        var mousePos = mouseEvent.data.getLocalPosition(this);
        for (var i = 0; i < themeData.length; i++) {
            var frameData = themeData[i];
            if (mousePos.x > frameData.frame.x &&
                mousePos.x < frameData.frame.x + frameData.frame.w &&
                mousePos.y > frameData.frame.y &&
                mousePos.y < frameData.frame.y + frameData.frame.h) {
                    app.preview(frameData);
                    return;
            }
        }
        app.preview();
    })

    var txt = new PIXI.Text('');
    txt.x = 300;
    txt.y = 512;
    app.addChild(txt);

    var preview = new PIXI.shapes.Rect(0xff0000, 0.8, 100, 50);
    preview.visible = false;
    app.addChild(preview);

    app.preview = function(data) {
        if (!data) {
            preview.visible = false;
            txt.text = "";
            return;
        }
        preview.visible = true;
        preview.x = data.frame.x+300;
        preview.y = data.frame.y;
        preview.width = data.frame.w;
        preview.height = data.frame.h;
        txt.text = data.name + "\nwidth: " + data.frame.w + "\nheight: " + data.frame.h;
        //TODO: set list selected item
    }

    loadText('assets/aeon_desktop/aeon_desktop.json', function(json_str, url) {
        var data = JSON.parse(json_str);
        for (frame in data.frames) {
            var frameData = data.frames[frame];
            frameData.name = frame
            themeData.push(frameData)
        }
        var frameBar = new FrameBar(app, themeData);
        app.addChild(frameBar);
        // set width/height for layouting
        app.onresize();
    });
}
