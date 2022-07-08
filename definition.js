Blockly.Blocks['mq_get_ppm'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "đọc giá trị nồng độ ppm chân %1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "NAME",
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
  
  Blockly.Python['mq_get_ppm'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_mq'] = 'from mq import MQ';
    Blockly.Python.definitions_["import_create_mq"] = 'mq = MQ(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = 'mq.get_ppm()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Blocks['mq_get_acohol'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "đọc giá trị nồng độ cồn chân %1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "NAME",
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
            }
          ],
          "output": null,
          "colour": "#6642bf",
          "helpUrl": ""
        }
      );
    },
    getDeveloperVars: function() {
      return ['mq3'];
    }
    
  };
  
  Blockly.Python['mq_get_acohol'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_mq'] = 'from mq import MQ';
    Blockly.Python.definitions_["import_create_mq"] = 'mq = MQ(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = "'{:.3f}'.format(mq.get_acohol())";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
