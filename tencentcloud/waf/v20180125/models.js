/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateAccessExport请求参数结构体
 * @class
 */
class CreateAccessExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户要查询的日志主题ID，每个客户都有对应的一个主题
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 要查询的日志的起始时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要查询的日志的结束时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.To = null;

        /**
         * 日志导出检索语句
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出数量，最大值100w
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志导出数据格式。json，csv，默认为json
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 日志导出时间排序。desc，asc，默认为desc
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * CDC场景下负载均衡WAF的集群信息
 * @class
 */
class CdcCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * cdc的集群id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * cdc的集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeIpHitItems返回参数结构体
 * @class
 */
class DescribeIpHitItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpHitItemsData || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new IpHitItemsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserCdcClbWafRegions请求参数结构体
 * @class
 */
class DescribeUserCdcClbWafRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 封装参数
 * @class
 */
class IpHitItemsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数组封装
         * @type {Array.<IpHitItem> || null}
         */
        this.Res = null;

        /**
         * 总数目
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Res) {
            this.Res = new Array();
            for (let z in params.Res) {
                let obj = new IpHitItem();
                obj.deserialize(params.Res[z]);
                this.Res.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DeleteAttackDownloadRecord返回参数结构体
 * @class
 */
class DeleteAttackDownloadRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowTrend请求参数结构体
 * @class
 */
class DescribeFlowTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要获取流量趋势的域名, all表示所有域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 起始时间戳，精度秒
         * @type {number || null}
         */
        this.StartTs = null;

        /**
         * 结束时间戳，精度秒
         * @type {number || null}
         */
        this.EndTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTs = 'StartTs' in params ? params.StartTs : null;
        this.EndTs = 'EndTs' in params ? params.EndTs : null;

    }
}

/**
 * DescribeWafAutoDenyStatus请求参数结构体
 * @class
 */
class DescribeWafAutoDenyStatusRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 日志KeyValue对数组，用于搜索访问日志
 * @class
 */
class AccessLogItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分析结果返回的KV数据对
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessLogItem> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AccessLogItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeWafAutoDenyRules返回参数结构体
 * @class
 */
class DescribeWafAutoDenyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击次数阈值
         * @type {number || null}
         */
        this.AttackThreshold = null;

        /**
         * 攻击时间阈值
         * @type {number || null}
         */
        this.TimeThreshold = null;

        /**
         * 自动封禁时间
         * @type {number || null}
         */
        this.DenyTimeThreshold = null;

        /**
         * 自动封禁状态
         * @type {number || null}
         */
        this.DefenseStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackThreshold = 'AttackThreshold' in params ? params.AttackThreshold : null;
        this.TimeThreshold = 'TimeThreshold' in params ? params.TimeThreshold : null;
        this.DenyTimeThreshold = 'DenyTimeThreshold' in params ? params.DenyTimeThreshold : null;
        this.DefenseStatus = 'DefenseStatus' in params ? params.DefenseStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIpAccessControl返回参数结构体
 * @class
 */
class DescribeIpAccessControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpAccessControlData || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new IpAccessControlData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 负载均衡算法
 * @class
 */
class LoadBalancerPackageNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 负载均衡id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 地区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 接入IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 接入端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPCID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NumericalVpcId = null;

        /**
         * CLB类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NumericalVpcId = 'NumericalVpcId' in params ? params.NumericalVpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * instance列表
         * @type {Array.<InstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainWhiteRule请求参数结构体
 * @class
 */
class ModifyDomainWhiteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要更改的规则的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 白名单id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 规则的id列表
         * @type {Array.<number> || null}
         */
        this.Rules = null;

        /**
         * 规则匹配路径
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 规则匹配方法
         * @type {string || null}
         */
        this.Function = null;

        /**
         * 规则的开关状态
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Rules = 'Rules' in params ? params.Rules : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Function = 'Function' in params ? params.Function : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeAccessIndex接口的出参
 * @class
 */
class AccessRuleTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 标签索引配置中的字段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessKeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new AccessKeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * DescribeAccessIndex请求参数结构体
 * @class
 */
class DescribeAccessIndexRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 域名的详细信息
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名ID
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * cname地址
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 实例类型
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 日志包
         * @type {number || null}
         */
        this.ClsStatus = null;

        /**
         * clb模式
         * @type {number || null}
         */
        this.FlowMode = null;

        /**
         * waf开关
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 防御模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * AI防御模式
         * @type {number || null}
         */
        this.Engine = null;

        /**
         * CC列表
         * @type {Array.<string> || null}
         */
        this.CCList = null;

        /**
         * 回源ip
         * @type {Array.<string> || null}
         */
        this.RsList = null;

        /**
         * 服务端口配置
         * @type {Array.<PortInfo> || null}
         */
        this.Ports = null;

        /**
         * 负载均衡器
         * @type {Array.<LoadBalancerPackageNew> || null}
         */
        this.LoadBalancerSet = null;

        /**
         * 用户id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * clb状态
         * @type {number || null}
         */
        this.State = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 0关闭 1开启
         * @type {number || null}
         */
        this.Ipv6Status = null;

        /**
         * 0关闭 1开启
         * @type {number || null}
         */
        this.BotStatus = null;

        /**
         * 版本信息
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 是否开启投递CLS功能
         * @type {number || null}
         */
        this.PostCLSStatus = null;

        /**
         * 是否开启投递CKafka功能
         * @type {number || null}
         */
        this.PostCKafkaStatus = null;

        /**
         * 应用型负载均衡类型: clb或者apisix，默认clb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlbType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ClsStatus = 'ClsStatus' in params ? params.ClsStatus : null;
        this.FlowMode = 'FlowMode' in params ? params.FlowMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.CCList = 'CCList' in params ? params.CCList : null;
        this.RsList = 'RsList' in params ? params.RsList : null;

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new PortInfo();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }

        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new LoadBalancerPackageNew();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.State = 'State' in params ? params.State : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Ipv6Status = 'Ipv6Status' in params ? params.Ipv6Status : null;
        this.BotStatus = 'BotStatus' in params ? params.BotStatus : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.PostCLSStatus = 'PostCLSStatus' in params ? params.PostCLSStatus : null;
        this.PostCKafkaStatus = 'PostCKafkaStatus' in params ? params.PostCKafkaStatus : null;
        this.AlbType = 'AlbType' in params ? params.AlbType : null;

    }
}

/**
 * 日志KeyValue对
 * @class
 */
class AccessLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日记Key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 日志Value
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteSession请求参数结构体
 * @class
 */
class DeleteSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * clb-waf 或者 sprta-waf
         * @type {string || null}
         */
        this.Edition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Edition = 'Edition' in params ? params.Edition : null;

    }
}

/**
 * DescribeWafAutoDenyRules请求参数结构体
 * @class
 */
class DescribeWafAutoDenyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * SearchAttackLog请求参数结构体
 * @class
 */
class SearchAttackLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的域名，所有域名使用all
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的游标。第一次请求使用空字符串即可，后续请求使用上一次请求返回的最后一条记录的context的值即可。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * Lucene语法
         * @type {string || null}
         */
        this.QueryString = null;

        /**
         * 查询的数量，默认10条，最多100条
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 默认为desc，可以取值desc和asc
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.QueryString = 'QueryString' in params ? params.QueryString : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * AddCustomRule返回参数结构体
 * @class
 */
class AddCustomRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
         * @type {ResponseCode || null}
         */
        this.Success = null;

        /**
         * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new ResponseCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFlowTrend返回参数结构体
 * @class
 */
class DescribeFlowTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量趋势数据
         * @type {Array.<BotStatPointItem> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BotStatPointItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAttackDownloadRecords请求参数结构体
 * @class
 */
class GetAttackDownloadRecordsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * UpsertIpAccessControl请求参数结构体
 * @class
 */
class UpsertIpAccessControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 是否为多域名黑白名单
         * @type {string || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Items = 'Items' in params ? params.Items : null;
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * DeleteDownloadRecord请求参数结构体
 * @class
 */
class DeleteDownloadRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录id
         * @type {string || null}
         */
        this.Flow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flow = 'Flow' in params ? params.Flow : null;

    }
}

/**
 * DescribeUserCdcClbWafRegions返回参数结构体
 * @class
 */
class DescribeUserCdcClbWafRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CdcRegion的类型描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CdcRegion> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CdcRegion();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccessExport返回参数结构体
 * @class
 */
class DeleteAccessExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessExports请求参数结构体
 * @class
 */
class DescribeAccessExportsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户要查询的日志主题ID，每个客户都有对应的一个主题
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分页的偏移量，默认值为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页单页限制数目，默认值为20，最大值100
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUserClbWafRegions返回参数结构体
 * @class
 */
class DescribeUserClbWafRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域（标准的ap-格式）列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWafAutoDenyStatus请求参数结构体
 * @class
 */
class ModifyWafAutoDenyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF 自动封禁配置项
         * @type {AutoDenyDetail || null}
         */
        this.WafAutoDenyDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafAutoDenyDetails) {
            let obj = new AutoDenyDetail();
            obj.deserialize(params.WafAutoDenyDetails)
            this.WafAutoDenyDetails = obj;
        }

    }
}

/**
 * ModifyAccessPeriod返回参数结构体
 * @class
 */
class ModifyAccessPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * clb-waf QPS套餐 New
 * @class
 */
class QPSPackageNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ValidTime = null;

        /**
         * 是否自动续费，1：自动续费，0：不自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 套餐购买个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 套餐购买地域，clb-waf暂时没有用到
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ValidTime = 'ValidTime' in params ? params.ValidTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 实例入参过滤器
 * @class
 */
class FiltersItemNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否精确查找
         * @type {boolean || null}
         */
        this.ExactMatch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.ExactMatch = 'ExactMatch' in params ? params.ExactMatch : null;

    }
}

/**
 * DescribeAutoDenyIP返回参数结构体
 * @class
 */
class DescribeAutoDenyIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询IP封禁状态返回结果
         * @type {IpHitItemsData || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new IpHitItemsData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SwitchDomainRules返回参数结构体
 * @class
 */
class SwitchDomainRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchAccessLog返回参数结构体
 * @class
 */
class SearchAccessLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加载后续内容的Context
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志查询结果是否全部返回，其中，“true”表示结果返回，“false”表示结果为返回
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * 返回的是否为分析结果，其中，“true”表示返回分析结果，“false”表示未返回分析结果
         * @type {boolean || null}
         */
        this.Analysis = null;

        /**
         * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColNames = null;

        /**
         * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessLogInfo> || null}
         */
        this.Results = null;

        /**
         * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessLogItems> || null}
         */
        this.AnalysisResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.Analysis = 'Analysis' in params ? params.Analysis : null;
        this.ColNames = 'ColNames' in params ? params.ColNames : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new AccessLogInfo();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

        if (params.AnalysisResults) {
            this.AnalysisResults = new Array();
            for (let z in params.AnalysisResults) {
                let obj = new AccessLogItems();
                obj.deserialize(params.AnalysisResults[z]);
                this.AnalysisResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ip黑白名单
 * @class
 */
class IpAccessControlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作
         * @type {number || null}
         */
        this.ActionType = null;

        /**
         * ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TsVersion = null;

        /**
         * 有效截止时间戳
         * @type {number || null}
         */
        this.ValidTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.TsVersion = 'TsVersion' in params ? params.TsVersion : null;
        this.ValidTs = 'ValidTs' in params ? params.ValidTs : null;

    }
}

/**
 * SwitchDomainRules请求参数结构体
 * @class
 */
class SwitchDomainRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则列表
         * @type {Array.<number> || null}
         */
        this.Ids = null;

        /**
         * 开关状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设置为观察模式原因
         * @type {number || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * saas域名详情
 * @class
 */
class DomainsPartInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启httpRewrite
         * @type {number || null}
         */
        this.HttpsRewrite = null;

        /**
         * https回源端口
         * @type {string || null}
         */
        this.HttpsUpstreamPort = null;

        /**
         * 是否是cdn
         * @type {number || null}
         */
        this.IsCdn = null;

        /**
         * 是否开启gray
         * @type {number || null}
         */
        this.IsGray = null;

        /**
         * 是否是http2
         * @type {number || null}
         */
        this.IsHttp2 = null;

        /**
         * 是否开启websocket
         * @type {number || null}
         */
        this.IsWebsocket = null;

        /**
         * 负载均衡
         * @type {number || null}
         */
        this.LoadBalance = null;

        /**
         * 防御模式
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * ssl id
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * 回源域名
         * @type {string || null}
         */
        this.UpstreamDomain = null;

        /**
         * 回源类型
         * @type {number || null}
         */
        this.UpstreamType = null;

        /**
         * 回源ip
         * @type {Array.<string> || null}
         */
        this.SrcList = null;

        /**
         * 服务端口配置
         * @type {Array.<PortInfo> || null}
         */
        this.Ports = null;

        /**
         * 证书类型
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 回源方式
         * @type {string || null}
         */
        this.UpstreamScheme = null;

        /**
         * 日志包
         * @type {number || null}
         */
        this.Cls = null;

        /**
         * 一级cname
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 是否长连接
         * @type {number || null}
         */
        this.IsKeepAlive = null;

        /**
         * 是否开启主动健康检测，1表示开启，0表示不开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveCheck = null;

        /**
         * TLS版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TLSVersion = null;

        /**
         * 加密套件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Ciphers = null;

        /**
         * 模版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CipherTemplate = null;

        /**
         * 300s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProxyReadTimeout = null;

        /**
         * 300s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProxySendTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HttpsRewrite = 'HttpsRewrite' in params ? params.HttpsRewrite : null;
        this.HttpsUpstreamPort = 'HttpsUpstreamPort' in params ? params.HttpsUpstreamPort : null;
        this.IsCdn = 'IsCdn' in params ? params.IsCdn : null;
        this.IsGray = 'IsGray' in params ? params.IsGray : null;
        this.IsHttp2 = 'IsHttp2' in params ? params.IsHttp2 : null;
        this.IsWebsocket = 'IsWebsocket' in params ? params.IsWebsocket : null;
        this.LoadBalance = 'LoadBalance' in params ? params.LoadBalance : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.UpstreamDomain = 'UpstreamDomain' in params ? params.UpstreamDomain : null;
        this.UpstreamType = 'UpstreamType' in params ? params.UpstreamType : null;
        this.SrcList = 'SrcList' in params ? params.SrcList : null;

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new PortInfo();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.UpstreamScheme = 'UpstreamScheme' in params ? params.UpstreamScheme : null;
        this.Cls = 'Cls' in params ? params.Cls : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.IsKeepAlive = 'IsKeepAlive' in params ? params.IsKeepAlive : null;
        this.ActiveCheck = 'ActiveCheck' in params ? params.ActiveCheck : null;
        this.TLSVersion = 'TLSVersion' in params ? params.TLSVersion : null;
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.CipherTemplate = 'CipherTemplate' in params ? params.CipherTemplate : null;
        this.ProxyReadTimeout = 'ProxyReadTimeout' in params ? params.ProxyReadTimeout : null;
        this.ProxySendTimeout = 'ProxySendTimeout' in params ? params.ProxySendTimeout : null;

    }
}

/**
 * DescribeAutoDenyIP请求参数结构体
 * @class
 */
class DescribeAutoDenyIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询IP自动封禁状态
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 计数标识
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 有效时间最小时间戳
         * @type {number || null}
         */
        this.VtsMin = null;

        /**
         * 有效时间最大时间戳
         * @type {number || null}
         */
        this.VtsMax = null;

        /**
         * 创建时间最小时间戳
         * @type {number || null}
         */
        this.CtsMin = null;

        /**
         * 创建时间最大时间戳
         * @type {number || null}
         */
        this.CtsMax = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Skip = null;

        /**
         * 限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 策略名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排序参数
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.VtsMin = 'VtsMin' in params ? params.VtsMin : null;
        this.VtsMax = 'VtsMax' in params ? params.VtsMax : null;
        this.CtsMin = 'CtsMin' in params ? params.CtsMin : null;
        this.CtsMax = 'CtsMax' in params ? params.CtsMax : null;
        this.Skip = 'Skip' in params ? params.Skip : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * DescribeIpAccessControl请求参数结构体
 * @class
 */
class DescribeIpAccessControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 计数标识
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 动作，40表示查询白名单，42表示查询黑名单
         * @type {number || null}
         */
        this.ActionType = null;

        /**
         * 最小有效时间的时间戳
         * @type {number || null}
         */
        this.VtsMin = null;

        /**
         * 最大有效时间的时间戳
         * @type {number || null}
         */
        this.VtsMax = null;

        /**
         * 最小创建时间的时间戳
         * @type {number || null}
         */
        this.CtsMin = null;

        /**
         * 最大创建时间的时间戳
         * @type {number || null}
         */
        this.CtsMax = null;

        /**
         * 分页开始条数
         * @type {number || null}
         */
        this.OffSet = null;

        /**
         * 每页的条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 来源
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 排序参数
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * ip
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.VtsMin = 'VtsMin' in params ? params.VtsMin : null;
        this.VtsMax = 'VtsMax' in params ? params.VtsMax : null;
        this.CtsMin = 'CtsMin' in params ? params.CtsMin : null;
        this.CtsMax = 'CtsMax' in params ? params.CtsMax : null;
        this.OffSet = 'OffSet' in params ? params.OffSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * ModifyAreaBanStatus请求参数结构体
 * @class
 */
class ModifyAreaBanStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修要修改的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 状态值，0表示关闭，1表示开启
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AddSpartaProtection请求参数结构体
 * @class
 */
class AddSpartaProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要防御的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 证书类型，0表示没有证书，CertType=1表示自有证书,2 为托管证书
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 表示是否开启了CDN代理，1：有部署CDN，0：未部署CDN
         * @type {number || null}
         */
        this.IsCdn = null;

        /**
         * 回源类型，0表示通过IP回源,1 表示通过域名回源
         * @type {number || null}
         */
        this.UpstreamType = null;

        /**
         * 是否开启WebSocket支持，1表示开启，0不开启
         * @type {number || null}
         */
        this.IsWebsocket = null;

        /**
         * 负载均衡策略，0表示轮徇，1表示IP hash
         * @type {string || null}
         */
        this.LoadBalance = null;

        /**
         * CertType=1时，需要填次参数，表示证书内容
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * CertType=1时，需要填次参数，表示证书的私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * CertType=2时，需要填次参数，表示证书的ID
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * Waf的资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * HTTPS回源协议，填http或者https
         * @type {string || null}
         */
        this.UpstreamScheme = null;

        /**
         * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
         * @type {string || null}
         */
        this.HttpsUpstreamPort = null;

        /**
         * 是否开启灰度，0表示不开启灰度
         * @type {number || null}
         */
        this.IsGray = null;

        /**
         * 灰度的地区
         * @type {Array.<string> || null}
         */
        this.GrayAreas = null;

        /**
         * UpstreamType=1时，填次字段表示回源域名
         * @type {string || null}
         */
        this.UpstreamDomain = null;

        /**
         * UpstreamType=0时，填次字段表示回源IP
         * @type {Array.<string> || null}
         */
        this.SrcList = null;

        /**
         * 是否开启HTTP2,开启HTTP2需要HTTPS支持
         * @type {number || null}
         */
        this.IsHttp2 = null;

        /**
         * 表示是否强制跳转到HTTPS，1强制跳转Https，0不强制跳转
         * @type {number || null}
         */
        this.HttpsRewrite = null;

        /**
         * 服务有多端口需要设置此字段
         * @type {Array.<PortItem> || null}
         */
        this.Ports = null;

        /**
         * 版本：sparta-waf、clb-waf、cdn-waf
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 是否开启长连接，仅IP回源时可以用填次参数，域名回源时这个参数无效
         * @type {string || null}
         */
        this.IsKeepAlive = null;

        /**
         * 实例id，上线之后带上此字段
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * anycast IP类型开关： 0 普通IP 1 Anycast IP
         * @type {number || null}
         */
        this.Anycast = null;

        /**
         * src权重
         * @type {Array.<number> || null}
         */
        this.Weights = null;

        /**
         * 是否开启主动健康检测，1表示开启，0表示不开启
         * @type {number || null}
         */
        this.ActiveCheck = null;

        /**
         * TLS版本信息
         * @type {number || null}
         */
        this.TLSVersion = null;

        /**
         * 加密套件信息
         * @type {Array.<number> || null}
         */
        this.Ciphers = null;

        /**
         * 0:不支持选择：默认模版  1:通用型模版 2:安全型模版 3:自定义模版
         * @type {number || null}
         */
        this.CipherTemplate = null;

        /**
         * 300s
         * @type {number || null}
         */
        this.ProxyReadTimeout = null;

        /**
         * 300s
         * @type {number || null}
         */
        this.ProxySendTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.IsCdn = 'IsCdn' in params ? params.IsCdn : null;
        this.UpstreamType = 'UpstreamType' in params ? params.UpstreamType : null;
        this.IsWebsocket = 'IsWebsocket' in params ? params.IsWebsocket : null;
        this.LoadBalance = 'LoadBalance' in params ? params.LoadBalance : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.UpstreamScheme = 'UpstreamScheme' in params ? params.UpstreamScheme : null;
        this.HttpsUpstreamPort = 'HttpsUpstreamPort' in params ? params.HttpsUpstreamPort : null;
        this.IsGray = 'IsGray' in params ? params.IsGray : null;
        this.GrayAreas = 'GrayAreas' in params ? params.GrayAreas : null;
        this.UpstreamDomain = 'UpstreamDomain' in params ? params.UpstreamDomain : null;
        this.SrcList = 'SrcList' in params ? params.SrcList : null;
        this.IsHttp2 = 'IsHttp2' in params ? params.IsHttp2 : null;
        this.HttpsRewrite = 'HttpsRewrite' in params ? params.HttpsRewrite : null;

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new PortItem();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.IsKeepAlive = 'IsKeepAlive' in params ? params.IsKeepAlive : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.Anycast = 'Anycast' in params ? params.Anycast : null;
        this.Weights = 'Weights' in params ? params.Weights : null;
        this.ActiveCheck = 'ActiveCheck' in params ? params.ActiveCheck : null;
        this.TLSVersion = 'TLSVersion' in params ? params.TLSVersion : null;
        this.Ciphers = 'Ciphers' in params ? params.Ciphers : null;
        this.CipherTemplate = 'CipherTemplate' in params ? params.CipherTemplate : null;
        this.ProxyReadTimeout = 'ProxyReadTimeout' in params ? params.ProxyReadTimeout : null;
        this.ProxySendTimeout = 'ProxySendTimeout' in params ? params.ProxySendTimeout : null;

    }
}

