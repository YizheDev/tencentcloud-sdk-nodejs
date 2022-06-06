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
 * ImportSnapshots返回参数结构体
 * @class
 */
class ImportSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 比较表格的Meta信息
 * @class
 */
class CompareTablesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源表格的集群id
         * @type {string || null}
         */
        this.SrcTableClusterId = null;

        /**
         * 源表格的表格组id
         * @type {string || null}
         */
        this.SrcTableGroupId = null;

        /**
         * 源表格的表名
         * @type {string || null}
         */
        this.SrcTableName = null;

        /**
         * 目标表格的集群id
         * @type {string || null}
         */
        this.DstTableClusterId = null;

        /**
         * 目标表格的表格组id
         * @type {string || null}
         */
        this.DstTableGroupId = null;

        /**
         * 目标表格的表名
         * @type {string || null}
         */
        this.DstTableName = null;

        /**
         * 源表格的实例id
         * @type {string || null}
         */
        this.SrcTableInstanceId = null;

        /**
         * 目标表格的实例id
         * @type {string || null}
         */
        this.DstTableInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcTableClusterId = 'SrcTableClusterId' in params ? params.SrcTableClusterId : null;
        this.SrcTableGroupId = 'SrcTableGroupId' in params ? params.SrcTableGroupId : null;
        this.SrcTableName = 'SrcTableName' in params ? params.SrcTableName : null;
        this.DstTableClusterId = 'DstTableClusterId' in params ? params.DstTableClusterId : null;
        this.DstTableGroupId = 'DstTableGroupId' in params ? params.DstTableGroupId : null;
        this.DstTableName = 'DstTableName' in params ? params.DstTableName : null;
        this.SrcTableInstanceId = 'SrcTableInstanceId' in params ? params.SrcTableInstanceId : null;
        this.DstTableInstanceId = 'DstTableInstanceId' in params ? params.DstTableInstanceId : null;

    }
}

/**
 * ModifyClusterName请求参数结构体
 * @class
 */
class ModifyClusterNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改名称的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要修改的集群名称，可使用中文或英文字符，最大长度32个字符
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * ModifyTableGroupName返回参数结构体
 * @class
 */
class ModifyTableGroupNameResponse extends  AbstractModel {
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
 * DescribeTableTags请求参数结构体
 * @class
 */
class DescribeTableTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterPassword返回参数结构体
 * @class
 */
class ModifyClusterPasswordResponse extends  AbstractModel {
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
 * DeleteCluster返回参数结构体
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除集群生成的任务ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTableIndex返回参数结构体
 * @class
 */
class DeleteTableIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表格分布式索引结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除表格分布式索引结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格回档结果信息
 * @class
 */
class TableRollbackResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 上传的key文件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * 校验成功Key数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccKeyNum = null;

        /**
         * Key文件中包含总的Key数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalKeyNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.SuccKeyNum = 'SuccKeyNum' in params ? params.SuccKeyNum : null;
        this.TotalKeyNum = 'TotalKeyNum' in params ? params.TotalKeyNum : null;

    }
}

/**
 * 申请单id及其状态
 * @class
 */
class ApplyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id-申请单id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 处理状态-1-撤回 1-通过 2-驳回，非0状态的申请单不可改变状态。
         * @type {number || null}
         */
        this.ApplicationStatus = null;

        /**
         * 申请单类型
         * @type {number || null}
         */
        this.ApplicationType = null;

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationStatus = 'ApplicationStatus' in params ? params.ApplicationStatus : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * TcaplusDB服务地域信息详情
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域Ap-Code
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域缩写
         * @type {string || null}
         */
        this.RegionAbbr = null;

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 是否支持ipv6，0:不支持，1:支持
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionAbbr = 'RegionAbbr' in params ? params.RegionAbbr : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * DescribeTables返回参数结构体
 * @class
 */
class DescribeTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格详情结果列表
         * @type {Array.<TableInfoNew> || null}
         */
        this.TableInfos = null;

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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySnapshots返回参数结构体
 * @class
 */
class ModifySnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量修改的快照数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量修改的快照结果列表
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApply返回参数结构体
 * @class
 */
class UpdateApplyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已更新的申请单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplyResult> || null}
         */
        this.ApplyResults = null;

        /**
         * 更新数量
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.ApplyResults) {
            this.ApplyResults = new Array();
            for (let z in params.ApplyResults) {
                let obj = new ApplyResult();
                obj.deserialize(params.ApplyResults[z]);
                this.ApplyResults.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCluster请求参数结构体
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 附带被选中字段信息的表格列表
 * @class
 */
class SelectedTableWithField extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表实例ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格描述语言类型：`PROTO`或`TDR`
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格数据结构类型：`GENERIC`或`LIST`
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 待创建索引、缓写、数据订阅的字段列表
         * @type {Array.<FieldInfo> || null}
         */
        this.SelectedFields = null;

        /**
         * 索引分片数
         * @type {number || null}
         */
        this.ShardNum = null;

        /**
         * ckafka实例信息
         * @type {KafkaInfo || null}
         */
        this.KafkaInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableType = 'TableType' in params ? params.TableType : null;

        if (params.SelectedFields) {
            this.SelectedFields = new Array();
            for (let z in params.SelectedFields) {
                let obj = new FieldInfo();
                obj.deserialize(params.SelectedFields[z]);
                this.SelectedFields.push(obj);
            }
        }
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;

        if (params.KafkaInfo) {
            let obj = new KafkaInfo();
            obj.deserialize(params.KafkaInfo)
            this.KafkaInfo = obj;
        }

    }
}

/**
 * DeleteTableIndex请求参数结构体
 * @class
 */
class DeleteTableIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除分布式索引的表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * proxy机器信息
 * @class
 */
class ProxyMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一id
         * @type {string || null}
         */
        this.ProxyUid = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 可分配proxy资源数
         * @type {number || null}
         */
        this.AvailableCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyUid = 'ProxyUid' in params ? params.ProxyUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.AvailableCount = 'AvailableCount' in params ? params.AvailableCount : null;

    }
}

/**
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询到的任务详情列表
         * @type {Array.<TaskInfoNew> || null}
         */
        this.TaskInfos = null;

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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new TaskInfoNew();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables请求参数结构体
 * @class
 */
class DeleteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除表所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区详情结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区详情结果列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionInfos = null;

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

        if (params.RegionInfos) {
            this.RegionInfos = new Array();
            for (let z in params.RegionInfos) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionInfos[z]);
                this.RegionInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTableDataFlow返回参数结构体
 * @class
 */
class SetTableDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格数据订阅创建结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格数据订阅创建结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 被选中的表信息
 * @class
 */
class SelectedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表实例ID
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格描述语言类型：`PROTO`或`TDR`
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格数据结构类型：`GENERIC`或`LIST`
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * LIST表元素个数
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表格预留容量（GB）
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表格预留读CU
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表格预留写CU
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表格备注信息
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * Key回档文件名，回档专用
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Key回档文件扩展名，回档专用
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * Key回档文件大小，回档专用
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Key回档文件内容，回档专用
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.Memo = 'Memo' in params ? params.Memo : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * ModifyClusterPassword请求参数结构体
 * @class
 */
class ModifyClusterPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改密码的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群旧密码
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * 集群旧密码预期失效时间
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * 集群新密码，密码必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
         * @type {string || null}
         */
        this.NewPassword = null;

        /**
         * 更新模式： `1` 更新密码；`2` 更新旧密码失效时间，默认为`1` 模式
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DescribeMachine返回参数结构体
 * @class
 */
class DescribeMachineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 独占机器资源列表
         * @type {Array.<PoolInfo> || null}
         */
        this.PoolList = null;

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

        if (params.PoolList) {
            this.PoolList = new Array();
            for (let z in params.PoolList) {
                let obj = new PoolInfo();
                obj.deserialize(params.PoolList[z]);
                this.PoolList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTableDataFlow请求参数结构体
 * @class
 */
class DeleteTableDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除分布式索引的表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DeleteTableGroup请求参数结构体
 * @class
 */
class DeleteTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

    }
}

/**
 * DescribeSnapshots请求参数结构体
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * 表格组标签信息
 * @class
 */
class TagsInfoOfTableGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * DescribeApplications返回参数结构体
 * @class
 */
class DescribeApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请单列表
         * @type {Array.<Application> || null}
         */
        this.Applications = null;

        /**
         * 申请单个数
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Applications) {
            this.Applications = new Array();
            for (let z in params.Applications) {
                let obj = new Application();
                obj.deserialize(params.Applications[z]);
                this.Applications.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTableGroup请求参数结构体
 * @class
 */
class CreateTableGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组名称，可以采用中文、英文或数字字符，最大长度32个字符
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格组ID，可以由用户指定，但在同一个集群内不能重复，如果不指定则采用自增的模式
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格组标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterMachine返回参数结构体
 * @class
 */
class ModifyClusterMachineResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格标签信息
 * @class
 */
class TagsInfoOfTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * DeleteIdlFiles返回参数结构体
 * @class
 */
class DeleteIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果记录数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除结果
         * @type {Array.<IdlFileInfoWithoutContent> || null}
         */
        this.IdlFileInfos = null;

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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfoWithoutContent();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表格字段信息列表
 * @class
 */
class FieldInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格字段名称
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 字段是否是主键字段
         * @type {string || null}
         */
        this.IsPrimaryKey = null;

        /**
         * 字段类型
         * @type {string || null}
         */
        this.FieldType = null;

        /**
         * 字段长度
         * @type {number || null}
         */
        this.FieldSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.IsPrimaryKey = 'IsPrimaryKey' in params ? params.IsPrimaryKey : null;
        this.FieldType = 'FieldType' in params ? params.FieldType : null;
        this.FieldSize = 'FieldSize' in params ? params.FieldSize : null;

    }
}

/**
 * ModifyTableTags请求参数结构体
 * @class
 */
class ModifyTableTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改标签表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改标签表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 待增加或修改的标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * 待删除的标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * 合服结果
 * @class
 */
class MergeTableResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 成功时此字段返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 对比的表格信息
         * @type {CompareTablesInfo || null}
         */
        this.Table = null;

        /**
         * 申请单Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

        if (params.Table) {
            let obj = new CompareTablesInfo();
            obj.deserialize(params.Table)
            this.Table = obj;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * 更新申请单结果
 * @class
 */
class ApplyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请单id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 申请类型
         * @type {number || null}
         */
        this.ApplicationType = null;

        /**
         * 处理状态 0-待审核 1-已经审核并提交任务 2-已驳回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationStatus = null;

        /**
         * 已提交的任务Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ApplicationStatus = 'ApplicationStatus' in params ? params.ApplicationStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询任务所属的集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 需要查询的任务ID列表
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 过滤条件，本接口支持：Content，TaskType, Operator, Time
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 新的快照过期时间
 * @class
 */
class SnapshotInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照过期时间点
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;

    }
}

/**
 * 审批申请单
 * @class
 */
class Application extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审批单号
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 申请类型
         * @type {number || null}
         */
        this.ApplicationType = null;

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 表格组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 申请人
         * @type {string || null}
         */
        this.Applicant = null;

        /**
         * 建单时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 处理状态 -1 撤回 0-待审核 1-已经审核并提交任务 2-已驳回
         * @type {number || null}
         */
        this.ApplicationStatus = null;

        /**
         * 表格组Id
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 已提交的任务Id，未提交申请为0
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 腾讯云上table的唯一键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 审批人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecuteUser = null;

        /**
         * 执行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExecuteStatus = null;

        /**
         * 该申请单是否可以被当前用户审批
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CanCensor = null;

        /**
         * 该申请单是否可以被当前用户撤回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CanWithdrawal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.ApplicationType = 'ApplicationType' in params ? params.ApplicationType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Applicant = 'Applicant' in params ? params.Applicant : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ApplicationStatus = 'ApplicationStatus' in params ? params.ApplicationStatus : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExecuteUser = 'ExecuteUser' in params ? params.ExecuteUser : null;
        this.ExecuteStatus = 'ExecuteStatus' in params ? params.ExecuteStatus : null;
        this.CanCensor = 'CanCensor' in params ? params.CanCensor : null;
        this.CanWithdrawal = 'CanWithdrawal' in params ? params.CanWithdrawal : null;

    }
}

/**
 * ClearTables返回参数结构体
 * @class
 */
class ClearTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 清除表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 清除表结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdlFileInfos请求参数结构体
 * @class
 */
class DescribeIdlFileInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 文件所属表格组ID
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 指定文件ID列表
         * @type {Array.<string> || null}
         */
        this.IdlFileIds = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;
        this.IdlFileIds = 'IdlFileIds' in params ? params.IdlFileIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyTableTags返回参数结构体
 * @class
 */
class ModifyTableTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回结果
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建快照结果
 * @class
 */
class SnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 快照名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照的时间点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotTime = null;

        /**
         * 快照的过期时间点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

        /**
         * 快照创建时间点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SnapshotCreateTime = null;

        /**
         * 快照大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SnapshotSize = null;

        /**
         * 快照状态，0 生成中 1 正常 2 删除中 3 已失效 4 回档使用中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SnapshotStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;
        this.SnapshotCreateTime = 'SnapshotCreateTime' in params ? params.SnapshotCreateTime : null;
        this.SnapshotSize = 'SnapshotSize' in params ? params.SnapshotSize : null;
        this.SnapshotStatus = 'SnapshotStatus' in params ? params.SnapshotStatus : null;

    }
}

/**
 * ModifyCensorship请求参数结构体
 * @class
 */
class ModifyCensorshipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群是否开启审核 0-关闭 1-开启
         * @type {number || null}
         */
        this.Censorship = null;

        /**
         * 审批人uin列表
         * @type {Array.<string> || null}
         */
        this.Uins = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.Uins = 'Uins' in params ? params.Uins : null;

    }
}

