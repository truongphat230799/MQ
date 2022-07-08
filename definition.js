Blockly.Blocks['mq_get_data'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "đọc giá trị cảm biến chân %1 theo đơn vị %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "pin",
              "options": [
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ]
              ]
            },
            {
                "type": "field_dropdown",
                "name": "param",
                "option": [
                    [
                        "ppm",
                        "PPM"
                    ],
                    [
                        "mg/l",
                        "MG/L"
                    ]
                ]

            }
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
    var dropdown_data = block.getFieldValue('param')
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_mq3'] = 'from mq3 import MQ3';
    Blockly.Python.definitions_["import_create_mq3"] = 'mq = MQ(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = '';
    if (dropdown_data == 'PPM')
        code = "mq.get_ppm()";
    else
        code = "'{:.3f}'.format(mq.get_acohol())";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };


  
