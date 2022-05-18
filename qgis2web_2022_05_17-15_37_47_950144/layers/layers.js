var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bulk_Water_Dams_1 = new ol.format.GeoJSON();
var features_Bulk_Water_Dams_1 = format_Bulk_Water_Dams_1.readFeatures(json_Bulk_Water_Dams_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulk_Water_Dams_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulk_Water_Dams_1.addFeatures(features_Bulk_Water_Dams_1);
var lyr_Bulk_Water_Dams_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bulk_Water_Dams_1, 
                style: style_Bulk_Water_Dams_1,
                interactive: true,
                title: '<img src="styles/legend/Bulk_Water_Dams_1.png" /> Bulk_Water_Dams'
            });
var format_Open_Watercourses_2 = new ol.format.GeoJSON();
var features_Open_Watercourses_2 = format_Open_Watercourses_2.readFeatures(json_Open_Watercourses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Open_Watercourses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Open_Watercourses_2.addFeatures(features_Open_Watercourses_2);
var lyr_Open_Watercourses_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Open_Watercourses_2, 
                style: style_Open_Watercourses_2,
                interactive: true,
                title: '<img src="styles/legend/Open_Watercourses_2.png" /> Open_Watercourses'
            });
var format_Stormwater_Waterbodies_3 = new ol.format.GeoJSON();
var features_Stormwater_Waterbodies_3 = format_Stormwater_Waterbodies_3.readFeatures(json_Stormwater_Waterbodies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stormwater_Waterbodies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stormwater_Waterbodies_3.addFeatures(features_Stormwater_Waterbodies_3);
var lyr_Stormwater_Waterbodies_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stormwater_Waterbodies_3, 
                style: style_Stormwater_Waterbodies_3,
                interactive: true,
                title: '<img src="styles/legend/Stormwater_Waterbodies_3.png" /> Stormwater_Waterbodies'
            });
var format_Wetlands_4 = new ol.format.GeoJSON();
var features_Wetlands_4 = format_Wetlands_4.readFeatures(json_Wetlands_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetlands_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetlands_4.addFeatures(features_Wetlands_4);
var lyr_Wetlands_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wetlands_4, 
                style: style_Wetlands_4,
                interactive: true,
                title: '<img src="styles/legend/Wetlands_4.png" /> Wetlands'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bulk_Water_Dams_1.setVisible(true);lyr_Open_Watercourses_2.setVisible(true);lyr_Stormwater_Waterbodies_3.setVisible(true);lyr_Wetlands_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bulk_Water_Dams_1,lyr_Open_Watercourses_2,lyr_Stormwater_Waterbodies_3,lyr_Wetlands_4];