/**
 * 集群详细信息
 * @class
 */
class ClusterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群数据描述语言类型，如：`PROTO`,`TDR`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 网络类型
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 集群关联的用户私有网络实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群关联的用户子网实例ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 集群密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 密码状态
         * @type {string || null}
         */
        this.PasswordStatus = null;

        /**
         * TcaplusDB SDK连接参数，接入ID
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * TcaplusDB SDK连接参数，接入地址
         * @type {string || null}
         */
        this.ApiAccessIp = null;

        /**
         * TcaplusDB SDK连接参数，接入端口
         * @type {number || null}
         */
        this.ApiAccessPort = null;

        /**
         * 如果PasswordStatus是unmodifiable说明有旧密码还未过期，此字段将显示旧密码过期的时间，否则为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldPasswordExpireTime = null;

        /**
         * TcaplusDB SDK连接参数，接入ipv6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiAccessIpv6 = null;

        /**
         * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterStatus = null;

        /**
         * 读CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReadCapacityUnit = null;

        /**
         * 写CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WriteCapacityUnit = null;

        /**
         * 磁盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskVolume = null;

        /**
         * 独占server机器信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerDetailInfo> || null}
         */
        this.ServerList = null;

        /**
         * 独占proxy机器信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProxyDetailInfo> || null}
         */
        this.ProxyList = null;

        /**
         * 是否开启审核 0-不开启 1-开启
         * @type {number || null}
         */
        this.Censorship = null;

        /**
         * 审批人uin列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DbaUins = null;

        /**
         * 是否开启了数据订阅
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataFlowStatus = null;

        /**
         * 数据订阅的kafka信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KafkaInfo || null}
         */
        this.KafkaInfo = null;

        /**
         * 集群Txh备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TxhBackupExpireDay = null;

        /**
         * 集群Ulog备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UlogBackupExpireDay = null;

        /**
         * 集群Ulog备份文件过期策略是否为只读， 0： UlogBackupExpire是只读，不可修改， 1： UlogBackupExpire可以修改（当前业务存在Svrid第二段等于clusterid的机器）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsReadOnlyUlogBackupExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordStatus = 'PasswordStatus' in params ? params.PasswordStatus : null;
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;
        this.ApiAccessIp = 'ApiAccessIp' in params ? params.ApiAccessIp : null;
        this.ApiAccessPort = 'ApiAccessPort' in params ? params.ApiAccessPort : null;
        this.OldPasswordExpireTime = 'OldPasswordExpireTime' in params ? params.OldPasswordExpireTime : null;
        this.ApiAccessIpv6 = 'ApiAccessIpv6' in params ? params.ApiAccessIpv6 : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ReadCapacityUnit = 'ReadCapacityUnit' in params ? params.ReadCapacityUnit : null;
        this.WriteCapacityUnit = 'WriteCapacityUnit' in params ? params.WriteCapacityUnit : null;
        this.DiskVolume = 'DiskVolume' in params ? params.DiskVolume : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new ServerDetailInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyDetailInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.DbaUins = 'DbaUins' in params ? params.DbaUins : null;
        this.DataFlowStatus = 'DataFlowStatus' in params ? params.DataFlowStatus : null;

        if (params.KafkaInfo) {
            let obj = new KafkaInfo();
            obj.deserialize(params.KafkaInfo)
            this.KafkaInfo = obj;
        }
        this.TxhBackupExpireDay = 'TxhBackupExpireDay' in params ? params.TxhBackupExpireDay : null;
        this.UlogBackupExpireDay = 'UlogBackupExpireDay' in params ? params.UlogBackupExpireDay : null;
        this.IsReadOnlyUlogBackupExpireDay = 'IsReadOnlyUlogBackupExpireDay' in params ? params.IsReadOnlyUlogBackupExpireDay : null;

    }
}

/**
 * DisableRestProxy请求参数结构体
 * @class
 */
class DisableRestProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应appid
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeTablesInRecycle返回参数结构体
 * @class
 */
class DescribeTablesInRecycleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格详情结果列表
         * @type {Array.<TableInfoNew> || null}
         */
        this.TableInfos = null;

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

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new TableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTables返回参数结构体
 * @class
 */
class ModifyTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 修改表结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSnapshots请求参数结构体
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 删除的快照列表
         * @type {Array.<SnapshotInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyTableGroupTags返回参数结构体
 * @class
 */
class ModifyTableGroupTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterTags请求参数结构体
 * @class
 */
class ModifyClusterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改标签的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待增加或修改的标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * 待删除的标签
         * @type {Array.<TagInfoUnit> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * CreateSnapshots请求参数结构体
 * @class
 */
class CreateSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 快照列表
         * @type {Array.<SnapshotInfo> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeTableGroupTags返回参数结构体
 * @class
 */
class DescribeTableGroupTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组标签信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagsInfoOfTableGroup> || null}
         */
        this.Rows = null;

        /**
         * 返回结果个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfTableGroup();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetTableIndex请求参数结构体
 * @class
 */
class SetTableIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建分布式索引表格列表
         * @type {Array.<SelectedTableWithField> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableWithField();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ModifyTableQuotas返回参数结构体
 * @class
 */
class ModifyTableQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 扩缩容结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecoverRecycleTables请求参数结构体
 * @class
 */
class RecoverRecycleTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待恢复表信息
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DeleteSnapshots返回参数结构体
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量删除的快照数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量删除的快照结果
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTables返回参数结构体
 * @class
 */
class DeleteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除表结果详情列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTableGroupName请求参数结构体
 * @class
 */
class ModifyTableGroupNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改名称的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 新的表格组名称，可以使用中英文字符和符号
         * @type {string || null}
         */
        this.TableGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;

    }
}

/**
 * DescribeTableGroups请求参数结构体
 * @class
 */
class DescribeTableGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 过滤条件，本接口支持：TableGroupName，TableGroupId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUinInWhitelist请求参数结构体
 * @class
 */
class DescribeUinInWhitelistRequest extends  AbstractModel {
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
 * MergeTablesData请求参数结构体
 * @class
 */
class MergeTablesDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选取的表格
         * @type {Array.<MergeTablesInfo> || null}
         */
        this.SelectedTables = null;

        /**
         * true只做对比，false既对比又执行
         * @type {boolean || null}
         */
        this.IsOnlyCompare = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new MergeTablesInfo();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.IsOnlyCompare = 'IsOnlyCompare' in params ? params.IsOnlyCompare : null;

    }
}

/**
 * CreateCluster请求参数结构体
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群数据描述语言类型，如：`PROTO`，`TDR`或`MIX`
         * @type {string || null}
         */
        this.IdlType = null;

        /**
         * 集群名称，可使用中文或英文字符，最大长度32个字符
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群所绑定的私有网络实例ID，形如：vpc-f49l6u0z
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群所绑定的子网实例ID，形如：subnet-pxir56ns
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 集群访问密码，必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 集群标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ResourceTags = null;

        /**
         * 集群是否开启IPv6功能
         * @type {number || null}
         */
        this.Ipv6Enable = null;

        /**
         * 独占集群占用的svr机器
         * @type {Array.<MachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * 独占集群占用的proxy机器
         * @type {Array.<MachineInfo> || null}
         */
        this.ProxyList = null;

        /**
         * 集群类型1共享2独占
         * @type {number || null}
         */
        this.ClusterType = null;

        /**
         * 密码认证类型，0 静态认证， 1 签名认证
         * @type {number || null}
         */
        this.AuthType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdlType = 'IdlType' in params ? params.IdlType : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;

    }
}

