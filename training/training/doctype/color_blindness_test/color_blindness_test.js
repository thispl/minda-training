// Copyright (c) 2019, Ramya and contributors
// For license information, please see license.txt

frappe.ui.form.on("Color Blindness Test", {
    employee_code: function (frm) {
        frappe.call({
            "method": "frappe.client.get",
            args: {
                "doctype": "Employee",
                "name": frm.doc.employee_code
            },
            callback: function (r) {
                frm.set_value("status", r.message.status)
                frm.set_value("date_of_joining", r.message.date_of_joining)
            }
        })
    },
    date_of_evaluation: function (frm) {
        if (frm.doc.date_of_evaluation) {
            var c = frappe.datetime.get_diff(frappe.datetime.nowdate(), frm.doc.date_of_evaluation)
            if (c < 0) {
                frappe.msgprint({
                    title: __('Notification'),
                    indicator: 'red',
                    message: __('Date of Evaluation Cannot be Future Date')
                })
                frm.set_value("date_of_evaluation","")
            }
        }
    },
    refresh(frm){
        $(cur_frm.fields_dict.sop11.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop12.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop13.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop21.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop22.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop23.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop31.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop32.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop33.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop41.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop42.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop43.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop51.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop52.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop53.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop61.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop62.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop63.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop71.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop72.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop73.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop81.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop82.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop83.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop91.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop92.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop93.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop101.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop102.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop103.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop111.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop112.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop113.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop121.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop122.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop123.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop131.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop132.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop133.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop141.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop142.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop143.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop151.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop152.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop153.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop161.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop162.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop163.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop171.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop172.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop173.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop181.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop182.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop183.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop191.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop192.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop193.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop201.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop202.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop203.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop211.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop212.input).css("zoom", "2");
        $(cur_frm.fields_dict.sop213.input).css("zoom", "2");

        $(cur_frm.fields_dict.sop11.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop12.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop13.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop21.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop22.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop23.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop31.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop32.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop33.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop41.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop42.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop43.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop51.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop52.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop53.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop61.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop62.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop63.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop71.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop72.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop73.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop81.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop82.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop83.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop91.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop92.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop93.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop101.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop102.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop103.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop111.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop112.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop113.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop121.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop122.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop123.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop131.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop132.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop133.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop141.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop142.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop143.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop151.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop152.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop153.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop161.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop162.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop163.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop171.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop172.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop173.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop181.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop182.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop183.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop191.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop192.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop193.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop201.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop202.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop203.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop211.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop212.input).css("borderColor", "blue");
        $(cur_frm.fields_dict.sop213.input).css("borderColor", "blue");
        
    },
    onload: function (frm) {
        hide_field(["plate2", "plate3", "plate4", "plate5", "plate6", "plate7", "plate8", "plate9", "plate10", "plate11", "plate12", "plate13", "plate14", "plate15", "plate16", "plate17", "plate18", "plate19", "plate20", "plate21"])
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
        frm.set_value("sopans11", "26");
    },
    sop112: function (frm) {
        frm.set_value("sopans11", "6");
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
        hide_field(["plate21", "plate1"])
    },

    validate: function (frm) {
        var score = 0;
        if (frm.doc.sopans1 == '12') {
            score += 1
            frm.set_value("checkans1", 1)
        }
        if (frm.doc.sopans2 == '8') {
            score += 1
            frm.set_value("checkans2", 1)
        }
        if (frm.doc.sopans3 == '6') {
            score += 1
            frm.set_value("checkans3", 1)
        }
        if (frm.doc.sopans4 == '29') {
            score += 1
            frm.set_value("checkans4", 1)
        }
        if (frm.doc.sopans5 == '57') {
            score += 1
            frm.set_value("checkans5", 1)
        }
        if (frm.doc.sopans6 == '5') {
            score += 1
            frm.set_value("checkans6", 1)
        }
        if (frm.doc.sopans7 == '3') {
            score += 1
            frm.set_value("checkans7", 1)
        }
        if (frm.doc.sopans8 == '15') {
            score += 1
            frm.set_value("checkans8", 1)
        }
        if (frm.doc.sopans9 == '74') {
            score += 1
            frm.set_value("checkans9", 1)
        }
        if (frm.doc.sopans10 == '2') {
            score += 1
            frm.set_value("checkans10", 1)
        }
        if (frm.doc.sopans11 == '6') {
            score += 1
            frm.set_value("checkans11", 1)
        }
        if (frm.doc.sopans12 == '97') {
            score += 1
            frm.set_value("checkans12", 1)
        }
        if (frm.doc.sopans13 == '45') {
            score += 1
            frm.set_value("checkans13", 1)
        }
        if (frm.doc.sopans14 == '5') {
            score += 1
            frm.set_value("checkans14", 1)
        }
        if (frm.doc.sopans15 == '7') {
            score += 1
            frm.set_value("checkans15", 1)
        }
        if (frm.doc.sopans16 == '16') {
            score += 1
            frm.set_value("checkans16", 1)
        }
        if (frm.doc.sopans17 == '73') {
            score += 1
            frm.set_value("checkans17", 1)
        }
        if (frm.doc.sopans18 == 'nothing') {
            score += 1
            frm.set_value("checkans18", 1)
        }
        if (frm.doc.sopans19 == 'nothing') {
            score += 1
            frm.set_value("checkans19", 1)
        }
        if (frm.doc.sopans20 == 'nothing') {
            score += 1
            frm.set_value("checkans20", 1)
        }
        if (frm.doc.sopans21 == 'nothing') {
            score += 1
            frm.set_value("checkans21", 1)
        }
        hide_field("plate1")
        frm.set_value('total_score', score)
    },
    total_score: function (frm) {
        if (frm.doc.total_score > 17) {
            frm.set_value('result', 'Fit for any Job')
        }
        else if (frm.doc.total_score > 14 && frm.doc.total_score < 16) {
            frm.set_value('result', 'Conditionaly Accepted')
        }
        else {
            frm.set_value('result', 'Not fit for Work')
        }
        frm.save();
    }

})