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
 * DetectProductBeta返回参数结构体
 * @class
 */
class DetectProductBetaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检测到的图片中的商品位置和品类预测。 
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。 
最多可以输出__3组__检测结果。
         * @type {Array.<RegionDetected> || null}
         */
        this.RegionDetected = null;

        /**
         * 图像识别出的商品的详细信息。 
当图像中检测到多个物品时，会对显著性最高的进行识别。
         * @type {ProductInfo || null}
         */
        this.ProductInfo = null;

        /**
         * 相似商品信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProductInfo> || null}
         */
        this.ProductInfoList = null;

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

        if (params.RegionDetected) {
            this.RegionDetected = new Array();
            for (let z in params.RegionDetected) {
                let obj = new RegionDetected();
                obj.deserialize(params.RegionDetected[z]);
                this.RegionDetected.push(obj);
            }
        }

        if (params.ProductInfo) {
            let obj = new ProductInfo();
            obj.deserialize(params.ProductInfo)
            this.ProductInfo = obj;
        }

        if (params.ProductInfoList) {
            this.ProductInfoList = new Array();
            for (let z in params.ProductInfoList) {
                let obj = new ProductInfo();
                obj.deserialize(params.ProductInfoList[z]);
                this.ProductInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectDisgust请求参数结构体
 * @class
 */
class DetectDisgustRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * SearchImage返回参数结构体
 * @class
 */
class SearchImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果数量。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 图片信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfos = null;

        /**
         * 输入图的主体信息。
若启用主体识别且在请求中指定了类目ID或主体区域，以指定的主体为准。若启用主体识别且没有指定，以最大面积主体为准。
注意：此字段可能返回 null，表示取不到有效值。服务类型为商品图像搜索时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObjectInfo || null}
         */
        this.Object = null;

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

        if (params.ImageInfos) {
            this.ImageInfos = new Array();
            for (let z in params.ImageInfos) {
                let obj = new ImageInfo();
                obj.deserialize(params.ImageInfos[z]);
                this.ImageInfos.push(obj);
            }
        }

        if (params.Object) {
            let obj = new ObjectInfo();
            obj.deserialize(params.Object)
            this.Object = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RecognizeCarPro请求参数结构体
 * @class
 */
class RecognizeCarProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
支持的图片格式：PNG、JPG、JPEG、BMP，暂不支持GIF格式。支持的图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * RecognizeCarPro返回参数结构体
 * @class
 */
class RecognizeCarProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汽车的四个矩形顶点坐标，如果图片中存在多辆车，则输出最大车辆的坐标。
         * @type {Array.<Coord> || null}
         */
        this.CarCoords = null;

        /**
         * 车辆属性识别的结果数组，如果识别到多辆车，则会输出每辆车的top1结果。
注意：置信度是指车牌信息置信度。
         * @type {Array.<CarTagItem> || null}
         */
        this.CarTags = null;

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

        if (params.CarCoords) {
            this.CarCoords = new Array();
            for (let z in params.CarCoords) {
                let obj = new Coord();
                obj.deserialize(params.CarCoords[z]);
                this.CarCoords.push(obj);
            }
        }

        if (params.CarTags) {
            this.CarTags = new Array();
            for (let z in params.CarTags) {
                let obj = new CarTagItem();
                obj.deserialize(params.CarTags[z]);
                this.CarTags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImage请求参数结构体
 * @class
 */
class CreateImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 物品ID，最多支持64个字符。 
若EntityId已存在，则对其追加图片。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 图片名称，最多支持64个字符， 
同一个EntityId，最大支持10张图。
         * @type {string || null}
         */
        this.PicName = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。  
Url、Image必须提供一个，如果都提供，只使用 Url。 
图片分辨率不超过4096\*4096。
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
注意：开启主体识别分辨率不超过2000\*2000，图片长宽比小于10（长/短 < 10）。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 用户自定义的内容，最多支持4096个字符，查询时原样带回。
         * @type {string || null}
         */
        this.CustomContent = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
图片分辨率不超过4096\*4096。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
注意：开启主体识别分辨率不超过2000\*2000，图片长宽比小于10（长/短 < 10）。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 图片自定义标签，最多不超过10个，格式为JSON。
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * 是否需要启用主体识别，默认为**TRUE**。
1.  为**TRUE**时，启用主体识别，返回主体信息。若没有指定**ImageRect**，自动提取最大面积主体创建图片并进行主体识别。主体识别结果可在**Response**中获取。
2. 为**FALSE**时，不启用主体识别，不返回主体信息。若没有指定**ImageRect**，以整张图创建图片。
注意：服务类型为商品图像搜索时生效。
         * @type {boolean || null}
         */
        this.EnableDetect = null;

        /**
         * 图像类目ID。
若设置类目ID，提取对应类目的主体创建图片。
注意：服务类型为商品图像搜索时生效。
类目信息：
0：上衣。
1：裙装。
2：下装。
3：包。
4：鞋。
5：配饰。
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 图像主体区域。
若设置主体区域，提取指定的区域创建图片。
         * @type {Rect || null}
         */
        this.ImageRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.PicName = 'PicName' in params ? params.PicName : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.CustomContent = 'CustomContent' in params ? params.CustomContent : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.EnableDetect = 'EnableDetect' in params ? params.EnableDetect : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;

        if (params.ImageRect) {
            let obj = new Rect();
            obj.deserialize(params.ImageRect)
            this.ImageRect = obj;
        }

    }
}

/**
 * DetectLabelBeta请求参数结构体
 * @class
 */
class DetectLabelBetaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 本次调用支持的识别场景，可选值如下：
WEB，针对网络图片优化;
CAMERA，针对手机摄像头拍摄图片优化;
ALBUM，针对手机相册、网盘产品优化;
NEWS，针对新闻、资讯、广电等行业优化；
NONECAM，非实拍图；
LOCATION，主体位置识别；
如果不传此参数，则默认为WEB。

支持多场景（Scenes）一起检测。例如，使用 Scenes=["WEB", "CAMERA"]，即对一张图片使用两个模型同时检测，输出两套识别结果。
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;

    }
}

/**
 * DeleteImages返回参数结构体
 * @class
 */
class DeleteImagesResponse extends  AbstractModel {
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
 * CropImage请求参数结构体
 * @class
 */
class CropImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要裁剪区域的宽度，与Height共同组成所需裁剪的图片宽高比例；
输入数字请大于0、小于图片宽度的像素值；
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 需要裁剪区域的高度，与Width共同组成所需裁剪的图片宽高比例；
输入数字请请大于0、小于图片高度的像素值；
宽高比例（Width : Height）会简化为最简分数，即如果Width输入10、Height输入20，会简化为1：2。
Width : Height建议取值在[1, 2.5]之间，超过这个范围可能会影响效果；
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * DetectProduct请求参数结构体
 * @class
 */
class DetectProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * 图像的主体信息。
 * @class
 */
class ObjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像主体区域。
         * @type {Box || null}
         */
        this.Box = null;

        /**
         * 主体类别ID。
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 整张图颜色信息。
         * @type {Array.<ColorInfo> || null}
         */
        this.Colors = null;

        /**
         * 属性信息。
         * @type {Array.<Attribute> || null}
         */
        this.Attributes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Box) {
            let obj = new Box();
            obj.deserialize(params.Box)
            this.Box = obj;
        }
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;

        if (params.Colors) {
            this.Colors = new Array();
            for (let z in params.Colors) {
                let obj = new ColorInfo();
                obj.deserialize(params.Colors[z]);
                this.Colors.push(obj);
            }
        }

        if (params.Attributes) {
            this.Attributes = new Array();
            for (let z in params.Attributes) {
                let obj = new Attribute();
                obj.deserialize(params.Attributes[z]);
                this.Attributes.push(obj);
            }
        }

    }
}

