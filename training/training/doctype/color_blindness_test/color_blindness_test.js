// Copyright (c) 2019, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on("Color Blindness Test", {
    onload: function (frm) {
        hide_field(["plate2", "plate3", "plate4", "plate5", "plate6", "plate7", "plate8", "plate9", "plate10", "plate11", "plate12", "plate13", "plate14", "plate15", "plate16", "plate17", "plate18", "plate19", "plate20", "plate21", "plate22", "plate23", "plate24", "plate25", "plate26", "plate27", "plate28", "plate29", "plate30", "plate31", "plate32", "plate33", "plate34", "plate35", "plate36", "plate37", "plate38"])
    },
    sop11: function (frm) {
        frm.set_value("sopans1", 14);
    },
    sop12: function (frm) {
        frm.set_value("sopans1", 12);
    },
    sop13: function (frm) {
        frm.set_value("sopans1", "4");
    },
    sopans1: function (frm) {
        hide_field("plate1")
        unhide_field("plate2")
    },
    sop21: function (frm) {
        frm.set_value("sopans2", "8");
    },
    sop22: function (frm) {
        frm.set_value("sopans2", "3");
    },
    sop23: function (frm) {
        frm.set_value("sopans2", "6");
    },
    sopans2: function (frm) {
        hide_field("plate2")
        unhide_field("plate3")
    },
    sop31: function (frm) {
        frm.set_value("sopans3", "8");
    },
    sop32: function (frm) {
        frm.set_value("sopans3", "3");
    },
    sop33: function (frm) {
        frm.set_value("sopans3", "6");
    },
    sopans3: function (frm) {
        hide_field("plate3")
        unhide_field("plate4")
    },
    sop41: function (frm) {
        frm.set_value("sopans4", "76");
    },
    sop42: function (frm) {
        frm.set_value("sopans4", "70");
    },
    sop43: function (frm) {
        frm.set_value("sopans4", "29");
    },
    sopans4: function (frm) {
        hide_field("plate4")
        unhide_field("plate5")
    },
    sop51: function (frm) {
        frm.set_value("sopans5", "35");
    },
    sop52: function (frm) {
        frm.set_value("sopans5", "57");
    },
    sop53: function (frm) {
        frm.set_value("sopans5", "75");
    },
    sopans5: function (frm) {
        hide_field("plate5")
        unhide_field("plate6")
    },
    sop61: function (frm) {
        frm.set_value("sopans6", "5");
    },
    sop62: function (frm) {
        frm.set_value("sopans6", "6");
    },
    sop63: function (frm) {
        frm.set_value("sopans6", "2");
    },
    sopans6: function (frm) {
        hide_field("plate6")
        unhide_field("plate7")
    },
    sop71: function (frm) {
        frm.set_value("sopans7", "8");
    },
    sop72: function (frm) {
        frm.set_value("sopans7", "5");
    },
    sop73: function (frm) {
        frm.set_value("sopans7", "3");
    },
    sopans7: function (frm) {
        hide_field("plate7")
        unhide_field("plate8")
    },
    sop81: function (frm) {
        frm.set_value("sopans8", "17");
    },
    sop82: function (frm) {
        frm.set_value("sopans8", "15");
    },
    sop83: function (frm) {
        frm.set_value("sopans8", "12");
    },
    sopans8: function (frm) {
        hide_field("plate8")
        unhide_field("plate9")
    },
    sop91: function (frm) {
        frm.set_value("sopans9", "74");
    },
    sop92: function (frm) {
        frm.set_value("sopans9", "21");
    },
    sop93: function (frm) {
        frm.set_value("sopans9", "64");
    },
    sopans9: function (frm) {
        hide_field("plate9")
        unhide_field("plate10")
    },
    sop101: function (frm) {
        frm.set_value("sopans10", "3");
    },
    sop102: function (frm) {
        frm.set_value("sopans10", "4");
    },
    sop103: function (frm) {
        frm.set_value("sopans10", "2");
    },
    sopans10: function (frm) {
        hide_field("plate10")
        unhide_field("plate11")
    },
    sop111: function (frm) {
        frm.set_value("sopans11", "6");
    },
    sop112: function (frm) {
        frm.set_value("sopans11", "8");
    },
    sop113: function (frm) {
        frm.set_value("sopans11", "2");
    },
    sopans11: function (frm) {
        hide_field("plate11")
        unhide_field("plate12")
    },
    sop121: function (frm) {
        frm.set_value("sopans12", "27");
    },
    sop122: function (frm) {
        frm.set_value("sopans12", "37");
    },
    sop123: function (frm) {
        frm.set_value("sopans12", "97");
    },
    sopans12: function (frm) {
        hide_field("plate12")
        unhide_field("plate13")
    },
    sop131: function (frm) {
        frm.set_value("sopans13", "45");
    },
    sop132: function (frm) {
        frm.set_value("sopans13", "46");
    },
    sop133: function (frm) {
        frm.set_value("sopans13", "49");
    },
    sopans13: function (frm) {
        hide_field("plate13")
        unhide_field("plate14")
    },
    sop141: function (frm) {
        frm.set_value("sopans14", "2");
    },
    sop142: function (frm) {
        frm.set_value("sopans14", "5");
    },
    sop143: function (frm) {
        frm.set_value("sopans14", "6");
    },
    sopans14: function (frm) {
        hide_field("plate14")
        unhide_field("plate15")
    },
    sop151: function (frm) {
        frm.set_value("sopans15", "4");
    },
    sop152: function (frm) {
        frm.set_value("sopans15", "7");
    },
    sop153: function (frm) {
        frm.set_value("sopans15", "6");
    },
    sopans15: function (frm) {
        hide_field("plate15")
        unhide_field("plate16")
    },
    sop161: function (frm) {
        frm.set_value("sopans16", "18");
    },
    sop162: function (frm) {
        frm.set_value("sopans16", "19");
    },
    sop163: function (frm) {
        frm.set_value("sopans16", "16");
    },
    sopans16: function (frm) {
        hide_field("plate16")
        unhide_field("plate17")
    },
    sop171: function (frm) {
        frm.set_value("sopans17", 14);
    },
    sop172: function (frm) {
        frm.set_value("sopans17", 73);
    },
    sop173: function (frm) {
        frm.set_value("sopans17", "23");
    },
    sopans17: function (frm) {
        hide_field("plate17")
        unhide_field("plate18")
    },
    sop181: function (frm) {
        frm.set_value("sopans18", "48");
    },
    sop182: function (frm) {
        frm.set_value("sopans18", "nothing");
    },
    sop183: function (frm) {
        frm.set_value("sopans18", "5");
    },
    sopans18: function (frm) {
        hide_field("plate18")
        unhide_field("plate19")
    },
    sop191: function (frm) {
        frm.set_value("sopans19", "2");
    },
    sop192: function (frm) {
        frm.set_value("sopans19", "56");
    },
    sop193: function (frm) {
        frm.set_value("sopans19", "nothing");
    },
    sopans19: function (frm) {
        hide_field("plate19")
        unhide_field("plate20")
    },
    sop201: function (frm) {
        frm.set_value("sopans20", "nothing");
    },
    sop202: function (frm) {
        frm.set_value("sopans20", "45");
    },
    sop203: function (frm) {
        frm.set_value("sopans20", "53");
    },
    sopans20: function (frm) {
        hide_field("plate20")
        unhide_field("plate21")
    },
    sop211: function (frm) {
        frm.set_value("sopans21", "nothing");
    },
    sop212: function (frm) {
        frm.set_value("sopans21", "73");
    },
    sop213: function (frm) {
        frm.set_value("sopans21", "54");
    },
    sopans21: function (frm) {
        hide_field("plate21")
        unhide_field("plate22")
    },
    sop221: function (frm) {
        frm.set_value("sopans22", "6");
    },
    sop222: function (frm) {
        frm.set_value("sopans22", "2");
    },
    sop223: function (frm) {
        frm.set_value("sopans22", "26");
    },
    sopans22: function (frm) {
        hide_field("plate22")
        unhide_field("plate23")
    },
    sop231: function (frm) {
        frm.set_value("sopans23", "2");
    },
    sop232: function (frm) {
        frm.set_value("sopans23", "42");
    },
    sop233: function (frm) {
        frm.set_value("sopans23", "4");
    },
    sopans23: function (frm) {
        hide_field("plate23")
        unhide_field("plate24")
    },
    sop241: function (frm) {
        frm.set_value("sopans24", "35");
    },
    sop242: function (frm) {
        frm.set_value("sopans24", "5");
    },
    sop243: function (frm) {
        frm.set_value("sopans24", "3");
    },
    sopans24: function (frm) {
        hide_field("plate24")
        unhide_field("plate25")
    },
    sop251: function (frm) {
        frm.set_value("sopans25", "9");
    },
    sop252: function (frm) {
        frm.set_value("sopans25", "6");
    },
    sop253: function (frm) {
        frm.set_value("sopans25", "96");
    },
    sopans25: function (frm) {
        hide_field("plate25")
        unhide_field("plate26")
    },
    sop261: function (frm) {
        frm.set_value("sopans26", "nothing");
    },
    sop262: function (frm) {
        frm.set_value("sopans26", "only the purple line");
    },
    sop263: function (frm) {
        frm.set_value("sopans26", "26");
    },
    sopans26: function (frm) {
        hide_field("plate26")
        unhide_field("plate27")
    },
    sop271: function (frm) {
        frm.set_value("sopans27", "only the red line");
    },
    sop272: function (frm) {
        frm.set_value("sopans27", "only purple & red spot");
    },
    sop273: function (frm) {
        frm.set_value("sopans27", "only the purple line");
    },
    sopans27: function (frm) {
        hide_field("plate27")
        unhide_field("plate28")
    },
    sop281: function (frm) {
        frm.set_value("sopans28", "8");
    },
    sop282: function (frm) {
        frm.set_value("sopans28", "nothing");
    },
    sop283: function (frm) {
        frm.set_value("sopans28", "2");
    },
    sopans28: function (frm) {
        hide_field("plate28")
        unhide_field("plate29")
    },
    sop291: function (frm) {
        frm.set_value("sopans29", "nothing");
    },
    sop292: function (frm) {
        frm.set_value("sopans29", "only the red line");
    },
    sop293: function (frm) {
        frm.set_value("sopans29", "only the purple line");
    },
    sopans29: function (frm) {
        hide_field("plate29")
        unhide_field("plate30")
    },
    sop301: function (frm) {
        frm.set_value("sopans30", "a line green");
    },
    sop302: function (frm) {
        frm.set_value("sopans30", "nothing");
    },
    sop303: function (frm) {
        frm.set_value("sopans30", "blue green line");
    },
    sopans30: function (frm) {
        hide_field("plate30")
        unhide_field("plate31")
    },
    sop311: function (frm) {
        frm.set_value("sopans31", "red green line");
    },
    sop312: function (frm) {
        frm.set_value("sopans31", "nothing");
    },
    sop313: function (frm) {
        frm.set_value("sopans31", "blue green line");
    },
    sopans31: function (frm) {
        hide_field("plate31")
        unhide_field("plate32")
    },
    sop321: function (frm) {
        frm.set_value("sopans32", "orange line");
    },
    sop322: function (frm) {
        frm.set_value("sopans32", "nothing");
    },
    sop323: function (frm) {
        frm.set_value("sopans32", "red line");
    },
    sopans32: function (frm) {
        hide_field("plate32")
        unhide_field("plate33")
    },
    sop331: function (frm) {
        frm.set_value("sopans33", "nothing");
    },
    sop332: function (frm) {
        frm.set_value("sopans33", "orange line");
    },
    sop333: function (frm) {
        frm.set_value("sopans33", "false line");
    },
    sopans33: function (frm) {
        hide_field("plate33")
        unhide_field("plate34")
    },
    sop341: function (frm) {
        frm.set_value("sopans34", "red-green and violet line");
    },
    sop342: function (frm) {
        frm.set_value("sopans34", "blue-red line");
    },
    sop343: function (frm) {
        frm.set_value("sopans34", "blue-green and yellow-green line");
    },
    sopans34: function (frm) {
        hide_field("plate34")
        unhide_field("plate35")
    },
    sop351: function (frm) {
        frm.set_value("sopans35", "blue-green and yellow-green line");
    },
    sop352: function (frm) {
        frm.set_value("sopans35", "blue-green and violet");
    },
    sop353: function (frm) {
        frm.set_value("sopans35", "nothing");
    },
    sopans35: function (frm) {
        hide_field("plate35")
        unhide_field("plate36")
    },
    sop361: function (frm) {
        frm.set_value("sopans36", "blue-green & violet line");
    },
    sop362: function (frm) {
        frm.set_value("sopans36", "nothing");
    },
    sop363: function (frm) {
        frm.set_value("sopans36", "violet & orange line");
    },
    sopans36: function (frm) {
        hide_field("plate36")
        unhide_field("plate37")
    },
    sop371: function (frm) {
        frm.set_value("sopans37", "nothing");
    },
    sop372: function (frm) {
        frm.set_value("sopans37", "blue-green and violet");
    },
    sop373: function (frm) {
        frm.set_value("sopans37", "violet and orange line");
    },
    sopans37: function (frm) {
        hide_field("plate37")
        unhide_field("plate38")
    },
    sop381: function (frm) {
        frm.set_value("sopans38", "nothing");
    },
    sop382: function (frm) {
        frm.set_value("sopans38", "Everyone should see the same (red) line");
    },
    sop383: function (frm) {
        frm.set_value("sopans38", "see the same (green) line");
    },
    sopans38: function (frm) {
        hide_field("plate38")
        hide_field("plate1")
    },
    validate: function (frm) {
        var score = 0;
        if (frm.doc.sopans1 == '12') {
            score += 1
        }
        if (frm.doc.sopans2 == '8') {
            score += 1
        }
        if (frm.doc.sopans3 == '6') {
            score += 1
        }
        if (frm.doc.sopans4 == '29') {
            score += 1
        }
        if (frm.doc.sopans5 == '57') {
            score += 1
        }
        if (frm.doc.sopans6 == '5') {
            score += 1
        }
        if (frm.doc.sopans7 == '3') {
            score += 1
        }
        if (frm.doc.sopans8 == '15') {
            score += 1
        }
        if (frm.doc.sopans9 == '74') {
            score += 1
        }
        if (frm.doc.sopans10 == '2') {
            score += 1
        }
        if (frm.doc.sopans11 == '6') {
            score += 1
        }
        if (frm.doc.sopans12 == '97') {
            score += 1
        }
        if (frm.doc.sopans13 == '45') {
            score += 1
        }
        if (frm.doc.sopans14 == '5') {
            score += 1
        }
        if (frm.doc.sopans15 == '7') {
            score += 1
        }
        if (frm.doc.sopans16 == '16') {
            score += 1
        }
        if (frm.doc.sopans17 == '73') {
            score += 1
        }
        if (frm.doc.sopans18 == 'nothing ') {
            score += 1
        }
        if (frm.doc.sopans19 == 'nothing') {
            score += 1
        }
        if (frm.doc.sopans20 == 'nothing') {
            score += 1
        }
        if (frm.doc.sopans21 == 'nothing') {
            score += 1
        }
        if (frm.doc.sopans22 == '26') {
            score += 1
        }
        if (frm.doc.sopans23 == '42') {
            score += 1
        }
        if (frm.doc.sopans24 == '35') {
            score += 1
        }
        if (frm.doc.sopans25 == '96') {
            score += 1
        }
        if (frm.doc.sopans26 == 'nothing') {
            score += 1
        }
        if (frm.doc.sopans27 == 'only purple & red spot') {
            score += 1
        } if (frm.doc.sopans28 == 'nothing ') {
            score += 1
        } if (frm.doc.sopans29 == 'nothing') {
            score += 1
        }
        if (frm.doc.sopans30 == 'blue green line') {
            score += 1
        }
        if (frm.doc.sopans31 == 'blue green line') {
            score += 1
        }
        if (frm.doc.sopans32 == 'orange line') {
            score += 1
        }
        if (frm.doc.sopans33 == 'orange line') {
            score += 1
        }
        if (frm.doc.sopans34 == 'blue-green and yellow-green line') {
            score += 1
        }
        if (frm.doc.sopans35 == 'blue-green and yellow-green line') {
            score += 1
        }
        if (frm.doc.sopans36 == 'violet & orange line') {
            score += 1
        }
        if (frm.doc.sopans37 == 'violet and orange line') {
            score += 1
        }
        if (frm.doc.sopans38 == 'Everyone should see the same (red) line') {
            score += 1
        }
        frm.set_value('total_score',score)
    },
    total_score:function(frm){
        if(frm.doc.total_score > 17){
            frm.set_value('result','Can Consider for Work')
        }
        else if(frm.doc.total_score > 14 && frm.doc.total_score < 16){
            frm.set_value('result','Conditionaly Accepted')
        }
        else{
            frm.set_value('result','Not fit for Work')
        }
        frm.save();
    }

})