/**
 * ModifyTableGroupTags请求参数结构体
 * @class
 */
class ModifyTableGroupTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改标签表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改标签表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 待增加或修改的标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ReplaceTags = null;

        /**
         * 待删除的标签
         * @type {Array.<TagInfoUnit> || null}
         */
        this.DeleteTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ReplaceTags) {
            this.ReplaceTags = new Array();
            for (let z in params.ReplaceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ReplaceTags[z]);
                this.ReplaceTags.push(obj);
            }
        }

        if (params.DeleteTags) {
            this.DeleteTags = new Array();
            for (let z in params.DeleteTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.DeleteTags[z]);
                this.DeleteTags.push(obj);
            }
        }

    }
}

/**
 * EnableRestProxy请求参数结构体
 * @class
 */
class EnableRestProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应于appid
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyTableQuotas请求参数结构体
 * @class
 */
class ModifyTableQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带扩缩容表所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 已选中待修改的表配额列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.TableQuotas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableQuotas) {
            this.TableQuotas = new Array();
            for (let z in params.TableQuotas) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.TableQuotas[z]);
                this.TableQuotas.push(obj);
            }
        }

    }
}

/**
 * CompareIdlFiles返回参数结构体
 * @class
 */
class CompareIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次上传校验所有的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 本次校验合法的表格数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取IDL描述文件后,根据用户指示的所选中表格解析校验结果
         * @type {Array.<ParsedTableInfoNew> || null}
         */
        this.TableInfos = null;

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

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTables返回参数结构体
 * @class
 */
class CreateTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量创建表格结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量创建表格结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DescribeClusters返回参数结构体
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群实例列表
         * @type {Array.<ClusterInfo> || null}
         */
        this.Clusters = null;

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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new ClusterInfo();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 合服请求入参
 * @class
 */
class MergeTablesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合服的表格信息
         * @type {CompareTablesInfo || null}
         */
        this.MergeTables = null;

        /**
         * 是否检查索引
         * @type {boolean || null}
         */
        this.CheckIndex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MergeTables) {
            let obj = new CompareTablesInfo();
            obj.deserialize(params.MergeTables)
            this.MergeTables = obj;
        }
        this.CheckIndex = 'CheckIndex' in params ? params.CheckIndex : null;

    }
}

/**
 * ModifyClusterTags返回参数结构体
 * @class
 */
class ModifyClusterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterTags返回参数结构体
 * @class
 */
class DescribeClusterTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群标签信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagsInfoOfCluster> || null}
         */
        this.Rows = null;

        /**
         * 返回结果个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfCluster();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群的标签信息
 * @class
 */
class TagsInfoOfCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfoUnit> || null}
         */
        this.Tags = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * SetTableIndex返回参数结构体
 * @class
 */
class SetTableIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格分布式索引创建结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格分布式索引创建结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ClearTables请求参数结构体
 * @class
 */
class ClearTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待清理表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeIdlFileInfos返回参数结构体
 * @class
 */
class DescribeIdlFileInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 文件详情列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFileInfos = null;

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

        if (params.IdlFileInfos) {
            this.IdlFileInfos = new Array();
            for (let z in params.IdlFileInfos) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFileInfos[z]);
                this.IdlFileInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * svr的机器列表ServerList
 * @class
 */
class ServerMachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器唯一id
         * @type {string || null}
         */
        this.ServerUid = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerUid = 'ServerUid' in params ? params.ServerUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;

    }
}

/**
 * CreateSnapshots返回参数结构体
 * @class
 */
class CreateSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量创建的快照数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批量创建的快照结果列表
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 表定义描述文件详情，包含文件内容
 * @class
 */
class IdlFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称，不包含扩展名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 数据描述语言（IDL）类型
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件扩展名
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * 文件大小（Bytes）
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件ID，对于已上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * 文件内容，对于本次新上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

    }
}

/**
 * DisableRestProxy返回参数结构体
 * @class
 */
class DisableRestProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中
         * @type {number || null}
         */
        this.RestProxyStatus = null;

        /**
         * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RestProxyStatus = 'RestProxyStatus' in params ? params.RestProxyStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签信息单元
 * @class
 */
class TagInfoUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * CreateCluster返回参数结构体
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusters请求参数结构体
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定查询的集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 查询过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询列表返回记录数，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否启用Ipv6
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * server独占机器的详细信息
 * @class
 */
class ServerDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * svr唯一id
         * @type {string || null}
         */
        this.ServerUid = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 内存占用量
         * @type {number || null}
         */
        this.MemoryRate = null;

        /**
         * 磁盘占用量
         * @type {number || null}
         */
        this.DiskRate = null;

        /**
         * 读次数
         * @type {number || null}
         */
        this.ReadNum = null;

        /**
         * 写次数
         * @type {number || null}
         */
        this.WriteNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerUid = 'ServerUid' in params ? params.ServerUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MemoryRate = 'MemoryRate' in params ? params.MemoryRate : null;
        this.DiskRate = 'DiskRate' in params ? params.DiskRate : null;
        this.ReadNum = 'ReadNum' in params ? params.ReadNum : null;
        this.WriteNum = 'WriteNum' in params ? params.WriteNum : null;

    }
}

/**
 * 表格详情信息
 * @class
 */
class TableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 表格所属集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格所属表格组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyStruct = null;

        /**
         * 表格非主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueStruct = null;

        /**
         * 表格分表因子集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * 表格索引键字段集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexStruct = null;

        /**
         * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * 表格所关联IDL文件信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 表格预留容量（GB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedVolume = null;

        /**
         * 表格预留读CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedReadQps = null;

        /**
         * 表格预留写CU
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReservedWriteQps = null;

        /**
         * 表格实际数据量大小（MB）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TableSize = null;

        /**
         * 表格状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 表格创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 表格最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 表格备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Memo = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * TcaplusDB SDK数据访问接入ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiAccessId = null;

        /**
         * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortRule = null;

        /**
         * 表格分布式索引/缓写、kafka数据订阅信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbClusterInfoStruct = null;

        /**
         * 表格Txh备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TxhBackupExpireDay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.KeyStruct = 'KeyStruct' in params ? params.KeyStruct : null;
        this.ValueStruct = 'ValueStruct' in params ? params.ValueStruct : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.IndexStruct = 'IndexStruct' in params ? params.IndexStruct : null;
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.ReservedVolume = 'ReservedVolume' in params ? params.ReservedVolume : null;
        this.ReservedReadQps = 'ReservedReadQps' in params ? params.ReservedReadQps : null;
        this.ReservedWriteQps = 'ReservedWriteQps' in params ? params.ReservedWriteQps : null;
        this.TableSize = 'TableSize' in params ? params.TableSize : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Memo = 'Memo' in params ? params.Memo : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.ApiAccessId = 'ApiAccessId' in params ? params.ApiAccessId : null;
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;
        this.DbClusterInfoStruct = 'DbClusterInfoStruct' in params ? params.DbClusterInfoStruct : null;
        this.TxhBackupExpireDay = 'TxhBackupExpireDay' in params ? params.TxhBackupExpireDay : null;

    }
}

/**
 * 任务信息详情
 * @class
 */
class TaskInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 任务所关联的TcaplusDB内部事务ID
         * @type {string || null}
         */
        this.TransId = null;

        /**
         * 任务所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 任务所属集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 任务进度
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 操作者
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 任务详情
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.TransId = 'TransId' in params ? params.TransId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeleteIdlFiles请求参数结构体
 * @class
 */
class DeleteIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IDL所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

    }
}

/**
 * CreateBackup返回参数结构体
 * @class
 */
class CreateBackupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的备份任务ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 创建的备份申请ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ApplicationIds = null;

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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 部分key导入快照数据时所需要的key文件
 * @class
 */
class KeyFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * key文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * key文件扩展名
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * key文件内容
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * key文件大小
         * @type {number || null}
         */
        this.FileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

    }
}

/**
 * VerifyIdlFiles返回参数结构体
 * @class
 */
class VerifyIdlFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次上传校验所有的IDL文件信息列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 读取IDL描述文件后解析出的合法表数量，不包含已经创建的表
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 读取IDL描述文件后解析出的合法表列表，不包含已经创建的表
         * @type {Array.<ParsedTableInfoNew> || null}
         */
        this.TableInfos = null;

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

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TableInfos) {
            this.TableInfos = new Array();
            for (let z in params.TableInfos) {
                let obj = new ParsedTableInfoNew();
                obj.deserialize(params.TableInfos[z]);
                this.TableInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTableTags返回参数结构体
 * @class
 */
class DescribeTableTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格标签信息列表
         * @type {Array.<TagsInfoOfTable> || null}
         */
        this.Rows = null;

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

        if (params.Rows) {
            this.Rows = new Array();
            for (let z in params.Rows) {
                let obj = new TagsInfoOfTable();
                obj.deserialize(params.Rows[z]);
                this.Rows.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTableGroup返回参数结构体
 * @class
 */
class CreateTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

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
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshots返回参数结构体
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 快照结果列表
         * @type {Array.<SnapshotResult> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new SnapshotResult();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyIdlFiles请求参数结构体
 * @class
 */
class VerifyIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建表格的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建表格的表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 曾经上传过的IDL文件信息列表，与NewIdlFiles至少有一者
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * 待上传的IDL文件信息列表，与ExistingIdlFiles至少有一者
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * EnableRestProxy返回参数结构体
 * @class
 */
class EnableRestProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中
         * @type {number || null}
         */
        this.RestProxyStatus = null;

        /**
         * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.RestProxyStatus = 'RestProxyStatus' in params ? params.RestProxyStatus : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterName返回参数结构体
 * @class
 */
class ModifyClusterNameResponse extends  AbstractModel {
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
 * ModifyTables请求参数结构体
 * @class
 */
class ModifyTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 选中的改表IDL文件
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待改表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * SetTableDataFlow请求参数结构体
 * @class
 */
class SetTableDataFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建分布式索引表格列表
         * @type {Array.<SelectedTableWithField> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableWithField();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * DescribeTableGroupTags请求参数结构体
 * @class
 */
class DescribeTableGroupTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询标签表格组所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待查询标签表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

    }
}

/**
 * DescribeTablesInRecycle请求参数结构体
 * @class
 */
class DescribeTablesInRecycleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待查询表格所属表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询结果偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果返回记录数量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeTables请求参数结构体
 * @class
 */
class DescribeTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待查询表格所属表格组ID列表
         * @type {Array.<string> || null}
         */
        this.TableGroupIds = null;

        /**
         * 待查询表格信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 过滤条件，本接口支持：TableName，TableInstanceId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询结果偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果返回记录数量
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.TableGroupIds = 'TableGroupIds' in params ? params.TableGroupIds : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ckafka地址信息
 * @class
 */
class KafkaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * kafaka address
         * @type {string || null}
         */
        this.Address = null;

        /**
         * kafaka topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * kafka username
         * @type {string || null}
         */
        this.User = null;

        /**
         * kafka password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * ckafka实例
         * @type {string || null}
         */
        this.Instance = null;

        /**
         * 是否走VPC
         * @type {number || null}
         */
        this.IsVpc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.User = 'User' in params ? params.User : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Instance = 'Instance' in params ? params.Instance : null;
        this.IsVpc = 'IsVpc' in params ? params.IsVpc : null;

    }
}

/**
 * DeleteTableDataFlow返回参数结构体
 * @class
 */
class DeleteTableDataFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表格分布式索引结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 删除表格分布式索引结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateApply请求参数结构体
 * @class
 */
class UpdateApplyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请单状态
         * @type {Array.<ApplyStatus> || null}
         */
        this.ApplyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ApplyStatus) {
            this.ApplyStatus = new Array();
            for (let z in params.ApplyStatus) {
                let obj = new ApplyStatus();
                obj.deserialize(params.ApplyStatus[z]);
                this.ApplyStatus.push(obj);
            }
        }

    }
}

/**
 * ModifyTableMemos请求参数结构体
 * @class
 */
class ModifyTableMemosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表所属集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 选定表详情列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.TableMemos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.TableMemos) {
            this.TableMemos = new Array();
            for (let z in params.TableMemos) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.TableMemos[z]);
                this.TableMemos.push(obj);
            }
        }

    }
}

/**
 * DescribeUinInWhitelist返回参数结构体
 * @class
 */
class DescribeUinInWhitelistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果：`FALSE` 否；`TRUE` 是
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 快照列表
 * @class
 */
class SnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表名称
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 快照名称
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照时间点
         * @type {string || null}
         */
        this.SnapshotTime = null;

        /**
         * 快照过期时间点
         * @type {string || null}
         */
        this.SnapshotDeadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotTime = 'SnapshotTime' in params ? params.SnapshotTime : null;
        this.SnapshotDeadTime = 'SnapshotDeadTime' in params ? params.SnapshotDeadTime : null;

    }
}

/**
 * 从IDL表描述文件中解析出来的表信息
 * @class
 */
class ParsedTableInfoNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格描述语言类型：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyFields = null;

        /**
         * 原主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldKeyFields = null;

        /**
         * 非主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueFields = null;

        /**
         * 原非主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldValueFields = null;

        /**
         * 所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SumKeyFieldSize = null;

        /**
         * 非主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SumValueFieldSize = null;

        /**
         * 索引键集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IndexKeySet = null;

        /**
         * 分表因子集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShardingKeySet = null;

        /**
         * TDR版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TdrVersion = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListElementNum = null;

        /**
         * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortFieldNum = null;

        /**
         * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SortRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.KeyFields = 'KeyFields' in params ? params.KeyFields : null;
        this.OldKeyFields = 'OldKeyFields' in params ? params.OldKeyFields : null;
        this.ValueFields = 'ValueFields' in params ? params.ValueFields : null;
        this.OldValueFields = 'OldValueFields' in params ? params.OldValueFields : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.SumKeyFieldSize = 'SumKeyFieldSize' in params ? params.SumKeyFieldSize : null;
        this.SumValueFieldSize = 'SumValueFieldSize' in params ? params.SumValueFieldSize : null;
        this.IndexKeySet = 'IndexKeySet' in params ? params.IndexKeySet : null;
        this.ShardingKeySet = 'ShardingKeySet' in params ? params.ShardingKeySet : null;
        this.TdrVersion = 'TdrVersion' in params ? params.TdrVersion : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.ListElementNum = 'ListElementNum' in params ? params.ListElementNum : null;
        this.SortFieldNum = 'SortFieldNum' in params ? params.SortFieldNum : null;
        this.SortRule = 'SortRule' in params ? params.SortRule : null;

    }
}

/**
 * RollbackTables返回参数结构体
 * @class
 */
class RollbackTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格回档任务结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格回档任务结果列表
         * @type {Array.<TableRollbackResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableRollbackResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 机器类型和数量
 * @class
 */
class MachineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 机器数量
         * @type {number || null}
         */
        this.MachineNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.MachineNum = 'MachineNum' in params ? params.MachineNum : null;

    }
}

/**
 * CreateBackup请求参数结构体
 * @class
 */
class CreateBackupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建备份表所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待创建备份表信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 备注信息
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 表处理结果信息
 * @class
 */
class TableResultNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableInstanceId = null;

        /**
         * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableType = null;

        /**
         * 表数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableIdlType = null;

        /**
         * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

        /**
         * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 腾讯云申请审核单Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableInstanceId = 'TableInstanceId' in params ? params.TableInstanceId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.TableType = 'TableType' in params ? params.TableType : null;
        this.TableIdlType = 'TableIdlType' in params ? params.TableIdlType : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * CreateTables请求参数结构体
 * @class
 */
class CreateTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建表格所属集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 用户选定的建表格IDL文件列表
         * @type {Array.<IdlFileInfo> || null}
         */
        this.IdlFiles = null;

        /**
         * 待创建表格信息列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 表格标签列表
         * @type {Array.<TagInfoUnit> || null}
         */
        this.ResourceTags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.IdlFiles) {
            this.IdlFiles = new Array();
            for (let z in params.IdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.IdlFiles[z]);
                this.IdlFiles.push(obj);
            }
        }

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new TagInfoUnit();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterTags请求参数结构体
 * @class
 */
class DescribeClusterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * RecoverRecycleTables返回参数结构体
 * @class
 */
class RecoverRecycleTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恢复表结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 恢复表信息列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MergeTablesData返回参数结构体
 * @class
 */
class MergeTablesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合服结果集
         * @type {Array.<MergeTableResult> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new MergeTableResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplications请求参数结构体
 * @class
 */
class DescribeApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID，用于获取指定集群的单据
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 分页，限制当前返回多少条记录，大于等于10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页，从多少条数据开始返回
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 申请单状态，用于过滤，0-待审核 1-已经审核并提交任务 2-已驳回
         * @type {number || null}
         */
        this.CensorStatus = null;

        /**
         * 表格组id，用于过滤
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格名，用于过滤
         * @type {string || null}
         */
        this.TableName = null;

        /**
         * 申请人uin，用于过滤
         * @type {string || null}
         */
        this.Applicant = null;

        /**
         * 申请类型，用于过滤，0加表 1删除表 2清理表 3修改表 4表重建 5存储层扩缩容 6接入层扩缩容 7复制表数据 8key回档
         * @type {number || null}
         */
        this.ApplyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CensorStatus = 'CensorStatus' in params ? params.CensorStatus : null;
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableName = 'TableName' in params ? params.TableName : null;
        this.Applicant = 'Applicant' in params ? params.Applicant : null;
        this.ApplyType = 'ApplyType' in params ? params.ApplyType : null;

    }
}

/**
 * DescribeTableGroups返回参数结构体
 * @class
 */
class DescribeTableGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表格组信息列表
         * @type {Array.<TableGroupInfo> || null}
         */
        this.TableGroups = null;

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

        if (params.TableGroups) {
            this.TableGroups = new Array();
            for (let z in params.TableGroups) {
                let obj = new TableGroupInfo();
                obj.deserialize(params.TableGroups[z]);
                this.TableGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTableGroup返回参数结构体
 * @class
 */
class DeleteTableGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除表格组所创建的任务ID
         * @type {string || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * center资源池中的机器信息
 * @class
 */
class PoolInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一id
         * @type {number || null}
         */
        this.PoolUid = null;

        /**
         * 是否支持ipv6
         * @type {number || null}
         */
        this.Ipv6Enable = null;

        /**
         * 剩余可用app
         * @type {number || null}
         */
        this.AvailableAppCount = null;

        /**
         * svr机器列表
         * @type {Array.<ServerMachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * proxy机器列表
         * @type {Array.<ProxyMachineInfo> || null}
         */
        this.ProxyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PoolUid = 'PoolUid' in params ? params.PoolUid : null;
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;
        this.AvailableAppCount = 'AvailableAppCount' in params ? params.AvailableAppCount : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new ServerMachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyMachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }

    }
}

/**
 * DescribeMachine请求参数结构体
 * @class
 */
class DescribeMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不为0，表示查询支持ipv6的机器
         * @type {number || null}
         */
        this.Ipv6Enable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ipv6Enable = 'Ipv6Enable' in params ? params.Ipv6Enable : null;

    }
}

/**
 * RollbackTables请求参数结构体
 * @class
 */
class RollbackTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待回档表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待回档表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 待回档时间
         * @type {string || null}
         */
        this.RollbackTime = null;

        /**
         * 回档模式，支持：`KEYS`
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * ModifyCensorship返回参数结构体
 * @class
 */
class ModifyCensorshipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 已加入审批人的uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Uins = null;

        /**
         * 集群是否开启审核 0-关闭 1-开启
         * @type {number || null}
         */
        this.Censorship = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Uins = 'Uins' in params ? params.Uins : null;
        this.Censorship = 'Censorship' in params ? params.Censorship : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CompareIdlFiles请求参数结构体
 * @class
 */
class CompareIdlFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改表格所在集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待修改表格列表
         * @type {Array.<SelectedTableInfoNew> || null}
         */
        this.SelectedTables = null;

        /**
         * 选中的已上传IDL文件列表，与NewIdlFiles必选其一
         * @type {Array.<IdlFileInfo> || null}
         */
        this.ExistingIdlFiles = null;

        /**
         * 本次上传IDL文件列表，与ExistingIdlFiles必选其一
         * @type {Array.<IdlFileInfo> || null}
         */
        this.NewIdlFiles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SelectedTableInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

        if (params.ExistingIdlFiles) {
            this.ExistingIdlFiles = new Array();
            for (let z in params.ExistingIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.ExistingIdlFiles[z]);
                this.ExistingIdlFiles.push(obj);
            }
        }

        if (params.NewIdlFiles) {
            this.NewIdlFiles = new Array();
            for (let z in params.NewIdlFiles) {
                let obj = new IdlFileInfo();
                obj.deserialize(params.NewIdlFiles[z]);
                this.NewIdlFiles.push(obj);
            }
        }

    }
}

/**
 * 独占的proxy详细信息
 * @class
 */
class ProxyDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * proxy的唯一id
         * @type {string || null}
         */
        this.ProxyUid = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.MachineType = null;

        /**
         * 请求包速度
         * @type {number || null}
         */
        this.ProcessSpeed = null;

        /**
         * 请求包时延
         * @type {number || null}
         */
        this.AverageProcessDelay = null;

        /**
         * 慢处理包速度
         * @type {number || null}
         */
        this.SlowProcessSpeed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyUid = 'ProxyUid' in params ? params.ProxyUid : null;
        this.MachineType = 'MachineType' in params ? params.MachineType : null;
        this.ProcessSpeed = 'ProcessSpeed' in params ? params.ProcessSpeed : null;
        this.AverageProcessDelay = 'AverageProcessDelay' in params ? params.AverageProcessDelay : null;
        this.SlowProcessSpeed = 'SlowProcessSpeed' in params ? params.SlowProcessSpeed : null;

    }
}

/**
 * 表定义描述文件详情，不包含文件内容
 * @class
 */
class IdlFileInfoWithoutContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名称，不包含扩展名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 数据描述语言（IDL）类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件扩展名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileExtType = null;

        /**
         * 文件大小（Bytes）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 文件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileId = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorInfo || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileExtType = 'FileExtType' in params ? params.FileExtType : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FileId = 'FileId' in params ? params.FileId : null;

        if (params.Error) {
            let obj = new ErrorInfo();
            obj.deserialize(params.Error)
            this.Error = obj;
        }

    }
}

/**
 * ModifyTableMemos返回参数结构体
 * @class
 */
class ModifyTableMemosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表备注修改结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 表备注修改结果列表
         * @type {Array.<TableResultNew> || null}
         */
        this.TableResults = null;

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

        if (params.TableResults) {
            this.TableResults = new Array();
            for (let z in params.TableResults) {
                let obj = new TableResultNew();
                obj.deserialize(params.TableResults[z]);
                this.TableResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterMachine请求参数结构体
 * @class
 */
class ModifyClusterMachineRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * svr占用的机器
         * @type {Array.<MachineInfo> || null}
         */
        this.ServerList = null;

        /**
         * proxy占用的机器
         * @type {Array.<MachineInfo> || null}
         */
        this.ProxyList = null;

        /**
         * 集群类型1共享集群2独占集群
         * @type {number || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new MachineInfo();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifySnapshots请求参数结构体
 * @class
 */
class ModifySnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 快照列表
         * @type {Array.<SnapshotInfoNew> || null}
         */
        this.SelectedTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.SelectedTables) {
            this.SelectedTables = new Array();
            for (let z in params.SelectedTables) {
                let obj = new SnapshotInfoNew();
                obj.deserialize(params.SelectedTables[z]);
                this.SelectedTables.push(obj);
            }
        }

    }
}

/**
 * ImportSnapshots请求参数结构体
 * @class
 */
class ImportSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格所属的集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 用于导入的快照信息
         * @type {SnapshotInfo || null}
         */
        this.Snapshots = null;

        /**
         * 是否导入部分记录，TRUE表示导入部分记录，FALSE表示全表导入
         * @type {string || null}
         */
        this.ImportSpecialKey = null;

        /**
         * 是否导入到当前表，TRUE表示导入到当前表，FALSE表示导入到新表
         * @type {string || null}
         */
        this.ImportOriginTable = null;

        /**
         * 部分记录的key文件
         * @type {KeyFile || null}
         */
        this.KeyFile = null;

        /**
         * 如果导入到新表，此为新表所属的表格组id
         * @type {string || null}
         */
        this.NewTableGroupId = null;

        /**
         * 如果导入到新表，此为新表的表名，系统会以该名称自动创建一张结构相同的空表
         * @type {string || null}
         */
        this.NewTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Snapshots) {
            let obj = new SnapshotInfo();
            obj.deserialize(params.Snapshots)
            this.Snapshots = obj;
        }
        this.ImportSpecialKey = 'ImportSpecialKey' in params ? params.ImportSpecialKey : null;
        this.ImportOriginTable = 'ImportOriginTable' in params ? params.ImportOriginTable : null;

        if (params.KeyFile) {
            let obj = new KeyFile();
            obj.deserialize(params.KeyFile)
            this.KeyFile = obj;
        }
        this.NewTableGroupId = 'NewTableGroupId' in params ? params.NewTableGroupId : null;
        this.NewTableName = 'NewTableName' in params ? params.NewTableName : null;

    }
}

/**
 * 描述每个实例（应用，大区或表）处理过程中可能出现的错误详情。
 * @class
 */
class ErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 错误信息
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
 * 表格组详细信息
 * @class
 */
class TableGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表格组ID
         * @type {string || null}
         */
        this.TableGroupId = null;

        /**
         * 表格组名称
         * @type {string || null}
         */
        this.TableGroupName = null;

        /**
         * 表格组创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 表格组包含的表格数量
         * @type {number || null}
         */
        this.TableCount = null;

        /**
         * 表格组包含的表格存储总量（MB）
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TableGroupId = 'TableGroupId' in params ? params.TableGroupId : null;
        this.TableGroupName = 'TableGroupName' in params ? params.TableGroupName : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.TableCount = 'TableCount' in params ? params.TableCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

module.exports = {
    ImportSnapshotsResponse: ImportSnapshotsResponse,
    CompareTablesInfo: CompareTablesInfo,
    ModifyClusterNameRequest: ModifyClusterNameRequest,
    ModifyTableGroupNameResponse: ModifyTableGroupNameResponse,
    DescribeTableTagsRequest: DescribeTableTagsRequest,
    ModifyClusterPasswordResponse: ModifyClusterPasswordResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    DeleteTableIndexResponse: DeleteTableIndexResponse,
    TableRollbackResultNew: TableRollbackResultNew,
    ApplyStatus: ApplyStatus,
    RegionInfo: RegionInfo,
    DescribeTablesResponse: DescribeTablesResponse,
    ModifySnapshotsResponse: ModifySnapshotsResponse,
    UpdateApplyResponse: UpdateApplyResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    SelectedTableWithField: SelectedTableWithField,
    DeleteTableIndexRequest: DeleteTableIndexRequest,
    ProxyMachineInfo: ProxyMachineInfo,
    DescribeTasksResponse: DescribeTasksResponse,
    DeleteTablesRequest: DeleteTablesRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    SetTableDataFlowResponse: SetTableDataFlowResponse,
    SelectedTableInfoNew: SelectedTableInfoNew,
    ModifyClusterPasswordRequest: ModifyClusterPasswordRequest,
    DescribeMachineResponse: DescribeMachineResponse,
    DeleteTableDataFlowRequest: DeleteTableDataFlowRequest,
    DeleteTableGroupRequest: DeleteTableGroupRequest,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    TagsInfoOfTableGroup: TagsInfoOfTableGroup,
    DescribeApplicationsResponse: DescribeApplicationsResponse,
    CreateTableGroupRequest: CreateTableGroupRequest,
    ModifyClusterMachineResponse: ModifyClusterMachineResponse,
    TagsInfoOfTable: TagsInfoOfTable,
    DeleteIdlFilesResponse: DeleteIdlFilesResponse,
    FieldInfo: FieldInfo,
    ModifyTableTagsRequest: ModifyTableTagsRequest,
    MergeTableResult: MergeTableResult,
    ApplyResult: ApplyResult,
    DescribeTasksRequest: DescribeTasksRequest,
    SnapshotInfoNew: SnapshotInfoNew,
    Application: Application,
    ClearTablesResponse: ClearTablesResponse,
    DescribeIdlFileInfosRequest: DescribeIdlFileInfosRequest,
    ModifyTableTagsResponse: ModifyTableTagsResponse,
    SnapshotResult: SnapshotResult,
    ModifyCensorshipRequest: ModifyCensorshipRequest,
    ClusterInfo: ClusterInfo,
    DisableRestProxyRequest: DisableRestProxyRequest,
    DescribeTablesInRecycleResponse: DescribeTablesInRecycleResponse,
    ModifyTablesResponse: ModifyTablesResponse,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    ModifyTableGroupTagsResponse: ModifyTableGroupTagsResponse,
    ModifyClusterTagsRequest: ModifyClusterTagsRequest,
    CreateSnapshotsRequest: CreateSnapshotsRequest,
    DescribeTableGroupTagsResponse: DescribeTableGroupTagsResponse,
    SetTableIndexRequest: SetTableIndexRequest,
    ModifyTableQuotasResponse: ModifyTableQuotasResponse,
    RecoverRecycleTablesRequest: RecoverRecycleTablesRequest,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    DeleteTablesResponse: DeleteTablesResponse,
    ModifyTableGroupNameRequest: ModifyTableGroupNameRequest,
    DescribeTableGroupsRequest: DescribeTableGroupsRequest,
    DescribeUinInWhitelistRequest: DescribeUinInWhitelistRequest,
    MergeTablesDataRequest: MergeTablesDataRequest,
    CreateClusterRequest: CreateClusterRequest,
    ModifyTableGroupTagsRequest: ModifyTableGroupTagsRequest,
    EnableRestProxyRequest: EnableRestProxyRequest,
    ModifyTableQuotasRequest: ModifyTableQuotasRequest,
    CompareIdlFilesResponse: CompareIdlFilesResponse,
    CreateTablesResponse: CreateTablesResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    MergeTablesInfo: MergeTablesInfo,
    ModifyClusterTagsResponse: ModifyClusterTagsResponse,
    DescribeClusterTagsResponse: DescribeClusterTagsResponse,
    TagsInfoOfCluster: TagsInfoOfCluster,
    SetTableIndexResponse: SetTableIndexResponse,
    ClearTablesRequest: ClearTablesRequest,
    DescribeIdlFileInfosResponse: DescribeIdlFileInfosResponse,
    ServerMachineInfo: ServerMachineInfo,
    CreateSnapshotsResponse: CreateSnapshotsResponse,
    IdlFileInfo: IdlFileInfo,
    DisableRestProxyResponse: DisableRestProxyResponse,
    TagInfoUnit: TagInfoUnit,
    CreateClusterResponse: CreateClusterResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    ServerDetailInfo: ServerDetailInfo,
    TableInfoNew: TableInfoNew,
    TaskInfoNew: TaskInfoNew,
    DeleteIdlFilesRequest: DeleteIdlFilesRequest,
    CreateBackupResponse: CreateBackupResponse,
    KeyFile: KeyFile,
    VerifyIdlFilesResponse: VerifyIdlFilesResponse,
    DescribeTableTagsResponse: DescribeTableTagsResponse,
    CreateTableGroupResponse: CreateTableGroupResponse,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    VerifyIdlFilesRequest: VerifyIdlFilesRequest,
    EnableRestProxyResponse: EnableRestProxyResponse,
    ModifyClusterNameResponse: ModifyClusterNameResponse,
    ModifyTablesRequest: ModifyTablesRequest,
    SetTableDataFlowRequest: SetTableDataFlowRequest,
    DescribeTableGroupTagsRequest: DescribeTableGroupTagsRequest,
    DescribeTablesInRecycleRequest: DescribeTablesInRecycleRequest,
    DescribeTablesRequest: DescribeTablesRequest,
    KafkaInfo: KafkaInfo,
    DeleteTableDataFlowResponse: DeleteTableDataFlowResponse,
    UpdateApplyRequest: UpdateApplyRequest,
    ModifyTableMemosRequest: ModifyTableMemosRequest,
    DescribeUinInWhitelistResponse: DescribeUinInWhitelistResponse,
    SnapshotInfo: SnapshotInfo,
    ParsedTableInfoNew: ParsedTableInfoNew,
    RollbackTablesResponse: RollbackTablesResponse,
    MachineInfo: MachineInfo,
    CreateBackupRequest: CreateBackupRequest,
    TableResultNew: TableResultNew,
    CreateTablesRequest: CreateTablesRequest,
    DescribeClusterTagsRequest: DescribeClusterTagsRequest,
    RecoverRecycleTablesResponse: RecoverRecycleTablesResponse,
    MergeTablesDataResponse: MergeTablesDataResponse,
    DescribeApplicationsRequest: DescribeApplicationsRequest,
    DescribeTableGroupsResponse: DescribeTableGroupsResponse,
    DeleteTableGroupResponse: DeleteTableGroupResponse,
    PoolInfo: PoolInfo,
    DescribeMachineRequest: DescribeMachineRequest,
    RollbackTablesRequest: RollbackTablesRequest,
    ModifyCensorshipResponse: ModifyCensorshipResponse,
    CompareIdlFilesRequest: CompareIdlFilesRequest,
    ProxyDetailInfo: ProxyDetailInfo,
    IdlFileInfoWithoutContent: IdlFileInfoWithoutContent,
    ModifyTableMemosResponse: ModifyTableMemosResponse,
    ModifyClusterMachineRequest: ModifyClusterMachineRequest,
    Filter: Filter,
    ModifySnapshotsRequest: ModifySnapshotsRequest,
    ImportSnapshotsRequest: ImportSnapshotsRequest,
    ErrorInfo: ErrorInfo,
    TableGroupInfo: TableGroupInfo,

}