lyr_Bulk_Water_Dams_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'PLC': 'PLC', 'RVR': 'RVR', 'OWNR': 'OWNR', 'CNST': 'CNST', 'WTW': 'WTW', 'CPCT': 'CPCT', 'CPCT_DS': 'CPCT_DS', 'WALL': 'WALL', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_Open_Watercourses_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LU_TYPE_CD': 'LU_TYPE_CD', 'CTMT': 'CTMT', 'RVR_NAME': 'RVR_NAME', 'STRM_ORDR': 'STRM_ORDR', 'OWC_DSCR': 'OWC_DSCR', 'DSTR': 'DSTR', 'SAP_DESCR': 'SAP_DESCR', 'OWNRSHP': 'OWNRSHP', 'MNT_AUTH': 'MNT_AUTH', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Stormwater_Waterbodies_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ANTH_TYPE': 'ANTH_TYPE', 'WTLD_NAME': 'WTLD_NAME', 'WTLD_TYPE': 'WTLD_TYPE', 'HYDR_PRD': 'HYDR_PRD', 'AREA_HCTR': 'AREA_HCTR', 'CTMT': 'CTMT', 'CRTC_BDVS_': 'CRTC_BDVS_', 'DSTR': 'DSTR', 'PLNG_RGN': 'PLNG_RGN', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Wetlands_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WTLN_ID': 'WTLN_ID', 'ANTH_TYPE': 'ANTH_TYPE', 'WTLN_NAME': 'WTLN_NAME', 'CBA_CTGR': 'CBA_CTGR', 'IMPC': 'IMPC', 'SLNT': 'SLNT', 'PH': 'PH', 'EXPR_RVWR': 'EXPR_RVWR', 'TO_GRND_TR': 'TO_GRND_TR', 'DATE_GRND_': 'DATE_GRND_', 'AREA_HCTR': 'AREA_HCTR', 'PES': 'PES', 'EIS': 'EIS', 'LVL_1': 'LVL_1', 'LVL_2': 'LVL_2', 'LVL_3': 'LVL_3', 'LVL_4A': 'LVL_4A', 'LVL_4B': 'LVL_4B', 'LVL_4C': 'LVL_4C', 'LVL_5A': 'LVL_5A', 'LVL_5B': 'LVL_5B', 'LVL_5C': 'LVL_5C', 'LVL_6A': 'LVL_6A', 'LVL_6B': 'LVL_6B', 'LVL_6C': 'LVL_6C', 'LVL_6E': 'LVL_6E', 'VGTN_INDG_': 'VGTN_INDG_', 'VGTN_ALN_C': 'VGTN_ALN_C', 'SBST': 'SBST', 'IMPC_CMNT': 'IMPC_CMNT', 'CMNT': 'CMNT', 'GRND_TRTH_': 'GRND_TRTH_', 'MAP_CNFD': 'MAP_CNFD', 'PRMT_MTR': 'PRMT_MTR', 'SHAPE_STAr': 'SHAPE_STAr', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Bulk_Water_Dams_1.set('fieldImages', {'OBJECTID': '', 'NAME': '', 'PLC': '', 'RVR': '', 'OWNR': '', 'CNST': '', 'WTW': '', 'CPCT': '', 'CPCT_DS': '', 'WALL': '', 'SHAPESTAre': '', 'SHAPESTLen': '', });
lyr_Open_Watercourses_2.set('fieldImages', {'OBJECTID': '', 'LU_TYPE_CD': '', 'CTMT': '', 'RVR_NAME': '', 'STRM_ORDR': '', 'OWC_DSCR': '', 'DSTR': '', 'SAP_DESCR': '', 'OWNRSHP': '', 'MNT_AUTH': '', 'ShapeSTLen': '', });
lyr_Stormwater_Waterbodies_3.set('fieldImages', {'OBJECTID': '', 'ANTH_TYPE': '', 'WTLD_NAME': '', 'WTLD_TYPE': '', 'HYDR_PRD': '', 'AREA_HCTR': '', 'CTMT': '', 'CRTC_BDVS_': '', 'DSTR': '', 'PLNG_RGN': '', 'ShapeSTAre': '', 'ShapeSTLen': '', });
lyr_Wetlands_4.set('fieldImages', {'OBJECTID': '', 'WTLN_ID': '', 'ANTH_TYPE': '', 'WTLN_NAME': '', 'CBA_CTGR': '', 'IMPC': '', 'SLNT': '', 'PH': '', 'EXPR_RVWR': '', 'TO_GRND_TR': '', 'DATE_GRND_': '', 'AREA_HCTR': '', 'PES': '', 'EIS': '', 'LVL_1': '', 'LVL_2': '', 'LVL_3': '', 'LVL_4A': '', 'LVL_4B': '', 'LVL_4C': '', 'LVL_5A': '', 'LVL_5B': '', 'LVL_5C': '', 'LVL_6A': '', 'LVL_6B': '', 'LVL_6C': '', 'LVL_6E': '', 'VGTN_INDG_': '', 'VGTN_ALN_C': '', 'SBST': '', 'IMPC_CMNT': '', 'CMNT': '', 'GRND_TRTH_': '', 'MAP_CNFD': '', 'PRMT_MTR': '', 'SHAPE_STAr': '', 'ShapeSTAre': '', 'ShapeSTLen': '', });
lyr_Bulk_Water_Dams_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'PLC': 'no label', 'RVR': 'no label', 'OWNR': 'no label', 'CNST': 'no label', 'WTW': 'no label', 'CPCT': 'no label', 'CPCT_DS': 'no label', 'WALL': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', });
lyr_Open_Watercourses_2.set('fieldLabels', {'OBJECTID': 'no label', 'LU_TYPE_CD': 'no label', 'CTMT': 'no label', 'RVR_NAME': 'no label', 'STRM_ORDR': 'no label', 'OWC_DSCR': 'no label', 'DSTR': 'no label', 'SAP_DESCR': 'no label', 'OWNRSHP': 'no label', 'MNT_AUTH': 'no label', 'ShapeSTLen': 'no label', });
lyr_Stormwater_Waterbodies_3.set('fieldLabels', {'OBJECTID': 'no label', 'ANTH_TYPE': 'no label', 'WTLD_NAME': 'no label', 'WTLD_TYPE': 'no label', 'HYDR_PRD': 'no label', 'AREA_HCTR': 'no label', 'CTMT': 'no label', 'CRTC_BDVS_': 'no label', 'DSTR': 'no label', 'PLNG_RGN': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_Wetlands_4.set('fieldLabels', {'OBJECTID': 'no label', 'WTLN_ID': 'no label', 'ANTH_TYPE': 'no label', 'WTLN_NAME': 'no label', 'CBA_CTGR': 'no label', 'IMPC': 'no label', 'SLNT': 'no label', 'PH': 'no label', 'EXPR_RVWR': 'no label', 'TO_GRND_TR': 'no label', 'DATE_GRND_': 'no label', 'AREA_HCTR': 'no label', 'PES': 'no label', 'EIS': 'no label', 'LVL_1': 'no label', 'LVL_2': 'no label', 'LVL_3': 'no label', 'LVL_4A': 'no label', 'LVL_4B': 'no label', 'LVL_4C': 'no label', 'LVL_5A': 'no label', 'LVL_5B': 'no label', 'LVL_5C': 'no label', 'LVL_6A': 'no label', 'LVL_6B': 'no label', 'LVL_6C': 'no label', 'LVL_6E': 'no label', 'VGTN_INDG_': 'no label', 'VGTN_ALN_C': 'no label', 'SBST': 'no label', 'IMPC_CMNT': 'no label', 'CMNT': 'no label', 'GRND_TRTH_': 'no label', 'MAP_CNFD': 'no label', 'PRMT_MTR': 'no label', 'SHAPE_STAr': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_Wetlands_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});