/**
 * 检测到的图片中的商品位置和品类预测。 
当图片中存在多个商品时，输出多组坐标，按照__显著性__排序（综合考虑面积、是否在中心、检测算法置信度）。 
最多可以输出__3组__检测结果。
 * @class
 */
class RegionDetected extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品的品类预测结果。 
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。
         * @type {string || null}
         */
        this.Category = null;

        /**
         * 商品品类预测的置信度
         * @type {number || null}
         */
        this.CategoryScore = null;

        /**
         * 检测到的主体在图片中的坐标，表示为矩形框的四个顶点坐标
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
        this.Category = 'Category' in params ? params.Category : null;
        this.CategoryScore = 'CategoryScore' in params ? params.CategoryScore : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }

    }
}

/**
 * DescribeGroups请求参数结构体
 * @class
 */
class DescribeGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始序号，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 图库ID，如果不为空，则返回指定库信息。
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DetectMisbehavior返回参数结构体
 * @class
 */
class DetectMisbehaviorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对于图片中包含不良行为的置信度，取值[0,1]，一般超过0.5则表明可能包含不良行为内容；
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 图像中最可能包含的不良行为类别，包括赌博、打架斗殴、吸毒等。
         * @type {string || null}
         */
        this.Type = null;

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
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssessQuality返回参数结构体
 * @class
 */
class AssessQualityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取值为TRUE或FALSE，TRUE为长图，FALSE为正常图，长图定义为长宽比大于等于3或小于等于1/3的图片。
         * @type {boolean || null}
         */
        this.LongImage = null;

        /**
         * 取值为TRUE或FALSE，TRUE为黑白图，FALSE为否。黑白图即灰度图，指红绿蓝三个通道都是以灰度色阶显示的图片，并非视觉上的“黑白图片”。
         * @type {boolean || null}
         */
        this.BlackAndWhite = null;

        /**
         * 取值为TRUE或FALSE，TRUE为小图，FALSE为否, 小图定义为最长边小于179像素的图片。当一张图片被判断为小图时，不建议做推荐和展示，其他字段统一输出为0或FALSE。
         * @type {boolean || null}
         */
        this.SmallImage = null;

        /**
         * 取值为TRUE或FALSE，TRUE为大图，FALSE为否，定义为最短边大于1000像素的图片
         * @type {boolean || null}
         */
        this.BigImage = null;

        /**
         * 取值为TRUE或FALSE，TRUE为纯色图或纯文字图，即没有内容或只有简单内容的图片，FALSE为正常图片。
         * @type {boolean || null}
         */
        this.PureImage = null;

        /**
         * 综合评分。图像清晰度的得分，对图片的噪声、曝光、模糊、压缩等因素进行综合评估，取值为[0, 100]，值越大，越清晰。一般大于50为较清晰图片，标准可以自行把握。
         * @type {number || null}
         */
        this.ClarityScore = null;

        /**
         * 综合评分。图像美观度得分， 从构图、色彩等多个艺术性维度评价图片，取值为[0, 100]，值越大，越美观。一般大于50为较美观图片，标准可以自行把握。
         * @type {number || null}
         */
        this.AestheticScore = null;

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
        this.LongImage = 'LongImage' in params ? params.LongImage : null;
        this.BlackAndWhite = 'BlackAndWhite' in params ? params.BlackAndWhite : null;
        this.SmallImage = 'SmallImage' in params ? params.SmallImage : null;
        this.BigImage = 'BigImage' in params ? params.BigImage : null;
        this.PureImage = 'PureImage' in params ? params.PureImage : null;
        this.ClarityScore = 'ClarityScore' in params ? params.ClarityScore : null;
        this.AestheticScore = 'AestheticScore' in params ? params.AestheticScore : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectDisgust返回参数结构体
 * @class
 */
class DetectDisgustResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对于图片中包含恶心内容的置信度，取值[0,1]，一般超过0.5则表明可能是恶心图片。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 与图像内容最相似的恶心内容的类别，包含腐烂、密集、畸形、血腥、蛇、虫子、牙齿等。
         * @type {string || null}
         */
        this.Type = null;

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
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchImage请求参数结构体
 * @class
 */
class SearchImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库名称。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 
图片分辨率不超4096\*4096。 
Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
注意：开启主体识别分辨率不超过2000\*2000，图片长宽比小于10（长/短 < 10）。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片 base64 数据，base64 编码后大小不可超过5M。 
图片分辨率不超过4096\*4096。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
注意：开启主体识别分辨率不超过2000\*2000，图片长宽比小于10（长/短 < 10）。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 返回数量，默认值为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 起始序号，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 出参Score中，只有超过**MatchThreshold**值的结果才会返回。默认为0
         * @type {number || null}
         */
        this.MatchThreshold = null;

        /**
         * 针对入库时提交的Tags信息进行条件过滤。支持>、>=、 <、 <=、=，!=，多个条件之间支持AND和OR进行连接。
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 图像主体区域。
若设置主体区域，提取指定的区域进行检索。
         * @type {ImageRect || null}
         */
        this.ImageRect = null;

        /**
         * 是否需要启用主体识别，默认为**TRUE** 。
1. 为**TRUE**时，启用主体识别，返回主体信息。若没有指定**ImageRect**，自动提取最大面积主体进行检索并进行主体识别。主体识别结果可在**Response中**获取。
2. 为**FALSE**时，不启用主体识别，不返回主体信息。若没有指定**ImageRect**，以整张图检索图片。
注意：服务类型为商品图像搜索时生效。
         * @type {boolean || null}
         */
        this.EnableDetect = null;

        /**
         * 图像类目ID。
若设置类目ID，提取对应类目的主体进行检索。
注意：服务类型为商品图像搜索时生效。
类目信息：
0：上衣。
1：裙装。
2：下装。
3：包。
4：鞋。
5：配饰。
         * @type {number || null}
         */
        this.CategoryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.MatchThreshold = 'MatchThreshold' in params ? params.MatchThreshold : null;
        this.Filter = 'Filter' in params ? params.Filter : null;

        if (params.ImageRect) {
            let obj = new ImageRect();
            obj.deserialize(params.ImageRect)
            this.ImageRect = obj;
        }
        this.EnableDetect = 'EnableDetect' in params ? params.EnableDetect : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;

    }
}

/**
 * RecognizeCar返回参数结构体
 * @class
 */
class RecognizeCarResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汽车的四个矩形顶点坐标，如果图片中存在多辆车，则输出最大车辆的坐标。
         * @type {Array.<Coord> || null}
         */
        this.CarCoords = null;

        /**
         * 车辆属性识别的结果数组，如果识别到多辆车，则会输出每辆车的top1结果。
         * @type {Array.<CarTagItem> || null}
         */
        this.CarTags = null;

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

        if (params.CarCoords) {
            this.CarCoords = new Array();
            for (let z in params.CarCoords) {
                let obj = new Coord();
                obj.deserialize(params.CarCoords[z]);
                this.CarCoords.push(obj);
            }
        }

        if (params.CarTags) {
            this.CarTags = new Array();
            for (let z in params.CarTags) {
                let obj = new CarTagItem();
                obj.deserialize(params.CarTags[z]);
                this.CarTags.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectLabel请求参数结构体
 * @class
 */
class DetectLabelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 本次调用支持的识别场景，可选值如下：
WEB，针对网络图片优化;
CAMERA，针对手机摄像头拍摄图片优化;
ALBUM，针对手机相册、网盘产品优化;
NEWS，针对新闻、资讯、广电等行业优化；
如果不传此参数，则默认为WEB。

支持多场景（Scenes）一起检测。例如，使用 Scenes=["WEB", "CAMERA"]，即对一张图片使用两个模型同时检测，输出两套识别结果。
         * @type {Array.<string> || null}
         */
        this.Scenes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.Scenes = 'Scenes' in params ? params.Scenes : null;

    }
}

