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
 * DescribeImageStat请求参数结构体
 * @class
 */
class DescribeImageStatRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 审核类型 1: 机器审核; 2: 人工审核
         * @type {number || null}
         */
        this.AuditType = null;

        /**
         * 查询条件
         * @type {Array.<Filters> || null}
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
        this.AuditType = 'AuditType' in params ? params.AuditType : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filters();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 识别量统计
 * @class
 */
class TrendCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总调用时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalHour = null;

        /**
         * 通过量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassCount = null;

        /**
         * 通过时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PassHour = null;

        /**
         * 违规量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EvilCount = null;

        /**
         * 违规时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EvilHour = null;

        /**
         * 疑似违规量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuspectCount = null;

        /**
         * 疑似违规时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuspectHour = null;

        /**
         * 日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalHour = 'TotalHour' in params ? params.TotalHour : null;
        this.PassCount = 'PassCount' in params ? params.PassCount : null;
        this.PassHour = 'PassHour' in params ? params.PassHour : null;
        this.EvilCount = 'EvilCount' in params ? params.EvilCount : null;
        this.EvilHour = 'EvilHour' in params ? params.EvilHour : null;
        this.SuspectCount = 'SuspectCount' in params ? params.SuspectCount : null;
        this.SuspectHour = 'SuspectHour' in params ? params.SuspectHour : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * 坐标
 * @class
 */
class Location extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角横坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * 左上角纵坐标
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 检测框的旋转角度
         * @type {number || null}
         */
        this.Rotate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

    }
}

/**
 * 分类模型命中子标签结果
 * @class
 */
class LabelDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 子标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子标签分数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

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
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * ImageModeration返回参数结构体
 * @class
 */
class ImageModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否属于恶意类型。
0：正常，1：可疑；
         * @type {number || null}
         */
        this.HitFlag = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签名称，如色情--性行为；当未命中子标签时，返回空字符串；
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。
（如：色情 99.99，则该样本属于色情的置信度非常高。）
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 智能模型的识别结果，包括涉黄、广告等令人反感、不安全或不适宜的内容类型识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LabelResult> || null}
         */
        this.LabelResults = null;

        /**
         * 物体检测模型的审核结果，包括实体、广告台标/二维码等物体坐标信息与内容审核信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectResult> || null}
         */
        this.ObjectResults = null;

        /**
         * OCR识别后的文本识别结果，包括文本所处图片的OCR坐标信息以及图片文本的识别结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OcrResult> || null}
         */
        this.OcrResults = null;

        /**
         * 基于图片风险库识别的结果。
风险库包括不安全黑库与正常白库的结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LibResult> || null}
         */
        this.LibResults = null;

        /**
         * 请求参数中的DataId。
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 您在入参时所填入的Biztype参数。 -- 该字段暂未开放。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

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
        this.HitFlag = 'HitFlag' in params ? params.HitFlag : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.LabelResults) {
            this.LabelResults = new Array();
            for (let z in params.LabelResults) {
                let obj = new LabelResult();
                obj.deserialize(params.LabelResults[z]);
                this.LabelResults.push(obj);
            }
        }

        if (params.ObjectResults) {
            this.ObjectResults = new Array();
            for (let z in params.ObjectResults) {
                let obj = new ObjectResult();
                obj.deserialize(params.ObjectResults[z]);
                this.ObjectResults.push(obj);
            }
        }

        if (params.OcrResults) {
            this.OcrResults = new Array();
            for (let z in params.OcrResults) {
                let obj = new OcrResult();
                obj.deserialize(params.OcrResults[z]);
                this.OcrResults.push(obj);
            }
        }

        if (params.LibResults) {
            this.LibResults = new Array();
            for (let z in params.LibResults) {
                let obj = new LibResult();
                obj.deserialize(params.LibResults[z]);
                this.LibResults.push(obj);
            }
        }
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImageModeration请求参数结构体
 * @class
 */
class ImageModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 数据ID，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 数据Base64编码，图片检测接口为图片文件内容，大小不能超过5M
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 图片资源访问链接，__与FileContent参数必须二选一输入__
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 截帧频率，GIF图/长图检测专用，默认值为0，表示只会检测GIF图/长图的第一帧
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * GIF图/长图检测专用，代表均匀最大截帧数量，默认值为1（即只取GIF第一张，或长图不做切分处理（可能会造成处理超时））。
         * @type {number || null}
         */
        this.MaxFrames = null;

        /**
         * 账号相关信息字段，填入后可识别违规风险账号。
         * @type {User || null}
         */
        this.User = null;

        /**
         * 设备相关信息字段，填入后可识别违规风险设备。
         * @type {Device || null}
         */
        this.Device = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.MaxFrames = 'MaxFrames' in params ? params.MaxFrames : null;

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

    }
}

