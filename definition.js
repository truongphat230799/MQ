Blockly.Blocks['mq_get_data'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "đọc giá trị %1 cảm biến cổng %2",
          args0: [
            {
              type: "field_dropdown",
              name: "PARAM",
              options: [
                ["mg/l", "MG/L"],
                ["ppm", "PPM"],
                ["adc", "ADC"],
                ],
            },
            {
              "type": "field_dropdown",
              "name": "pin",
              "options": [
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ],
                [
                  "P19",
                  "pin19"
                ],
                [
                  "P20",
                  "pin20"
                ]
              ]
            },
          ],
          "output": null,
          "colour": "#6642bf",
          "helpUrl": ""
        }
      );
    },
    getDeveloperVars: function() {
      return ['mq'];
    }
    
  };
  
  Blockly.Python['mq_get_data'] = function(block) {
    var dropdown_name = block.getFieldValue('pin');
    var dropdown_data = block.getFieldValue('PARAM');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_mq'] = 'from mq import MQ';
    Blockly.Python.definitions_["import_create_mq"] = 'mq = MQ(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = "";
    if (dropdown_data == "PPM")
      code = "mq.get_ppm()";
    else if (dropdown_data == "MG/L")
      code = "mq.get_acohol()";
    else if (dropdown_data == "ADC")
      code = dropdown_name + ".read_analog()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