/**
 * DetectLabel返回参数结构体
 * @class
 */
class DetectLabelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web网络版标签结果数组。如未选择WEB场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.Labels = null;

        /**
         * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.CameraLabels = null;

        /**
         * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.AlbumLabels = null;

        /**
         * News新闻版标签结果数组。如未选择NEWS场景，则为空。
新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.NewsLabels = null;

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

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.CameraLabels) {
            this.CameraLabels = new Array();
            for (let z in params.CameraLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.CameraLabels[z]);
                this.CameraLabels.push(obj);
            }
        }

        if (params.AlbumLabels) {
            this.AlbumLabels = new Array();
            for (let z in params.AlbumLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.AlbumLabels[z]);
                this.AlbumLabels.push(obj);
            }
        }

        if (params.NewsLabels) {
            this.NewsLabels = new Array();
            for (let z in params.NewsLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.NewsLabels[z]);
                this.NewsLabels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnhanceImage返回参数结构体
 * @class
 */
class EnhanceImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增强后图片的base64编码。
         * @type {string || null}
         */
        this.EnhancedImage = null;

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
        this.EnhancedImage = 'EnhancedImage' in params ? params.EnhancedImage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图像识别出的商品的详细信息。 
当图像中检测到多个物品时，会对显著性最高的物品进行识别。
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1表示找到同款商品，以下字段为同款商品信息； 
0表示未找到同款商品， 具体商品信息为空（参考价格、名称、品牌等），仅提供商品类目和参考图片（商品库中找到的最相似图片，供参考）。  
是否找到同款的判断依据为Score分值，分值越大则同款的可能性越大。
         * @type {number || null}
         */
        this.FindSKU = null;

        /**
         * 本商品在图片中的坐标，表示为矩形框的四个顶点坐标。
         * @type {Location || null}
         */
        this.Location = null;

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 商品品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 参考价格，综合多个信息源，仅供参考。
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 识别结果的商品类目。 
包含：鞋、图书音像、箱包、美妆个护、服饰、家电数码、玩具乐器、食品饮料、珠宝、家居家装、药品、酒水、绿植园艺、其他商品、非商品等。 
当类别为“非商品”时，除Location、Score和本字段之外的商品信息为空。
         * @type {string || null}
         */
        this.ProductCategory = null;

        /**
         * 输入图片中的主体物品和输出结果的相似度。分值越大，输出结果与输入图片是同款的可能性越高。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 搜索到的商品配图URL。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 百科词条列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LemmaInfo> || null}
         */
        this.LemmaInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FindSKU = 'FindSKU' in params ? params.FindSKU : null;

        if (params.Location) {
            let obj = new Location();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.ProductCategory = 'ProductCategory' in params ? params.ProductCategory : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Image = 'Image' in params ? params.Image : null;

        if (params.LemmaInfoList) {
            this.LemmaInfoList = new Array();
            for (let z in params.LemmaInfoList) {
                let obj = new LemmaInfo();
                obj.deserialize(params.LemmaInfoList[z]);
                this.LemmaInfoList.push(obj);
            }
        }

    }
}

/**
 * AssessQuality请求参数结构体
 * @class
 */
class AssessQualityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * DeleteImages请求参数结构体
 * @class
 */
class DeleteImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库名称。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 物品ID。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 图片名称，如果不指定本参数，则删除EntityId下所有的图片；否则删除指定的图。
         * @type {string || null}
         */
        this.PicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.PicName = 'PicName' in params ? params.PicName : null;

    }
}

/**
 * CreateGroup请求参数结构体
 * @class
 */
class CreateGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库ID，不可重复，仅支持字母、数字和下划线。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 图库名称描述。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 图库可容纳的最大图片数量。
         * @type {number || null}
         */
        this.MaxCapacity = null;

        /**
         * 简介。
         * @type {string || null}
         */
        this.Brief = null;

        /**
         * 访问限制默认为10qps，如需扩容请联系[在线客服](https://cloud.tencent.com/online-service)申请。
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * 图库类型，对应不同服务类型，默认为4。1～3为历史版本，不推荐。
参数值：
4：在自建图库中搜索相同原图，可支持裁剪、翻转、调色、加水印后的图片搜索，适用于图片版权保护、原图查询等场景。
5：在自建图库中搜索相同或相似的商品图片，适用于商品分类、检索、推荐等电商场景。
6：在自建图片库中搜索与输入图片高度相似的图片，适用于相似图案、logo、纹理等图像元素的搜索。
         * @type {number || null}
         */
        this.GroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.MaxCapacity = 'MaxCapacity' in params ? params.MaxCapacity : null;
        this.Brief = 'Brief' in params ? params.Brief : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;

    }
}

/**
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库名称。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 物品ID。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 图片名称。
         * @type {string || null}
         */
        this.PicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.PicName = 'PicName' in params ? params.PicName : null;

    }
}

/**
 * 具体坐标，可用来判断边界
 * @class
 */
class Rect extends  AbstractModel {
    constructor(){
        super();

        /**
         * x轴坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * y轴坐标
         * @type {number || null}
         */
        this.Y = null;

        /**
         * (x,y)坐标距离长度
         * @type {number || null}
         */
        this.Width = null;

        /**
         * (x,y)坐标距离高度
         * @type {number || null}
         */
        this.Height = null;

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

    }
}

