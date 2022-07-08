Blockly.Blocks['mq_get_data'] = {
    init: function() {
      this.jsonInit(
        {
          "message0": "đọc giá trị %1 cảm biến chân %2",
          "args0": [
            {
                "type": "field_dropdown",
                "name": "PARAM",
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
    ]
           
    getDeveloperVars: function() {
      return ['mq'];
    }
    
  };
  
  Blockly.Python['mq_get_data'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name = block.getFieldValue('PARAM');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_mq'] = 'from mq import MQ';
    Blockly.Python.definitions_["import_create_mq"] = 'mq = MQ(Pin(' + dropdown_name + '.adc_pin)) # analog PIN';
    // TODO: Assemble Python into code variable.
    var code = '';
    if (dropdown_data == "PPM")
      code = "mq.get_ppm()";
    else
      code = "mq.get_acohol()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

