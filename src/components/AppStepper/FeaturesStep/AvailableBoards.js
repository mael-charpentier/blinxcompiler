const availableBoardChipTypes = [
  { name: 'esp32', description: '', tooltip: '' },
];

const availableBoards = [
  // C3
  {
    name: 'esp32c3',
    chip_type: 'esp32',
    description: 'BLINX',
    default: true,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32_base',
      board: 'esp32c3',
      build_unflags:
        // eslint-disable-next-line
        '{env:tasmota32_base.build_unflags} -flto -mtarget-align',
      build_flags:
        // eslint-disable-next-line
        '${env:tasmota32_base.build_flags} -fno-lto',
      // eslint-disable-next-line
      lib_extra_dirs: ['${env:tasmota32_base.lib_extra_dirs}'],
      lib_ignore: ['TTGO TWatch Library', 'epdiy', 'Micro-RTSP', 'mp3_shine_esp32'],
    },
    platformio_env_name: 'tasmota32c3',
    tooltip: '',
    include_features: ['blinx'],
    exclude_features: [],
    defines: {},
  }
];

export { availableBoardChipTypes, availableBoards };