/**
 * DetectProductBeta请求参数结构体
 * @class
 */
class DetectProductBetaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片限制：内测版仅支持jpg、jpeg，图片大小不超过1M，分辨率在25万到100万之间。 
建议先对图片进行压缩，以便提升处理速度。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过1M，分辨率在25万到100万之间。 
与ImageUrl同时存在时优先使用ImageUrl字段。
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * 是否需要百科信息 1：是，0: 否，默认是0
         * @type {number || null}
         */
        this.NeedLemma = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.NeedLemma = 'NeedLemma' in params ? params.NeedLemma : null;

    }
}

/**
 * 图像主体区域。
 * @class
 */
class Box extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图像主体区域。
         * @type {ImageRect || null}
         */
        this.Rect = null;

        /**
         * 置信度。
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

        if (params.Rect) {
            let obj = new ImageRect();
            obj.deserialize(params.Rect)
            this.Rect = obj;
        }
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * RecognizeCar请求参数结构体
 * @class
 */
class RecognizeCarRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
支持的图片格式：PNG、JPG、JPEG、BMP，暂不支持GIF格式。支持的图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * EnhanceImage请求参数结构体
 * @class
 */
class EnhanceImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，最大不超过250万像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * 图库信息。
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库Id。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 图库名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 图库简介。
         * @type {string || null}
         */
        this.Brief = null;

        /**
         * 图库容量。
         * @type {number || null}
         */
        this.MaxCapacity = null;

        /**
         * 该库的访问限频 。
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * 图库类型，对应不同服务类型，默认为1。建议手动调整为4～6，1～3为历史版本，不推荐。
参数值：
4：在自建图库中搜索相同原图，可支持裁剪、翻转、调色、加水印后的图片搜索，适用于图片版权保护、原图查询等场景。
5：在自建图库中搜索相同或相似的商品图片，适用于商品分类、检索、推荐等电商场景。
6：在自建图片库中搜索与输入图片高度相似的图片，适用于相似图案、logo、纹理等图像元素的搜索。
         * @type {number || null}
         */
        this.GroupType = null;

        /**
         * 图库图片数量。
         * @type {number || null}
         */
        this.PicCount = null;

        /**
         * 图库创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 图库更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Brief = 'Brief' in params ? params.Brief : null;
        this.MaxCapacity = 'MaxCapacity' in params ? params.MaxCapacity : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.PicCount = 'PicCount' in params ? params.PicCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CropImage返回参数结构体
 * @class
 */
class CropImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 裁剪区域左上角X坐标值
         * @type {number || null}
         */
        this.X = null;

        /**
         * 裁剪区域左上角Y坐标值
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 裁剪区域的宽度，单位为像素
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 裁剪区域的高度，单位为像素
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 原图宽度，单位为像素
         * @type {number || null}
         */
        this.OriginalWidth = null;

        /**
         * 原图高度，单位为像素
         * @type {number || null}
         */
        this.OriginalHeight = null;

        /**
         * 0：抠图正常；
1：原图过长，指原图的高度是宽度的1.8倍以上；
2：原图过宽，指原图的宽度是高度的1.8倍以上；
3：抠图区域过长，指抠图的高度是主体备选框高度的1.6倍以上；
4：抠图区域过宽，指当没有检测到人脸时，抠图区域宽度是检测出的原图主体区域宽度的1.6倍以上；
5：纯色图，指裁剪区域视觉较为单一、缺乏主体部分 ；
6：宽高比异常，指Width : Height取值超出[1, 2.5]的范围；

以上是辅助决策的参考建议，可以根据业务需求选择采纳或忽视。
         * @type {number || null}
         */
        this.CropResult = null;

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
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.OriginalWidth = 'OriginalWidth' in params ? params.OriginalWidth : null;
        this.OriginalHeight = 'OriginalHeight' in params ? params.OriginalHeight : null;
        this.CropResult = 'CropResult' in params ? params.CropResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectCelebrity请求参数结构体
 * @class
 */
class DetectCelebrityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * 汽车坐标信息
 * @class
 */
class Coord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 横坐标x
         * @type {number || null}
         */
        this.X = null;

        /**
         * 纵坐标y
         * @type {number || null}
         */
        this.Y = null;

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

    }
}

/**
 * 公众人物识别人脸信息
 * @class
 */
class Face extends  AbstractModel {
    constructor(){
        super();

        /**
         * 与图片中人脸最相似的公众人物的名字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 公众人物身份标签的数组，一个公众人物可能有多个身份标签。
         * @type {Array.<Labels> || null}
         */
        this.Labels = null;

        /**
         * 对人物的简介。
         * @type {string || null}
         */
        this.BasicInfo = null;

        /**
         * 算法对于Name的置信度（图像中人脸与公众人物的相似度），0-100之间，值越高，表示对于Name越确定。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 人脸区域左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 人脸区域左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 人脸区域宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 人脸区域高度。
         * @type {number || null}
         */
        this.Height = null;

        /**
         * 公众人物的唯一编号，可以用于区分同名人物、一个人物不同称呼等情况。唯一编号为8个字符构成的字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Labels();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.BasicInfo = 'BasicInfo' in params ? params.BasicInfo : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * DetectProduct返回参数结构体
 * @class
 */
class DetectProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品识别结果数组
         * @type {Array.<Product> || null}
         */
        this.Products = null;

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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new Product();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 整张图颜色信息。
 * @class
 */
class ColorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * RGB颜色值（16进制），例如：291A18。
         * @type {string || null}
         */
        this.Color = null;

        /**
         * 当前颜色标签所占比例。
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * 颜色标签。蜜柚色，米驼色等。
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
        this.Color = 'Color' in params ? params.Color : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * 图像主体区域坐标
 * @class
 */
class ImageRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 左上角横坐标。
         * @type {number || null}
         */
        this.X = null;

        /**
         * 左上角纵坐标。
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度。
         * @type {number || null}
         */
        this.Width = null;

        /**
         * 高度。
         * @type {number || null}
         */
        this.Height = null;

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

    }
}