/**
 * DescribeImsList返回参数结构体
 * @class
 */
class DescribeImsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回列表数据----非必选，该参数暂未对外开放
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImsDetail> || null}
         */
        this.ImsDetailSet = null;

        /**
         * 总条数
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

        if (params.ImsDetailSet) {
            this.ImsDetailSet = new Array();
            for (let z in params.ImsDetailSet) {
                let obj = new ImsDetail();
                obj.deserialize(params.ImsDetailSet[z]);
                this.ImsDetailSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OCR结果检测详情
 * @class
 */
class OcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景识别结果
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签检测结果
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * ocr结果详情
         * @type {Array.<OcrTextDetail> || null}
         */
        this.Details = null;

        /**
         * ocr识别出的文本结果
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new OcrTextDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * User结果
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务用户ID 如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 业务用户ID类型 "1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 性别 默认0 未知 1 男性 2 女性
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄 默认0 未知
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 用户等级，默认0 未知 1 低 2 中 3 高
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 用户简介，长度不超过5000字
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 用户头像图片链接
         * @type {string || null}
         */
        this.HeadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.HeadUrl = 'HeadUrl' in params ? params.HeadUrl : null;

    }
}

/**
 * 分类模型命中结果
 * @class
 */
class LabelResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景识别结果
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 分类模型命中子标签结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LabelDetailItem> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LabelDetailItem();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * Device结果
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发表消息设备IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Mac地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 设备指纹Token
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * 设备指纹ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备序列号
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * IOS设备，Identifier For Advertising（广告标识符）
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
         * @type {string || null}
         */
        this.IDFV = null;

        /**
         * IP地址类型 0 代表ipv4 1 代表ipv6
         * @type {number || null}
         */
        this.IpType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;
        this.IpType = 'IpType' in params ? params.IpType : null;

    }
}

/**
 * 机器审核详情列表数据项
 * @class
 */
class ImsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 数据方式， 0：我审，1：人审
         * @type {number || null}
         */
        this.DataSource = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * ----非必选，该参数暂未对外开放
         * @type {number || null}
         */
        this.EvilType = null;

        /**
         * 机器审核时间
         * @type {string || null}
         */
        this.ModerationTime = null;

        /**
         * 最后更新人
         * @type {string || null}
         */
        this.UpdateUser = null;

        /**
         * 内容RequestId
         * @type {string || null}
         */
        this.ContentId = null;

        /**
         * 自主审核结果
         * @type {number || null}
         */
        this.OperEvilType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.ModerationTime = 'ModerationTime' in params ? params.ModerationTime : null;
        this.UpdateUser = 'UpdateUser' in params ? params.UpdateUser : null;
        this.ContentId = 'ContentId' in params ? params.ContentId : null;
        this.OperEvilType = 'OperEvilType' in params ? params.OperEvilType : null;

    }
}

/**
 * 违规数据分布
 * @class
 */
class EvilCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * ----非必选，该参数功能暂未对外开放
         * @type {string || null}
         */
        this.EvilType = null;

        /**
         * 分布类型总量
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 实体检测结果详情：实体、广告台标、二维码
 * @class
 */
class ObjectResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景识别结果
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义图片。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 实体名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * 实体检测结果明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ObjectDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Names = 'Names' in params ? params.Names : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ObjectDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * OCR文本结果详情
 * @class
 */
class OcrTextDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * OCR文本内容
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 仅当Label为Custom自定义关键词时有效，表示自定义库id
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 仅当Label为Custom自定义关键词时有效，表示自定义库名称
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 该标签下命中的关键词
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * OCR位置
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * OCR文本识别置信度
         * @type {number || null}
         */
        this.Rate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Rate = 'Rate' in params ? params.Rate : null;

    }
}

/**
 * 实体检测结果明细，当检测场景为实体、广告台标、二维码时表示模型检测目标框的标签名称、标签值、标签分数以及检测框的位置信息。
 * @class
 */
class ObjectDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 序号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 标签名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 标签值，
当标签为二维码时，表示URL地址，如Name为QrCode时，Value为"http//abc.com/aaa"
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 分数
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 检测框坐标
         * @type {Location || null}
         */
        this.Location = null;

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
        this.Value = 'Value' in params ? params.Value : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
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
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DescribeImageStat返回参数结构体
 * @class
 */
class DescribeImageStatResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果统计
         * @type {Overview || null}
         */
        this.Overview = null;

        /**
         * 识别量统计
         * @type {Array.<TrendCount> || null}
         */
        this.TrendCount = null;

        /**
         * 违规数据分布
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EvilCount> || null}
         */
        this.EvilCount = null;

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

        if (params.Overview) {
            let obj = new Overview();
            obj.deserialize(params.Overview)
            this.Overview = obj;
        }

        if (params.TrendCount) {
            this.TrendCount = new Array();
            for (let z in params.TrendCount) {
                let obj = new TrendCount();
                obj.deserialize(params.TrendCount[z]);
                this.TrendCount.push(obj);
            }
        }

        if (params.EvilCount) {
            this.EvilCount = new Array();
            for (let z in params.EvilCount) {
                let obj = new EvilCount();
                obj.deserialize(params.EvilCount[z]);
                this.EvilCount.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImsList请求参数结构体
 * @class
 */
class DescribeImsListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页 页索引
         * @type {number || null}
         */
        this.PageIndex = null;

        /**
         * 分页条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
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
        this.PageIndex = 'PageIndex' in params ? params.PageIndex : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 黑白库结果明细
 * @class
 */
class LibResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景识别结果
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 子标签检测结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubLabel = null;

        /**
         * 该标签模型命中的分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 黑白库结果明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LibDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.SubLabel = 'SubLabel' in params ? params.SubLabel : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new LibDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * 识别结果统计
 * @class
 */
class Overview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总调用量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 总调用时长
         * @type {number || null}
         */
        this.TotalHour = null;

        /**
         * 通过量
         * @type {number || null}
         */
        this.PassCount = null;

        /**
         * 通过时长
         * @type {number || null}
         */
        this.PassHour = null;

        /**
         * 违规量
         * @type {number || null}
         */
        this.EvilCount = null;

        /**
         * 违规时长
         * @type {number || null}
         */
        this.EvilHour = null;

        /**
         * 疑似违规量
         * @type {number || null}
         */
        this.SuspectCount = null;

        /**
         * 疑似违规时长
         * @type {number || null}
         */
        this.SuspectHour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.TotalHour = 'TotalHour' in params ? params.TotalHour : null;
        this.PassCount = 'PassCount' in params ? params.PassCount : null;
        this.PassHour = 'PassHour' in params ? params.PassHour : null;
        this.EvilCount = 'EvilCount' in params ? params.EvilCount : null;
        this.EvilHour = 'EvilHour' in params ? params.EvilHour : null;
        this.SuspectCount = 'SuspectCount' in params ? params.SuspectCount : null;
        this.SuspectHour = 'SuspectHour' in params ? params.SuspectHour : null;

    }
}

/**
 * 自定义库/黑白库明细
 * @class
 */
class LibDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 序号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 仅当Label为Custom自定义关键词时有效，表示自定义库id
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 仅当Label为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

        /**
         * 图片ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 自定义标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 命中的模型分值
         * @type {number || null}
         */
        this.Score = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 图片过滤条件
 * @class
 */
class Filters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询字段：
策略BizType
子账号SubUin
日期区间DateRange
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 查询值
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
        this.Values = 'Values' in params ? params.Values : null;

    }
}

module.exports = {
    DescribeImageStatRequest: DescribeImageStatRequest,
    TrendCount: TrendCount,
    Location: Location,
    LabelDetailItem: LabelDetailItem,
    ImageModerationResponse: ImageModerationResponse,
    ImageModerationRequest: ImageModerationRequest,
    DescribeImsListResponse: DescribeImsListResponse,
    OcrResult: OcrResult,
    User: User,
    LabelResult: LabelResult,
    Device: Device,
    ImsDetail: ImsDetail,
    EvilCount: EvilCount,
    ObjectResult: ObjectResult,
    OcrTextDetail: OcrTextDetail,
    ObjectDetail: ObjectDetail,
    Filter: Filter,
    DescribeImageStatResponse: DescribeImageStatResponse,
    DescribeImsListRequest: DescribeImsListRequest,
    LibResult: LibResult,
    Overview: Overview,
    LibDetail: LibDetail,
    Filters: Filters,

}