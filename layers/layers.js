var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> القاعات'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> الكافتريات'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr__0,lyr__1];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'رقم_القاعة': 'رقم القاعة', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_البينشات': 'عدد البينشات', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء', 'عدد_المكيفات': 'عدد المكيفات', 'إضافات_اخرى': 'إضافات اخرى', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_الكافتريا': 'اسم الكافتريا', 'عدد_الابواب': 'عدد الابواب', 'عدد_النوافذ': 'عدد النوافذ', 'عدد_مراوح_الهواء': 'عدد مراوح الهواء عدد المكيفات', 'عدد_المكيفات': 'عدد المكيفات', 'عدد_الاصناف': 'عدد الاصناف', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr__0.set('fieldImages', {'OBJECTID': '', 'رقم_القاعة': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_البينشات': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'إضافات_اخرى': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__1.set('fieldImages', {'OBJECTID': '', 'اسم_الكافتريا': '', 'عدد_الابواب': '', 'عدد_النوافذ': '', 'عدد_مراوح_الهواء': '', 'عدد_المكيفات': '', 'عدد_الاصناف': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr__0.set('fieldLabels', {'OBJECTID': 'no label', 'رقم_القاعة': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_البينشات': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'إضافات_اخرى': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_الكافتريا': 'no label', 'عدد_الابواب': 'no label', 'عدد_النوافذ': 'no label', 'عدد_مراوح_الهواء': 'no label', 'عدد_المكيفات': 'no label', 'عدد_الاصناف': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});