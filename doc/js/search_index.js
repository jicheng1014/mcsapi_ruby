var search_data = {"index":{"searchIndex":["apitest","base","client","object","_request()","change_instance_type()","create_instance()","create_template()","delete_key_pair()","delete_template()","describe_instance_status()","describe_instance_types()","describe_instance_volumes()","describe_instances()","describe_key_pairs()","describe_network_interfaces()","describe_templates()","get_balance()","get_instance_contract_info()","get_instance_metadata()","get_password_data()","get_signature()","import_key_pair()","new()","new()","parse_array_params()","put_instance_metadata()","raw_request()","reboot_instance()","rebuild_instance_root_image()","renew_instance()","request()","setup()","sha256_hmac()","start_instance()","stop_instance()","string_to_sign()","teardown()","terminate_instance()","test_change_instance_type()","test_create_instance()","test_create_template()","test_delete_key_pair()","test_delete_template()","test_describe_instance_status()","test_describe_instance_types()","test_describe_instance_volumes()","test_describe_instances()","test_describe_key_pairs()","test_describe_network_interfaces()","test_describe_templates()","test_get_balance()","test_get_instance_contract_info()","test_get_instance_metadata()","test_get_password_data()","test_import_key_pair()","test_put_instance_metadata()","test_reboot_instance()","test_rebuild_instance_root_image()","test_rebuild_instance_root_image1()","test_renew_instance()","test_renew_instance1()","test_start_instance()","test_stop_instance()","test_terminate_instance()","gemfile","gemfile.lock","readme"],"longSearchIndex":["apitest","base","client","object","base#_request()","client#change_instance_type()","client#create_instance()","client#create_template()","client#delete_key_pair()","client#delete_template()","client#describe_instance_status()","client#describe_instance_types()","client#describe_instance_volumes()","client#describe_instances()","client#describe_key_pairs()","client#describe_network_interfaces()","client#describe_templates()","client#get_balance()","client#get_instance_contract_info()","client#get_instance_metadata()","client#get_password_data()","base#get_signature()","client#import_key_pair()","base::new()","client::new()","base#parse_array_params()","client#put_instance_metadata()","base#raw_request()","client#reboot_instance()","client#rebuild_instance_root_image()","client#renew_instance()","base#request()","apitest#setup()","base#sha256_hmac()","client#start_instance()","client#stop_instance()","base#string_to_sign()","apitest#teardown()","client#terminate_instance()","apitest#test_change_instance_type()","apitest#test_create_instance()","apitest#test_create_template()","apitest#test_delete_key_pair()","apitest#test_delete_template()","apitest#test_describe_instance_status()","apitest#test_describe_instance_types()","apitest#test_describe_instance_volumes()","apitest#test_describe_instances()","apitest#test_describe_key_pairs()","apitest#test_describe_network_interfaces()","apitest#test_describe_templates()","apitest#test_get_balance()","apitest#test_get_instance_contract_info()","apitest#test_get_instance_metadata()","apitest#test_get_password_data()","apitest#test_import_key_pair()","apitest#test_put_instance_metadata()","apitest#test_reboot_instance()","apitest#test_rebuild_instance_root_image()","apitest#test_rebuild_instance_root_image1()","apitest#test_renew_instance()","apitest#test_renew_instance1()","apitest#test_start_instance()","apitest#test_stop_instance()","apitest#test_terminate_instance()","","",""],"info":[["ApiTest","","ApiTest.html","","<p>此文档为client对应测试文档，遵循Ruby单元测试框架协议编写\n"],["Base","","Base.html","",""],["Client","","Client.html","","<p>基类函数为Base，sdk的实现类\n"],["Object","","Object.html","",""],["_request","Base","Base.html#method-i-_request","(action, *kwargs)","<p>处理请求函数\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["change_instance_type","Client","Client.html#method-i-change_instance_type","(iid, itype, duration=nil, datadisk=nil, bandwidth=nil)","<p>更改虚拟机类型\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] itype  指定更改的虚拟机类型\n"],["create_instance","Client","Client.html#method-i-create_instance","(imageid, itype, duration=nil, name=nil, keypair=nil, datadisk=nil, bandwidth=nil)","<p>创建虚拟机,创建时要提供datadisk和bandwidth参数\n<p>@param [String] imageid 系统模板ID\n<p>@param [String] itype 虚拟机类型ID  例如 C4_M4 …\n"],["create_template","Client","Client.html#method-i-create_template","(iid, name, notes=nil)","<p>保存虚拟机的模板\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] name 模板名称\n"],["delete_key_pair","Client","Client.html#method-i-delete_key_pair","(kid)","<p>删除一个SSH密钥对\n<p>@param [String] kid 密钥对ID\n\n"],["delete_template","Client","Client.html#method-i-delete_template","(tid)","<p>删除一个模板\n<p>@param [String] tid 模板ID\n\n"],["describe_instance_status","Client","Client.html#method-i-describe_instance_status","(iid)","<p>获取虚拟机的状态\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash] 虚拟机状态\n"],["describe_instance_types","Client","Client.html#method-i-describe_instance_types","(limit=0, offset=0, filters=nil)","<p>获取所有虚拟机类型\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["describe_instance_volumes","Client","Client.html#method-i-describe_instance_volumes","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的虚拟磁盘信息\n<p>@param [String] iid  虚拟机ID\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n"],["describe_instances","Client","Client.html#method-i-describe_instances","(ids=nil, names=nil, limit=0, offset=0, filters=nil)","<p>获得所有虚拟机\n<p>@param [Array] ids 期望获取的虚拟机ID列表\n<p>@param [Array] names 期望获取信息的虚拟机名称列表\n"],["describe_key_pairs","Client","Client.html#method-i-describe_key_pairs","(limit=0, offset=0, filters=nil)","<p>获取用户的SSH密钥对\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n<p>@param [Integer] offset 返回偏移量，用于分页控制\n"],["describe_network_interfaces","Client","Client.html#method-i-describe_network_interfaces","(iid, limit=0, offset=0, filters=nil)","<p>获取指定虚拟机的网络接口（虚拟网卡）信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [Integer] limit 最大返回数量，用于分页控制\n"],["describe_templates","Client","Client.html#method-i-describe_templates","()","<p>获得所有虚拟机模板\n<p>@return [Hash] 模板列表\n\n"],["get_balance","Client","Client.html#method-i-get_balance","()","<p>获取帐户余额和最近更新时间\n<p>@return [Hash] 帐户余额和最近更新时间\n\n"],["get_instance_contract_info","Client","Client.html#method-i-get_instance_contract_info","(iid)","<p>获取虚拟机的租期信息\n<p>@param [String] iid\n<p>@return [Hash]  虚拟机租期信息，包含过期时间、自动删除时间\n"],["get_instance_metadata","Client","Client.html#method-i-get_instance_metadata","(iid)","<p>获取虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@return [Hash]  一个hash,包含虚拟机所有metadata的key/value\n"],["get_password_data","Client","Client.html#method-i-get_password_data","(iid, key_file=nil)","<p>获取虚拟机的Login帐户信息\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] key_file 私钥文件路径，如果虚拟机使用了SSH密钥，需要指定私钥解密password …\n"],["get_signature","Base","Base.html#method-i-get_signature","(params)","<p>亚马逊签名函数\n<p>@param [Hash] params  签名参数\n<p>@return [String]  签名处理结果\n"],["import_key_pair","Client","Client.html#method-i-import_key_pair","(name, pubkey)","<p>导入一个用户的SSH公钥，并创建一个SSH密钥对\n<p>@param [String] name 密钥对名称\n<p>@param [String] pubkey SSH公钥信息\n"],["new","Base","Base.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>基类初始化函数\n<p>@param [String] access\n<p>@param [String] secret\n"],["new","Client","Client.html#method-c-new","(access, secret, url, format='xml', timeout=300, debug=false)","<p>构造函数，实现继承基类函数\n"],["parse_array_params","Base","Base.html#method-i-parse_array_params","(limit, offset, filters, kwargs)","<p>结果格式化函数\n<p>@param [Integer] limit  最大返回数量，用于分页控制\n<p>@param [Integer] offset  返回偏移量，用于分页控制\n"],["put_instance_metadata","Client","Client.html#method-i-put_instance_metadata","(iid, data)","<p>修改虚拟机的metadata\n<p>@param [String] iid 虚拟机ID\n<p>@param [Hash] data  需要增加或修改的metadata信息\n"],["raw_request","Base","Base.html#method-i-raw_request","(action, *kwargs)",""],["reboot_instance","Client","Client.html#method-i-reboot_instance","(iid)","<p>重启虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["rebuild_instance_root_image","Client","Client.html#method-i-rebuild_instance_root_image","(iid, image_id=nil)","<p>重置虚拟机系统磁盘\n<p>@param [String] iid 虚拟机ID\n<p>@param [String] image_id 将虚拟机系统磁盘用指定镜像模板重置，如果无该参数，则使用原镜像模板重置\n"],["renew_instance","Client","Client.html#method-i-renew_instance","(iid, duration=nil)","<p>虚拟机租期续费\n<p>@param [String] iid\n<p>@param [String] duration 续费租期，缺省为&#39;1M&#39;，即一个月\n"],["request","Base","Base.html#method-i-request","(action, *kwargs)","<p>请求/响应函数，核心处理由_request函数实现\n<p>@param [String] action  函数名\n<p>@param [Hash] kwargs  函数调用参数\n"],["setup","ApiTest","ApiTest.html#method-i-setup","()","<p>Called before every test method runs. Can be used to set up fixture\ninformation.\n"],["sha256_hmac","Base","Base.html#method-i-sha256_hmac","(value)","<p>sha256算法实现\n<p>@param [String] value 加密内容\n<p>@return [String]  加密结果\n"],["start_instance","Client","Client.html#method-i-start_instance","(iid)","<p>启动虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["stop_instance","Client","Client.html#method-i-stop_instance","(iid, force=false)","<p>停止虚拟机\n<p>@param [String] iid 虚拟机ID\n<p>@param [Symbol] force 是否强制停止虚拟机\n"],["string_to_sign","Base","Base.html#method-i-string_to_sign","(cred_dict, params)","<p>字符串格式化函数\n<p>@param [Hash] cred_dict 认证信息\n<p>@param [Hash] params 认证参数\n"],["teardown","ApiTest","ApiTest.html#method-i-teardown","()","<p>Called after every test method runs. Can be used to tear down fixture\ninformation.\n"],["terminate_instance","Client","Client.html#method-i-terminate_instance","(iid)","<p>删除虚拟机\n<p>@param [String] iid 虚拟机ID\n\n"],["test_change_instance_type","ApiTest","ApiTest.html#method-i-test_change_instance_type","()","<p>省略datadisk和bandwidth参数无法成功修改\n<p>下面是Python climos 命令格式\n<p>usage: climos ChangeInstanceType [–duration &lt;DURATION&gt;] …\n"],["test_create_instance","ApiTest","ApiTest.html#method-i-test_create_instance","()","<p>省略datadisk、bandwidth无法创建，因为每次创建虚机id不同，assert_equal无法为真，只要创建成功即可\n"],["test_create_template","ApiTest","ApiTest.html#method-i-test_create_template","()",""],["test_delete_key_pair","ApiTest","ApiTest.html#method-i-test_delete_key_pair","()",""],["test_delete_template","ApiTest","ApiTest.html#method-i-test_delete_template","()",""],["test_describe_instance_status","ApiTest","ApiTest.html#method-i-test_describe_instance_status","()",""],["test_describe_instance_types","ApiTest","ApiTest.html#method-i-test_describe_instance_types","()",""],["test_describe_instance_volumes","ApiTest","ApiTest.html#method-i-test_describe_instance_volumes","()",""],["test_describe_instances","ApiTest","ApiTest.html#method-i-test_describe_instances","()",""],["test_describe_key_pairs","ApiTest","ApiTest.html#method-i-test_describe_key_pairs","()",""],["test_describe_network_interfaces","ApiTest","ApiTest.html#method-i-test_describe_network_interfaces","()",""],["test_describe_templates","ApiTest","ApiTest.html#method-i-test_describe_templates","()",""],["test_get_balance","ApiTest","ApiTest.html#method-i-test_get_balance","()",""],["test_get_instance_contract_info","ApiTest","ApiTest.html#method-i-test_get_instance_contract_info","()",""],["test_get_instance_metadata","ApiTest","ApiTest.html#method-i-test_get_instance_metadata","()",""],["test_get_password_data","ApiTest","ApiTest.html#method-i-test_get_password_data","()",""],["test_import_key_pair","ApiTest","ApiTest.html#method-i-test_import_key_pair","()",""],["test_put_instance_metadata","ApiTest","ApiTest.html#method-i-test_put_instance_metadata","()",""],["test_reboot_instance","ApiTest","ApiTest.html#method-i-test_reboot_instance","()",""],["test_rebuild_instance_root_image","ApiTest","ApiTest.html#method-i-test_rebuild_instance_root_image","()",""],["test_rebuild_instance_root_image1","ApiTest","ApiTest.html#method-i-test_rebuild_instance_root_image1","()",""],["test_renew_instance","ApiTest","ApiTest.html#method-i-test_renew_instance","()",""],["test_renew_instance1","ApiTest","ApiTest.html#method-i-test_renew_instance1","()",""],["test_start_instance","ApiTest","ApiTest.html#method-i-test_start_instance","()",""],["test_stop_instance","ApiTest","ApiTest.html#method-i-test_stop_instance","()",""],["test_terminate_instance","ApiTest","ApiTest.html#method-i-test_terminate_instance","()",""],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>gem &#39;crack&#39;, &#39;~&gt; 0.4.2&#39; gem &#39;test-unit&#39;\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  crack (0.4.2)\n    safe_yaml (~&gt; 1.0.0)\n  safe_yaml (1.0.4) ...</pre>\n"],["README","","README_md.html","","<p>MOSAPI_RUBY\n<p><strong>编码规范参照 github.com/bbatsov/rubocop</strong>\n<p>1. 工程结构说明\n"]]}}