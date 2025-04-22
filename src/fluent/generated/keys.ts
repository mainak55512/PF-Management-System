import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'fc8227bfbc85471c8de804d2b377f32d'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '2f073c6933df4dbbb5fd7870ae404f5c'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'de2f70c1ba1d46f7b0c82248b0b92ddd'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f291400f86dc47fcb8ba75d202921114'
                    }
                    x_692302_pf_manage_pf_users_PFUSR: {
                        table: 'sys_number'
                        id: '94dff14f27e1473784d157afafe2d172'
                    }
                }
            }
        }
    }
}