/**
 * CreateImage返回参数结构体
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入图的主体信息。
若启用主体识别且在请求中指定了类目ID或主体区域，以指定的主体为准。若启用主体识别且没有指定，以最大面积主体为准。
注意：此字段可能返回 null，表示取不到有效值。服务类型为商品图像搜索时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ObjectInfo || null}
         */
        this.Object = null;

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

        if (params.Object) {
            let obj = new ObjectInfo();
            obj.deserialize(params.Object)
            this.Object = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图像标签检测结果。
 * @class
 */
class DetectLabelItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片中的物体名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定。
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 标签的一级分类
         * @type {string || null}
         */
        this.FirstCategory = null;

        /**
         * 标签的二级分类
         * @type {string || null}
         */
        this.SecondCategory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.FirstCategory = 'FirstCategory' in params ? params.FirstCategory : null;
        this.SecondCategory = 'SecondCategory' in params ? params.SecondCategory : null;

    }
}

/**
 * 检测到的主体在图片中的矩形框位置（四个顶点坐标）
 * @class
 */
class Location extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置矩形框的左上角横坐标
         * @type {number || null}
         */
        this.XMin = null;

        /**
         * 位置矩形框的左上角纵坐标
         * @type {number || null}
         */
        this.YMin = null;

        /**
         * 位置矩形框的右下角横坐标
         * @type {number || null}
         */
        this.XMax = null;

        /**
         * 位置矩形框的右下角纵坐标
         * @type {number || null}
         */
        this.YMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.XMin = 'XMin' in params ? params.XMin : null;
        this.YMin = 'YMin' in params ? params.YMin : null;
        this.XMax = 'XMax' in params ? params.XMax : null;
        this.YMax = 'YMax' in params ? params.YMax : null;

    }
}

/**
 * 车牌信息
 * @class
 */
class CarPlateContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 车牌信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Plate = null;

        /**
         * 车牌颜色。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Color = null;

        /**
         * 车牌类型；渣土车车牌遮挡时,该值为枚举值“异常”。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 车牌在图片中的坐标信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Coord> || null}
         */
        this.PlateLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Plate = 'Plate' in params ? params.Plate : null;
        this.Color = 'Color' in params ? params.Color : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.PlateLocation) {
            this.PlateLocation = new Array();
            for (let z in params.PlateLocation) {
                let obj = new Coord();
                obj.deserialize(params.PlateLocation[z]);
                this.PlateLocation.push(obj);
            }
        }

    }
}

/**
 * DetectLabelBeta返回参数结构体
 * @class
 */
class DetectLabelBetaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web网络版标签结果数组。如未选择WEB场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.Labels = null;

        /**
         * Camera摄像头版标签结果数组。如未选择CAMERA场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.CameraLabels = null;

        /**
         * Album相册版标签结果数组。如未选择ALBUM场景，则为空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.AlbumLabels = null;

        /**
         * News新闻版标签结果数组。如未选择NEWS场景，则为空。
新闻版目前为测试阶段，暂不提供每个标签的一级、二级分类信息的输出。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.NewsLabels = null;

        /**
         * 非实拍标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetectLabelItem> || null}
         */
        this.NoneCamLabels = null;

        /**
         * 识别结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Product> || null}
         */
        this.LocationLabels = null;

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

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.CameraLabels) {
            this.CameraLabels = new Array();
            for (let z in params.CameraLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.CameraLabels[z]);
                this.CameraLabels.push(obj);
            }
        }

        if (params.AlbumLabels) {
            this.AlbumLabels = new Array();
            for (let z in params.AlbumLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.AlbumLabels[z]);
                this.AlbumLabels.push(obj);
            }
        }

        if (params.NewsLabels) {
            this.NewsLabels = new Array();
            for (let z in params.NewsLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.NewsLabels[z]);
                this.NewsLabels.push(obj);
            }
        }

        if (params.NoneCamLabels) {
            this.NoneCamLabels = new Array();
            for (let z in params.NoneCamLabels) {
                let obj = new DetectLabelItem();
                obj.deserialize(params.NoneCamLabels[z]);
                this.NoneCamLabels.push(obj);
            }
        }

        if (params.LocationLabels) {
            this.LocationLabels = new Array();
            for (let z in params.LocationLabels) {
                let obj = new Product();
                obj.deserialize(params.LocationLabels[z]);
                this.LocationLabels.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片信息
 * @class
 */
class ImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片名称。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 用户自定义的内容。
         * @type {string || null}
         */
        this.CustomContent = null;

        /**
         * 图片自定义标签，JSON格式。
         * @type {string || null}
         */
        this.Tags = null;

        /**
         * 图片名称。
         * @type {string || null}
         */
        this.PicName = null;

        /**
         * 相似度。
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
        this.EntityId = 'EntityId' in params ? params.EntityId : null;
        this.CustomContent = 'CustomContent' in params ? params.CustomContent : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.PicName = 'PicName' in params ? params.PicName : null;
        this.Score = 'Score' in params ? params.Score : null;

    }
}

/**
 * 属性
 * @class
 */
class Attribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 属性详情
         * @type {string || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Details = 'Details' in params ? params.Details : null;

    }
}

/**
 * 名人识别的标签
 * @class
 */
class Labels extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公众人物身份标签的一级分类，例如体育明星、娱乐明星等；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstLabel = null;

        /**
         * 公众人物身份标签的二级分类，例如歌手（对应一级标签为“娱乐明星”）；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecondLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstLabel = 'FirstLabel' in params ? params.FirstLabel : null;
        this.SecondLabel = 'SecondLabel' in params ? params.SecondLabel : null;

    }
}

/**
 * DetectCelebrity返回参数结构体
 * @class
 */
class DetectCelebrityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公众人物识别结果数组。如果检测不到人脸，返回为空；最多可以返回10个人脸识别结果。
         * @type {Array.<Face> || null}
         */
        this.Faces = null;

        /**
         * 本服务在不同误识率水平下（将图片中的人物识别错误的比例）的推荐阈值，可以用于控制识别结果的精度。 
FalseRate1Percent, FalseRate5Permil, FalseRate1Permil分别代表误识率在百分之一、千分之五、千分之一情况下的推荐阈值。 
因为阈值会存在变动，请勿将此处输出的固定值处理，而是每次取值与confidence对比，来判断本次的识别结果是否可信。
 例如，如果您业务中可以接受的误识率是1%，则可以将所有confidence>=FalseRate1Percent的结论认为是正确的。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Threshold || null}
         */
        this.Threshold = null;

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

        if (params.Faces) {
            this.Faces = new Array();
            for (let z in params.Faces) {
                let obj = new Face();
                obj.deserialize(params.Faces[z]);
                this.Faces.push(obj);
            }
        }

        if (params.Threshold) {
            let obj = new Threshold();
            obj.deserialize(params.Threshold)
            this.Threshold = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 检测到的单个商品结构体
 * @class
 */
class Product extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片中商品的三级分类识别结果，选取所有三级分类中的置信度最大者
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 三级商品分类对应的一级分类和二级分类，两级之间用“-”（中划线）隔开，例如商品名称是“硬盘”，那么Parents输出为“电脑、办公-电脑配件”
         * @type {string || null}
         */
        this.Parents = null;

        /**
         * 算法对于Name的置信度，0-100之间，值越高，表示对于Name越确定
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 商品坐标X轴的最小值
         * @type {number || null}
         */
        this.XMin = null;

        /**
         * 商品坐标Y轴的最小值
         * @type {number || null}
         */
        this.YMin = null;

        /**
         * 商品坐标X轴的最大值
         * @type {number || null}
         */
        this.XMax = null;

        /**
         * 商品坐标Y轴的最大值
         * @type {number || null}
         */
        this.YMax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Parents = 'Parents' in params ? params.Parents : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.XMin = 'XMin' in params ? params.XMin : null;
        this.YMin = 'YMin' in params ? params.YMin : null;
        this.XMax = 'XMax' in params ? params.XMax : null;
        this.YMax = 'YMax' in params ? params.YMax : null;

    }
}

/**
 * DescribeGroups返回参数结构体
 * @class
 */
class DescribeGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfo> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new GroupInfo();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 车辆属性识别的结果
 * @class
 */
class CarTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 车系
         * @type {string || null}
         */
        this.Serial = null;

        /**
         * 车辆品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 车辆类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 车辆颜色
         * @type {string || null}
         */
        this.Color = null;

        /**
         * 置信度，0-100
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * 年份，没识别出年份的时候返回0
         * @type {number || null}
         */
        this.Year = null;

        /**
         * 车辆在图片中的坐标信息
         * @type {Array.<Coord> || null}
         */
        this.CarLocation = null;

        /**
         * 车牌信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CarPlateContent || null}
         */
        this.PlateContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Serial = 'Serial' in params ? params.Serial : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Color = 'Color' in params ? params.Color : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Year = 'Year' in params ? params.Year : null;

        if (params.CarLocation) {
            this.CarLocation = new Array();
            for (let z in params.CarLocation) {
                let obj = new Coord();
                obj.deserialize(params.CarLocation[z]);
                this.CarLocation.push(obj);
            }
        }

        if (params.PlateContent) {
            let obj = new CarPlateContent();
            obj.deserialize(params.PlateContent)
            this.PlateContent = obj;
        }

    }
}

/**
 * 本服务在不同误识率水平下（将图片中的人物识别错误的比例）的推荐阈值，可以用于控制识别结果的精度。
{FalseRate1Percent, FalseRate5Permil, FalseRate1Permil}分别代表误识率在百分之一、千分之五、千分之一情况下的推荐阈值。
因为阈值会存在变动，请勿将此处输出的固定值处理，而是每次取值与confidence对比，来判断本次的识别结果是否可信。
例如，如果您业务中可以接受的误识率是1%，则可以将所有confidence>=FalseRate1Percent的结论认为是正确的。
 * @class
 */
class Threshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * 误识率在百分之一时的推荐阈值。
         * @type {number || null}
         */
        this.FalseRate1Percent = null;

        /**
         * 误识率在千分之五时的推荐阈值。
         * @type {number || null}
         */
        this.FalseRate5Permil = null;

        /**
         * 误识率在千分之一时的推荐阈值。
         * @type {number || null}
         */
        this.FalseRate1Permil = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FalseRate1Percent = 'FalseRate1Percent' in params ? params.FalseRate1Percent : null;
        this.FalseRate5Permil = 'FalseRate5Permil' in params ? params.FalseRate5Permil : null;
        this.FalseRate1Permil = 'FalseRate1Permil' in params ? params.FalseRate1Permil : null;

    }
}

/**
 * 百科词条信息
 * @class
 */
class LemmaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LemmaTitle = null;

        /**
         * 词条描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LemmaAbstract = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.LemmaTitle = 'LemmaTitle' in params ? params.LemmaTitle : null;
        this.LemmaAbstract = 'LemmaAbstract' in params ? params.LemmaAbstract : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * DescribeImages返回参数结构体
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图库名称。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 物品ID。
         * @type {string || null}
         */
        this.EntityId = null;

        /**
         * 图片信息。
         * @type {Array.<ImageInfo> || null}
         */
        this.ImageInfos = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.EntityId = 'EntityId' in params ? params.EntityId : null;

        if (params.ImageInfos) {
            this.ImageInfos = new Array();
            for (let z in params.ImageInfos) {
                let obj = new ImageInfo();
                obj.deserialize(params.ImageInfos[z]);
                this.ImageInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetectMisbehavior请求参数结构体
 * @class
 */
class DetectMisbehaviorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片URL地址。 
图片限制： 
• 图片格式：PNG、JPG、JPEG。 
• 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 
建议：
• 图片像素：大于50*50像素，否则影响识别效果； 
• 长宽比：长边：短边<5； 
接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
**注意：图片需要base64编码，并且要去掉编码头部。**
         * @type {string || null}
         */
        this.ImageBase64 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;

    }
}

/**
 * CreateGroup返回参数结构体
 * @class
 */
class CreateGroupResponse extends  AbstractModel {
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

module.exports = {
    DetectProductBetaResponse: DetectProductBetaResponse,
    DetectDisgustRequest: DetectDisgustRequest,
    SearchImageResponse: SearchImageResponse,
    RecognizeCarProRequest: RecognizeCarProRequest,
    RecognizeCarProResponse: RecognizeCarProResponse,
    CreateImageRequest: CreateImageRequest,
    DetectLabelBetaRequest: DetectLabelBetaRequest,
    DeleteImagesResponse: DeleteImagesResponse,
    CropImageRequest: CropImageRequest,
    DetectProductRequest: DetectProductRequest,
    ObjectInfo: ObjectInfo,
    RegionDetected: RegionDetected,
    DescribeGroupsRequest: DescribeGroupsRequest,
    DetectMisbehaviorResponse: DetectMisbehaviorResponse,
    AssessQualityResponse: AssessQualityResponse,
    DetectDisgustResponse: DetectDisgustResponse,
    SearchImageRequest: SearchImageRequest,
    RecognizeCarResponse: RecognizeCarResponse,
    DetectLabelRequest: DetectLabelRequest,
    DetectLabelResponse: DetectLabelResponse,
    EnhanceImageResponse: EnhanceImageResponse,
    ProductInfo: ProductInfo,
    AssessQualityRequest: AssessQualityRequest,
    DeleteImagesRequest: DeleteImagesRequest,
    CreateGroupRequest: CreateGroupRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    Rect: Rect,
    DetectProductBetaRequest: DetectProductBetaRequest,
    Box: Box,
    RecognizeCarRequest: RecognizeCarRequest,
    EnhanceImageRequest: EnhanceImageRequest,
    GroupInfo: GroupInfo,
    CropImageResponse: CropImageResponse,
    DetectCelebrityRequest: DetectCelebrityRequest,
    Coord: Coord,
    Face: Face,
    DetectProductResponse: DetectProductResponse,
    ColorInfo: ColorInfo,
    ImageRect: ImageRect,
    CreateImageResponse: CreateImageResponse,
    DetectLabelItem: DetectLabelItem,
    Location: Location,
    CarPlateContent: CarPlateContent,
    DetectLabelBetaResponse: DetectLabelBetaResponse,
    ImageInfo: ImageInfo,
    Attribute: Attribute,
    Labels: Labels,
    DetectCelebrityResponse: DetectCelebrityResponse,
    Product: Product,
    DescribeGroupsResponse: DescribeGroupsResponse,
    CarTagItem: CarTagItem,
    Threshold: Threshold,
    LemmaInfo: LemmaInfo,
    DescribeImagesResponse: DescribeImagesResponse,
    DetectMisbehaviorRequest: DetectMisbehaviorRequest,
    CreateGroupResponse: CreateGroupResponse,

}