/**
 * PostAttackDownloadTask请求参数结构体
 * @class
 */
class PostAttackDownloadTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的域名，所有域名使用all
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Lucene语法
         * @type {string || null}
         */
        this.QueryString = null;

        /**
         * 任务名称
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 默认为desc，可以取值desc和asc
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.QueryString = 'QueryString' in params ? params.QueryString : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * DescribeAccessFastAnalysis请求参数结构体
 * @class
 */
class DescribeAccessFastAnalysisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户要查询的日志主题ID，每个客户都有对应的一个主题
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 要查询的日志的起始时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要查询的日志的结束时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.To = null;

        /**
         * 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 需要分析统计的字段名
         * @type {string || null}
         */
        this.FieldName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.FieldName = 'FieldName' in params ? params.FieldName : null;

    }
}

/**
 * DeleteIpAccessControl请求参数结构体
 * @class
 */
class DeleteIpAccessControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 删除的ip数组
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单
         * @type {boolean || null}
         */
        this.DeleteAll = null;

        /**
         * 是否为多域名黑白名单
         * @type {string || null}
         */
        this.SourceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Items = 'Items' in params ? params.Items : null;
        this.DeleteAll = 'DeleteAll' in params ? params.DeleteAll : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

    }
}

/**
 * 攻击日志详情
 * @class
 */
class AttackLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击日志的详情内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * CLS返回内容
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * CLS返回内容
         * @type {string || null}
         */
        this.Source = null;

        /**
         * CLS返回内容
         * @type {string || null}
         */
        this.TimeStamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;

    }
}

/**
 * DeleteDomainWhiteRules返回参数结构体
 * @class
 */
class DeleteDomainWhiteRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWafAutoDenyStatus返回参数结构体
 * @class
 */
class ModifyWafAutoDenyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF 自动封禁配置项
         * @type {AutoDenyDetail || null}
         */
        this.WafAutoDenyDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafAutoDenyDetails) {
            let obj = new AutoDenyDetail();
            obj.deserialize(params.WafAutoDenyDetails)
            this.WafAutoDenyDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWafAutoDenyStatus返回参数结构体
 * @class
 */
class DescribeWafAutoDenyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF 自动封禁详情
         * @type {AutoDenyDetail || null}
         */
        this.WafAutoDenyDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafAutoDenyDetails) {
            let obj = new AutoDenyDetail();
            obj.deserialize(params.WafAutoDenyDetails)
            this.WafAutoDenyDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDomainWhiteRules请求参数结构体
 * @class
 */
class DeleteDomainWhiteRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的规则域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 需要删除的白名单规则
         * @type {Array.<number> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * clb-waf 域名扩展套餐
 * @class
 */
class DomainPackageNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ValidTime = null;

        /**
         * 是否自动续费，1：自动续费，0：不自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 套餐购买个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 套餐购买地域，clb-waf暂时没有用到
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ValidTime = 'ValidTime' in params ? params.ValidTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 规则白名单
 * @class
 */
class RuleList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 规则列表的id
         * @type {Array.<number> || null}
         */
        this.Rules = null;

        /**
         * 请求url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 请求的方法
         * @type {string || null}
         */
        this.Function = null;

        /**
         * 时间戳
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 开关状态
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Rules = 'Rules' in params ? params.Rules : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Function = 'Function' in params ? params.Function : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * PostAttackDownloadTask返回参数结构体
 * @class
 */
class PostAttackDownloadTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务task id
         * @type {string || null}
         */
        this.Flow = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flow = 'Flow' in params ? params.Flow : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainDetailsSaas请求参数结构体
 * @class
 */
class DescribeDomainDetailsSaasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名id
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 * @class
 */
class ModifyCustomRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
         * @type {ResponseCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new ResponseCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddSpartaProtection返回参数结构体
 * @class
 */
class AddSpartaProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据封装
 * @class
 */
class IpAccessControlData extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip黑白名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IpAccessControlItem> || null}
         */
        this.Res = null;

        /**
         * 计数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Res) {
            this.Res = new Array();
            for (let z in params.Res) {
                let obj = new IpAccessControlItem();
                obj.deserialize(params.Res[z]);
                this.Res.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 防护域名端口配置信息
 * @class
 */
class PortItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听端口配置
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 与Port一一对应，表示端口对应的协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 与Port一一对应,  表示回源端口
         * @type {string || null}
         */
        this.UpstreamPort = null;

        /**
         * 与Port一一对应,  表示回源协议
         * @type {string || null}
         */
        this.UpstreamProtocol = null;

        /**
         * Nginx的服务器ID
         * @type {string || null}
         */
        this.NginxServerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.UpstreamPort = 'UpstreamPort' in params ? params.UpstreamPort : null;
        this.UpstreamProtocol = 'UpstreamProtocol' in params ? params.UpstreamProtocol : null;
        this.NginxServerId = 'NginxServerId' in params ? params.NginxServerId : null;

    }
}

/**
 * Waf 威胁情报封禁模块配置详情
 * @class
 */
class WafThreatenIntelligenceDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封禁模组启用状态
         * @type {number || null}
         */
        this.DefenseStatus = null;

        /**
         * 封禁属性标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.LastUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefenseStatus = 'DefenseStatus' in params ? params.DefenseStatus : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;

    }
}

/**
 * DescribeDomainWhiteRules请求参数结构体
 * @class
 */
class DescribeDomainWhiteRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 请求的白名单匹配路径
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 翻到多少页
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页展示的条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 排序方式,desc表示降序，asc表示升序
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Page = 'Page' in params ? params.Page : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * AddDomainWhiteRule返回参数结构体
 * @class
 */
class AddDomainWhiteRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 * @class
 */
class ModifyCustomRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 开关的状态，1是开启、0是关闭
         * @type {number || null}
         */
        this.Status = null;

        /**
         * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
         * @type {string || null}
         */
        this.Edition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Edition = 'Edition' in params ? params.Edition : null;

    }
}

/**
 * DeleteDownloadRecord返回参数结构体
 * @class
 */
class DeleteDownloadRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccessPeriod请求参数结构体
 * @class
 */
class ModifyAccessPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问日志保存期限，范围为[1, 30]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 日志主题
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * bot的qps详情
 * @class
 */
class BotQPS extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源id
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 有效时间
         * @type {string || null}
         */
        this.ValidTime = null;

        /**
         * 资源数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 资源所在地区
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 使用qps的最大值
         * @type {number || null}
         */
        this.MaxBotQPS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.ValidTime = 'ValidTime' in params ? params.ValidTime : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.MaxBotQPS = 'MaxBotQPS' in params ? params.MaxBotQPS : null;

    }
}

/**
 * ModifyWafAutoDenyRules返回参数结构体
 * @class
 */
class ModifyWafAutoDenyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
         * @type {ResponseCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new ResponseCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchAttackLog返回参数结构体
 * @class
 */
class SearchAttackLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前返回的攻击日志条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 翻页游标，如果没有下一页了，这个参数为空""
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 攻击日志数组条目内容
         * @type {Array.<AttackLogInfo> || null}
         */
        this.Data = null;

        /**
         * CLS接口返回内容
         * @type {boolean || null}
         */
        this.ListOver = null;

        /**
         * CLS接口返回内容，标志是否启动新版本索引
         * @type {boolean || null}
         */
        this.SqlFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Context = 'Context' in params ? params.Context : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AttackLogInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.ListOver = 'ListOver' in params ? params.ListOver : null;
        this.SqlFlag = 'SqlFlag' in params ? params.SqlFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 容量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤数组
         * @type {Array.<FiltersItemNew> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FiltersItemNew();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * CDC场景下负载均衡WAF的地域信息
 * @class
 */
class CdcRegion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 该地域对应的集群信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CdcCluster> || null}
         */
        this.Clusters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new CdcCluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }

    }
}

/**
 * 用于DescribeAccessIndex接口的出参
 * @class
 */
class AccessValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段类型，目前支持的类型有：long、text、double
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * 字段是否开启分析功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SqlFlag = null;

        /**
         * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.SqlFlag = 'SqlFlag' in params ? params.SqlFlag : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DeleteIpAccessControl返回参数结构体
 * @class
 */
class DeleteIpAccessControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除失败的条目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedItems = null;

        /**
         * 删除失败的条目数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单条日志数据描述
 * @class
 */
class AccessLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志时间，单位ms
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志主题名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志来源IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 日志文件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志上报请求包的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgId = null;

        /**
         * 请求包内日志的ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PkgLogId = null;

        /**
         * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogJson = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.PkgId = 'PkgId' in params ? params.PkgId : null;
        this.PkgLogId = 'PkgLogId' in params ? params.PkgLogId : null;
        this.LogJson = 'LogJson' in params ? params.LogJson : null;

    }
}

/**
 * 一个实例的详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 资源id
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 弹性计费
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 套餐版本
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ValidTime = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 已用
         * @type {number || null}
         */
        this.DomainCount = null;

        /**
         * 上限
         * @type {number || null}
         */
        this.SubDomainLimit = null;

        /**
         * 已用
         * @type {number || null}
         */
        this.MainDomainCount = null;

        /**
         * 上限
         * @type {number || null}
         */
        this.MainDomainLimit = null;

        /**
         * 峰值
         * @type {number || null}
         */
        this.MaxQPS = null;

        /**
         * qps套餐
         * @type {QPSPackageNew || null}
         */
        this.QPS = null;

        /**
         * 域名套餐
         * @type {DomainPackageNew || null}
         */
        this.DomainPkg = null;

        /**
         * 用户appid
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * clb或saas
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 业务安全包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FraudPkg || null}
         */
        this.FraudPkg = null;

        /**
         * Bot资源包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BotPkg || null}
         */
        this.BotPkg = null;

        /**
         * bot的qps详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BotQPS || null}
         */
        this.BotQPS = null;

        /**
         * qps弹性计费上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ElasticBilling = null;

        /**
         * 攻击日志投递开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackLogPost = null;

        /**
         * 带宽峰值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.ValidTime = 'ValidTime' in params ? params.ValidTime : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.DomainCount = 'DomainCount' in params ? params.DomainCount : null;
        this.SubDomainLimit = 'SubDomainLimit' in params ? params.SubDomainLimit : null;
        this.MainDomainCount = 'MainDomainCount' in params ? params.MainDomainCount : null;
        this.MainDomainLimit = 'MainDomainLimit' in params ? params.MainDomainLimit : null;
        this.MaxQPS = 'MaxQPS' in params ? params.MaxQPS : null;

        if (params.QPS) {
            let obj = new QPSPackageNew();
            obj.deserialize(params.QPS)
            this.QPS = obj;
        }

        if (params.DomainPkg) {
            let obj = new DomainPackageNew();
            obj.deserialize(params.DomainPkg)
            this.DomainPkg = obj;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Edition = 'Edition' in params ? params.Edition : null;

        if (params.FraudPkg) {
            let obj = new FraudPkg();
            obj.deserialize(params.FraudPkg)
            this.FraudPkg = obj;
        }

        if (params.BotPkg) {
            let obj = new BotPkg();
            obj.deserialize(params.BotPkg)
            this.BotPkg = obj;
        }

        if (params.BotQPS) {
            let obj = new BotQPS();
            obj.deserialize(params.BotQPS)
            this.BotQPS = obj;
        }
        this.ElasticBilling = 'ElasticBilling' in params ? params.ElasticBilling : null;
        this.AttackLogPost = 'AttackLogPost' in params ? params.AttackLogPost : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;

    }
}

/**
 * 防护域名端口配置信息
 * @class
 */
class PortInfo extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeDomainDetailsSaas返回参数结构体
 * @class
 */
class DescribeDomainDetailsSaasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名详情
         * @type {DomainsPartInfo || null}
         */
        this.DomainsPartInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainsPartInfo) {
            let obj = new DomainsPartInfo();
            obj.deserialize(params.DomainsPartInfo)
            this.DomainsPartInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于 DescribeAccessIndex 的出参
 * @class
 */
class AccessKeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要配置键值或者元字段索引的字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段的索引描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessValueInfo || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            let obj = new AccessValueInfo();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * AddCustomRule请求参数结构体
 * @class
 */
class AddCustomRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 优先级
         * @type {string || null}
         */
        this.SortId = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 策略详情
         * @type {Array.<Strategy> || null}
         */
        this.Strategies = null;

        /**
         * 需要添加策略的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
         * @type {string || null}
         */
        this.Redirect = null;

        /**
         * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 放行的详情
         * @type {string || null}
         */
        this.Bypass = null;

        /**
         * 添加规则的来源，默认为空
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.SortId = 'SortId' in params ? params.SortId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

        if (params.Strategies) {
            this.Strategies = new Array();
            for (let z in params.Strategies) {
                let obj = new Strategy();
                obj.deserialize(params.Strategies[z]);
                this.Strategies.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.Redirect = 'Redirect' in params ? params.Redirect : null;
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.Bypass = 'Bypass' in params ? params.Bypass : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * 业务安全资源信息
 * @class
 */
class FraudPkg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Region = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 申请数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InquireNum = null;

        /**
         * 使用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UsedNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InquireNum = 'InquireNum' in params ? params.InquireNum : null;
        this.UsedNum = 'UsedNum' in params ? params.UsedNum : null;

    }
}

/**
 * ModifyAreaBanStatus返回参数结构体
 * @class
 */
class ModifyAreaBanStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainWhiteRule返回参数结构体
 * @class
 */
class ModifyDomainWhiteRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessExports接口
 * @class
 */
class ExportAccessInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * 日志导出查询语句
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 日志导出文件名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 日志文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 日志导出时间排序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 日志导出格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 日志导出数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 日志导出起始时间
         * @type {number || null}
         */
        this.From = null;

        /**
         * 日志导出结束时间
         * @type {number || null}
         */
        this.To = null;

        /**
         * 日志导出路径
         * @type {string || null}
         */
        this.CosPath = null;

        /**
         * 日志导出创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.CosPath = 'CosPath' in params ? params.CosPath : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyWafAutoDenyRules请求参数结构体
 * @class
 */
class ModifyWafAutoDenyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 触发IP封禁的攻击次数阈值，范围为2~100次
         * @type {number || null}
         */
        this.AttackThreshold = null;

        /**
         * IP封禁统计时间，范围为1-60分钟
         * @type {number || null}
         */
        this.TimeThreshold = null;

        /**
         * 触发IP封禁后的封禁时间，范围为5~360分钟
         * @type {number || null}
         */
        this.DenyTimeThreshold = null;

        /**
         * 自动封禁状态
         * @type {number || null}
         */
        this.DefenseStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AttackThreshold = 'AttackThreshold' in params ? params.AttackThreshold : null;
        this.TimeThreshold = 'TimeThreshold' in params ? params.TimeThreshold : null;
        this.DenyTimeThreshold = 'DenyTimeThreshold' in params ? params.DenyTimeThreshold : null;
        this.DefenseStatus = 'DefenseStatus' in params ? params.DefenseStatus : null;

    }
}

/**
 * DescribeAccessFastAnalysis返回参数结构体
 * @class
 */
class DescribeAccessFastAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomains返回参数结构体
 * @class
 */
class DescribeDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * domain列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainInfo> || null}
         */
        this.Domains = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Waf 攻击自动封禁详情
 * @class
 */
class AutoDenyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击封禁类型标签
         * @type {Array.<string> || null}
         */
        this.AttackTags = null;

        /**
         * 攻击次数阈值
         * @type {number || null}
         */
        this.AttackThreshold = null;

        /**
         * 自动封禁状态
         * @type {number || null}
         */
        this.DefenseStatus = null;

        /**
         * 攻击时间阈值
         * @type {number || null}
         */
        this.TimeThreshold = null;

        /**
         * 自动封禁时间
         * @type {number || null}
         */
        this.DenyTimeThreshold = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.LastUpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackTags = 'AttackTags' in params ? params.AttackTags : null;
        this.AttackThreshold = 'AttackThreshold' in params ? params.AttackThreshold : null;
        this.DefenseStatus = 'DefenseStatus' in params ? params.DefenseStatus : null;
        this.TimeThreshold = 'TimeThreshold' in params ? params.TimeThreshold : null;
        this.DenyTimeThreshold = 'DenyTimeThreshold' in params ? params.DenyTimeThreshold : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;

    }
}

/**
 * 响应体的返回码
 * @class
 */
class ResponseCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果成功则返回Success，失败则返回yunapi定义的错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 如果成功则返回Success，失败则返回WAF定义的二级错误码
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyWafThreatenIntelligence请求参数结构体
 * @class
 */
class ModifyWafThreatenIntelligenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置WAF威胁情报封禁模块详情
         * @type {WafThreatenIntelligenceDetails || null}
         */
        this.WafThreatenIntelligenceDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafThreatenIntelligenceDetails) {
            let obj = new WafThreatenIntelligenceDetails();
            obj.deserialize(params.WafThreatenIntelligenceDetails)
            this.WafThreatenIntelligenceDetails = obj;
        }

    }
}

/**
 * 自定义规则的匹配条件结构体
 * @class
 */
class Strategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 逻辑符号
         * @type {string || null}
         */
        this.CompareFunc = null;

        /**
         * 匹配内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 匹配参数
         * @type {string || null}
         */
        this.Arg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.CompareFunc = 'CompareFunc' in params ? params.CompareFunc : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Arg = 'Arg' in params ? params.Arg : null;

    }
}

/**
 * DescribeAccessIndex
 * @class
 */
class AccessFullTextInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 全文索引的分词符，字符串中每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tokenizer = null;

        /**
         * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ContainZH = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;
        this.Tokenizer = 'Tokenizer' in params ? params.Tokenizer : null;
        this.ContainZH = 'ContainZH' in params ? params.ContainZH : null;

    }
}

/**
 * DescribeIpHitItems请求参数结构体
 * @class
 */
class DescribeIpHitItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 计数标识
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 有效时间最小时间戳
         * @type {number || null}
         */
        this.VtsMin = null;

        /**
         * 有效时间最大时间戳
         * @type {number || null}
         */
        this.VtsMax = null;

        /**
         * 创建时间最小时间戳
         * @type {number || null}
         */
        this.CtsMin = null;

        /**
         * 创建时间最大时间戳
         * @type {number || null}
         */
        this.CtsMax = null;

        /**
         * 偏移参数
         * @type {number || null}
         */
        this.Skip = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排序参数
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.VtsMin = 'VtsMin' in params ? params.VtsMin : null;
        this.VtsMax = 'VtsMax' in params ? params.VtsMax : null;
        this.CtsMin = 'CtsMin' in params ? params.CtsMin : null;
        this.CtsMax = 'CtsMax' in params ? params.CtsMax : null;
        this.Skip = 'Skip' in params ? params.Skip : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeAccessIndex接口的出参数
 * @class
 */
class AccessRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全文索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessFullTextInfo || null}
         */
        this.FullText = null;

        /**
         * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessRuleKeyValueInfo || null}
         */
        this.KeyValue = null;

        /**
         * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessRuleTagInfo || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FullText) {
            let obj = new AccessFullTextInfo();
            obj.deserialize(params.FullText)
            this.FullText = obj;
        }

        if (params.KeyValue) {
            let obj = new AccessRuleKeyValueInfo();
            obj.deserialize(params.KeyValue)
            this.KeyValue = obj;
        }

        if (params.Tag) {
            let obj = new AccessRuleTagInfo();
            obj.deserialize(params.Tag)
            this.Tag = obj;
        }

    }
}

/**
 * GetAttackDownloadRecords返回参数结构体
 * @class
 */
class GetAttackDownloadRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载攻击日志记录数组
         * @type {Array.<DownloadAttackRecordInfo> || null}
         */
        this.Records = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DownloadAttackRecordInfo();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccessExport请求参数结构体
 * @class
 */
class DeleteAccessExportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * 日志主题
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeUserClbWafRegions请求参数结构体
 * @class
 */
class DescribeUserClbWafRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeDomainWhiteRules返回参数结构体
 * @class
 */
class DescribeDomainWhiteRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
         * @type {Array.<RuleList> || null}
         */
        this.RuleList = null;

        /**
         * 规则的数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new RuleList();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAttackDownloadRecord请求参数结构体
 * @class
 */
class DeleteAttackDownloadRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载任务记录唯一标记
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeWafThreatenIntelligence返回参数结构体
 * @class
 */
class DescribeWafThreatenIntelligenceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF 威胁情报封禁信息
         * @type {WafThreatenIntelligenceDetails || null}
         */
        this.WafThreatenIntelligenceDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafThreatenIntelligenceDetails) {
            let obj = new WafThreatenIntelligenceDetails();
            obj.deserialize(params.WafThreatenIntelligenceDetails)
            this.WafThreatenIntelligenceDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddDomainWhiteRule请求参数结构体
 * @class
 */
class AddDomainWhiteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要添加的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 需要添加的规则
         * @type {Array.<number> || null}
         */
        this.Rules = null;

        /**
         * 需要添加的规则url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 规则的方法
         * @type {string || null}
         */
        this.Function = null;

        /**
         * 规则的开关
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Rules = 'Rules' in params ? params.Rules : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Function = 'Function' in params ? params.Function : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * UpsertIpAccessControl返回参数结构体
 * @class
 */
class UpsertIpAccessControlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加或修改失败的条目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedItems = null;

        /**
         * 添加或修改失败的数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailedCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedItems = 'FailedItems' in params ? params.FailedItems : null;
        this.FailedCount = 'FailedCount' in params ? params.FailedCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ip封堵状态数据
 * @class
 */
class IpHitItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作
         * @type {number || null}
         */
        this.Action = null;

        /**
         * 类别
         * @type {string || null}
         */
        this.Category = null;

        /**
         * ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.TsVersion = null;

        /**
         * 有效截止时间戳
         * @type {number || null}
         */
        this.ValidTs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Category = 'Category' in params ? params.Category : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TsVersion = 'TsVersion' in params ? params.TsVersion : null;
        this.ValidTs = 'ValidTs' in params ? params.ValidTs : null;

    }
}

/**
 * DeleteSession返回参数结构体
 * @class
 */
class DeleteSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 下载攻击日志记录数据项
 * @class
 */
class DownloadAttackRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 下载任务名
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 当前下载任务的日志条数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 下载文件URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 下载任务需下载的日志总条数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeWafThreatenIntelligence请求参数结构体
 * @class
 */
class DescribeWafThreatenIntelligenceRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeAccessIndex返回参数结构体
 * @class
 */
class DescribeAccessIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否生效，true表示生效，false表示未生效
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessRuleInfo || null}
         */
        this.Rule = null;

        /**
         * 索引修改时间，初始值为索引创建时间。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rule) {
            let obj = new AccessRuleInfo();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessExports返回参数结构体
 * @class
 */
class DescribeAccessExportsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志导出列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExportAccessInfo> || null}
         */
        this.Exports = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Exports) {
            this.Exports = new Array();
            for (let z in params.Exports) {
                let obj = new ExportAccessInfo();
                obj.deserialize(params.Exports[z]);
                this.Exports.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAccessExport返回参数结构体
 * @class
 */
class CreateAccessExportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志导出ID。
         * @type {string || null}
         */
        this.ExportId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExportId = 'ExportId' in params ? params.ExportId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * bot的趋势图对象
 * @class
 */
class BotStatPointItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 横坐标
         * @type {string || null}
         */
        this.TimeStamp = null;

        /**
         * value的所属对象
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 纵列表
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Key对应的页面展示内容
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * SearchAccessLog请求参数结构体
 * @class
 */
class SearchAccessLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户要查询的日志主题ID，每个客户都有对应的一个主题
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 要查询的日志的起始时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.From = null;

        /**
         * 要查询的日志的结束时间，Unix时间戳，单位ms
         * @type {number || null}
         */
        this.To = null;

        /**
         * 查询语句，语句长度最大为4096
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 单次查询返回的日志条数，最大值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.From = 'From' in params ? params.From : null;
        this.To = 'To' in params ? params.To : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * DescribeAccessIndex接口的出参
 * @class
 */
class AccessRuleKeyValueInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CaseSensitive = null;

        /**
         * 需要建立索引的键值对信息；最大只能配置100个键值对
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessKeyValueInfo> || null}
         */
        this.KeyValues = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaseSensitive = 'CaseSensitive' in params ? params.CaseSensitive : null;

        if (params.KeyValues) {
            this.KeyValues = new Array();
            for (let z in params.KeyValues) {
                let obj = new AccessKeyValueInfo();
                obj.deserialize(params.KeyValues[z]);
                this.KeyValues.push(obj);
            }
        }

    }
}

/**
 * DescribeDomains请求参数结构体
 * @class
 */
class DescribeDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据偏移量，从1开始。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回域名的数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤数组
         * @type {Array.<FiltersItemNew> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FiltersItemNew();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * Bot资源信息
 * @class
 */
class BotPkg extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceIds = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Region = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 申请数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InquireNum = null;

        /**
         * 使用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UsedNum = null;

        /**
         * 子产品code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InquireNum = 'InquireNum' in params ? params.InquireNum : null;
        this.UsedNum = 'UsedNum' in params ? params.UsedNum : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyWafThreatenIntelligence返回参数结构体
 * @class
 */
class ModifyWafThreatenIntelligenceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前WAF威胁情报封禁模块详情
         * @type {WafThreatenIntelligenceDetails || null}
         */
        this.WafThreatenIntelligenceDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafThreatenIntelligenceDetails) {
            let obj = new WafThreatenIntelligenceDetails();
            obj.deserialize(params.WafThreatenIntelligenceDetails)
            this.WafThreatenIntelligenceDetails = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateAccessExportRequest: CreateAccessExportRequest,
    CdcCluster: CdcCluster,
    DescribeIpHitItemsResponse: DescribeIpHitItemsResponse,
    DescribeUserCdcClbWafRegionsRequest: DescribeUserCdcClbWafRegionsRequest,
    IpHitItemsData: IpHitItemsData,
    DeleteAttackDownloadRecordResponse: DeleteAttackDownloadRecordResponse,
    DescribeFlowTrendRequest: DescribeFlowTrendRequest,
    DescribeWafAutoDenyStatusRequest: DescribeWafAutoDenyStatusRequest,
    AccessLogItems: AccessLogItems,
    DescribeWafAutoDenyRulesResponse: DescribeWafAutoDenyRulesResponse,
    DescribeIpAccessControlResponse: DescribeIpAccessControlResponse,
    LoadBalancerPackageNew: LoadBalancerPackageNew,
    DescribeInstancesResponse: DescribeInstancesResponse,
    ModifyDomainWhiteRuleRequest: ModifyDomainWhiteRuleRequest,
    AccessRuleTagInfo: AccessRuleTagInfo,
    DescribeAccessIndexRequest: DescribeAccessIndexRequest,
    DomainInfo: DomainInfo,
    AccessLogItem: AccessLogItem,
    DeleteSessionRequest: DeleteSessionRequest,
    DescribeWafAutoDenyRulesRequest: DescribeWafAutoDenyRulesRequest,
    SearchAttackLogRequest: SearchAttackLogRequest,
    AddCustomRuleResponse: AddCustomRuleResponse,
    DescribeFlowTrendResponse: DescribeFlowTrendResponse,
    GetAttackDownloadRecordsRequest: GetAttackDownloadRecordsRequest,
    UpsertIpAccessControlRequest: UpsertIpAccessControlRequest,
    DeleteDownloadRecordRequest: DeleteDownloadRecordRequest,
    DescribeUserCdcClbWafRegionsResponse: DescribeUserCdcClbWafRegionsResponse,
    DeleteAccessExportResponse: DeleteAccessExportResponse,
    DescribeAccessExportsRequest: DescribeAccessExportsRequest,
    DescribeUserClbWafRegionsResponse: DescribeUserClbWafRegionsResponse,
    ModifyWafAutoDenyStatusRequest: ModifyWafAutoDenyStatusRequest,
    ModifyAccessPeriodResponse: ModifyAccessPeriodResponse,
    QPSPackageNew: QPSPackageNew,
    FiltersItemNew: FiltersItemNew,
    DescribeAutoDenyIPResponse: DescribeAutoDenyIPResponse,
    SwitchDomainRulesResponse: SwitchDomainRulesResponse,
    SearchAccessLogResponse: SearchAccessLogResponse,
    IpAccessControlItem: IpAccessControlItem,
    SwitchDomainRulesRequest: SwitchDomainRulesRequest,
    DomainsPartInfo: DomainsPartInfo,
    DescribeAutoDenyIPRequest: DescribeAutoDenyIPRequest,
    DescribeIpAccessControlRequest: DescribeIpAccessControlRequest,
    ModifyAreaBanStatusRequest: ModifyAreaBanStatusRequest,
    AddSpartaProtectionRequest: AddSpartaProtectionRequest,
    PostAttackDownloadTaskRequest: PostAttackDownloadTaskRequest,
    DescribeAccessFastAnalysisRequest: DescribeAccessFastAnalysisRequest,
    DeleteIpAccessControlRequest: DeleteIpAccessControlRequest,
    AttackLogInfo: AttackLogInfo,
    DeleteDomainWhiteRulesResponse: DeleteDomainWhiteRulesResponse,
    ModifyWafAutoDenyStatusResponse: ModifyWafAutoDenyStatusResponse,
    DescribeWafAutoDenyStatusResponse: DescribeWafAutoDenyStatusResponse,
    DeleteDomainWhiteRulesRequest: DeleteDomainWhiteRulesRequest,
    DomainPackageNew: DomainPackageNew,
    RuleList: RuleList,
    PostAttackDownloadTaskResponse: PostAttackDownloadTaskResponse,
    DescribeDomainDetailsSaasRequest: DescribeDomainDetailsSaasRequest,
    ModifyCustomRuleStatusResponse: ModifyCustomRuleStatusResponse,
    AddSpartaProtectionResponse: AddSpartaProtectionResponse,
    IpAccessControlData: IpAccessControlData,
    PortItem: PortItem,
    WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails,
    DescribeDomainWhiteRulesRequest: DescribeDomainWhiteRulesRequest,
    AddDomainWhiteRuleResponse: AddDomainWhiteRuleResponse,
    ModifyCustomRuleStatusRequest: ModifyCustomRuleStatusRequest,
    DeleteDownloadRecordResponse: DeleteDownloadRecordResponse,
    ModifyAccessPeriodRequest: ModifyAccessPeriodRequest,
    BotQPS: BotQPS,
    ModifyWafAutoDenyRulesResponse: ModifyWafAutoDenyRulesResponse,
    SearchAttackLogResponse: SearchAttackLogResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CdcRegion: CdcRegion,
    AccessValueInfo: AccessValueInfo,
    DeleteIpAccessControlResponse: DeleteIpAccessControlResponse,
    AccessLogInfo: AccessLogInfo,
    InstanceInfo: InstanceInfo,
    PortInfo: PortInfo,
    DescribeDomainDetailsSaasResponse: DescribeDomainDetailsSaasResponse,
    AccessKeyValueInfo: AccessKeyValueInfo,
    AddCustomRuleRequest: AddCustomRuleRequest,
    FraudPkg: FraudPkg,
    ModifyAreaBanStatusResponse: ModifyAreaBanStatusResponse,
    ModifyDomainWhiteRuleResponse: ModifyDomainWhiteRuleResponse,
    ExportAccessInfo: ExportAccessInfo,
    ModifyWafAutoDenyRulesRequest: ModifyWafAutoDenyRulesRequest,
    DescribeAccessFastAnalysisResponse: DescribeAccessFastAnalysisResponse,
    DescribeDomainsResponse: DescribeDomainsResponse,
    AutoDenyDetail: AutoDenyDetail,
    ResponseCode: ResponseCode,
    ModifyWafThreatenIntelligenceRequest: ModifyWafThreatenIntelligenceRequest,
    Strategy: Strategy,
    AccessFullTextInfo: AccessFullTextInfo,
    DescribeIpHitItemsRequest: DescribeIpHitItemsRequest,
    AccessRuleInfo: AccessRuleInfo,
    GetAttackDownloadRecordsResponse: GetAttackDownloadRecordsResponse,
    DeleteAccessExportRequest: DeleteAccessExportRequest,
    DescribeUserClbWafRegionsRequest: DescribeUserClbWafRegionsRequest,
    DescribeDomainWhiteRulesResponse: DescribeDomainWhiteRulesResponse,
    DeleteAttackDownloadRecordRequest: DeleteAttackDownloadRecordRequest,
    DescribeWafThreatenIntelligenceResponse: DescribeWafThreatenIntelligenceResponse,
    AddDomainWhiteRuleRequest: AddDomainWhiteRuleRequest,
    UpsertIpAccessControlResponse: UpsertIpAccessControlResponse,
    IpHitItem: IpHitItem,
    DeleteSessionResponse: DeleteSessionResponse,
    DownloadAttackRecordInfo: DownloadAttackRecordInfo,
    DescribeWafThreatenIntelligenceRequest: DescribeWafThreatenIntelligenceRequest,
    DescribeAccessIndexResponse: DescribeAccessIndexResponse,
    DescribeAccessExportsResponse: DescribeAccessExportsResponse,
    CreateAccessExportResponse: CreateAccessExportResponse,
    BotStatPointItem: BotStatPointItem,
    SearchAccessLogRequest: SearchAccessLogRequest,
    AccessRuleKeyValueInfo: AccessRuleKeyValueInfo,
    DescribeDomainsRequest: DescribeDomainsRequest,
    BotPkg: BotPkg,
    ModifyWafThreatenIntelligenceResponse: ModifyWafThreatenIntelligenceResponse,

}
