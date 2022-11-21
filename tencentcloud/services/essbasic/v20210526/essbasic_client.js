"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * essbasic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig);
    }
    /**
     * 提交企业签署流程审批结果

在通过接口(CreateFlowsByTemplates 或者ChannelCreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true,则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     */
    async ChannelCreateFlowSignReview(req, cb) {
        return this.request("ChannelCreateFlowSignReview", req, cb);
    }
    /**
     * 此接口（ChannelCreateMultiFlowSignQRCode）用于创建一码多扫签署流程二维码。
适用的模版仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模版，且模版中发起方没有填写控件。
     */
    async ChannelCreateMultiFlowSignQRCode(req, cb) {
        return this.request("ChannelCreateMultiFlowSignQRCode", req, cb);
    }
    /**
     * 接口（ChannelCreateFlowByFiles）用于渠道版通过文件创建签署流程。此接口静默签能力不可直接使用，需要运营申请
     */
    async ChannelCreateFlowByFiles(req, cb) {
        return this.request("ChannelCreateFlowByFiles", req, cb);
    }
    /**
     * 渠道通过图片为子客代创建印章，图片最大5m；此接口不可直接使用，请联系运营/客服咨询相关流程
     */
    async CreateSealByImage(req, cb) {
        return this.request("CreateSealByImage", req, cb);
    }
    /**
     * 此接口（ChannelCancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
     */
    async ChannelCancelMultiFlowSignQRCode(req, cb) {
        return this.request("ChannelCancelMultiFlowSignQRCode", req, cb);
    }
    /**
     * 渠道创建文件转换任务
     */
    async ChannelCreateConvertTaskApi(req, cb) {
        return this.request("ChannelCreateConvertTaskApi", req, cb);
    }
    /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
    async DescribeUsage(req, cb) {
        return this.request("DescribeUsage", req, cb);
    }
    /**
     * 渠道版撤销签署流程接口
仅支持未签署完成的合同
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人

     */
    async ChannelCancelFlow(req, cb) {
        return this.request("ChannelCancelFlow", req, cb);
    }
    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建签署流程。当前可批量发起合同（签署流程）数量最大为20个。
如若在模板中配置了动态表格, 上传的附件必须为A4大小
合同发起人必须在电子签已经进行实名。
     */
    async CreateFlowsByTemplates(req, cb) {
        return this.request("CreateFlowsByTemplates", req, cb);
    }
    /**
     * 创建跳转小程序查看或签署的链接。

跳转小程序的几种方式：主要是设置不同的EndPoint
1. 通过链接Url直接跳转到小程序，不需要返回
设置EndPoint为WEIXINAPP，得到链接打开即可。（与短信提醒用户签署形式一样）。
2. 通过链接Url打开H5引导页-->点击跳转到小程序-->签署完退出小程序-->回到H5引导页-->跳转到指定JumpUrl
设置EndPoint为CHANNEL，指定JumpUrl，得到链接打开即可。
3. 客户App直接跳转到小程序-->小程序签署完成-->返回App
跳转到小程序的实现，参考官方文档（分为全屏、半屏两种方式）
全屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html）
半屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html）
其中小程序的原始Id，请联系<对接技术人员>获取，或者查看小程序信息自助获取。
使用CreateSignUrls，设置EndPoint为APP，得到path。
4. 客户小程序直接跳到电子签小程序-->签署完成退出电子签小程序-->回到客户小程序
实现方式同App跳小程序。
     */
    async CreateSignUrls(req, cb) {
        return this.request("CreateSignUrls", req, cb);
    }
    /**
     * 此接口（CreateConsoleLoginUrl）用于创建渠道子客企业控制台Web/移动登录链接。登录链接是子客控制台的唯一入口。
若子客企业未激活，会进入企业激活流程，首次参与激活流程的经办人会成为超管。（若企业激活过程中填写信息有误，需要重置激活流程，可以换一个经办人OpenId获取新的链接进入。）
若子客企业已激活，使用了新的经办人OpenId进入，则会进入经办人的实名流程。
若子客企业、经办人均已完成认证，则会直接进入子客Web控制台。
     */
    async CreateConsoleLoginUrl(req, cb) {
        return this.request("CreateConsoleLoginUrl", req, cb);
    }
    /**
     * 此接口（CreateConsoleLoginUrl）用于渠道子客领取合同，经办人需要有相应的角色，领取后的合同不能重复领取
     */
    async ChannelCreateBoundFlows(req, cb) {
        return this.request("ChannelCreateBoundFlows", req, cb);
    }
    /**
     * 指定需要批量撤销的签署流程Id，获取批量撤销链接
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；
接口调用成功返回批量撤销合同的链接，通过链接跳转到电子签小程序完成批量撤销;
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
    async ChannelCreateBatchCancelFlowUrl(req, cb) {
        return this.request("ChannelCreateBatchCancelFlowUrl", req, cb);
    }
    /**
     * 渠道版查询转换任务状态
     */
    async ChannelGetTaskResultApi(req, cb) {
        return this.request("ChannelGetTaskResultApi", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganization）用于同步渠道子客企业信息，主要是子客企业的营业执照，便于子客企业开通过程中不用手动上传。若有需要调用此接口，需要在创建控制链接CreateConsoleLoginUrl之后即刻进行调用。
     */
    async SyncProxyOrganization(req, cb) {
        return this.request("SyncProxyOrganization", req, cb);
    }
    /**
     * 合同文件验签
     */
    async ChannelVerifyPdf(req, cb) {
        return this.request("ChannelVerifyPdf", req, cb);
    }
    /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载地址，让合作企业进入控制台直接下载，支持客户合同（流程）按照自定义文件夹形式 分类下载。
当前接口限制最多合同（流程）50个.

     */
    async GetDownloadFlowUrl(req, cb) {
        return this.request("GetDownloadFlowUrl", req, cb);
    }
    /**
     * 查询渠道子客企业电子印章，需要操作者具有管理印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
    async ChannelDescribeOrganizationSeals(req, cb) {
        return this.request("ChannelDescribeOrganizationSeals", req, cb);
    }
    /**
     * 查询企业员工列表
     */
    async ChannelDescribeEmployees(req, cb) {
        return this.request("ChannelDescribeEmployees", req, cb);
    }
    /**
     * 指定需要批量撤销的签署流程Id，批量撤销合同
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；接口失败后返回错误信息
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
    async ChannelBatchCancelFlows(req, cb) {
        return this.request("ChannelBatchCancelFlows", req, cb);
    }
    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入签署流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，不建议使用，将会废弃。
     */
    async PrepareFlows(req, cb) {
        return this.request("PrepareFlows", req, cb);
    }
    /**
     * 根据签署流程信息批量获取资源下载链接，可以下载签署中、签署完的合同，需合作企业先进行授权。
此接口直接返回下载的资源的url，与接口GetDownloadFlowUrl跳转到控制台的下载方式不同。
     */
    async DescribeResourceUrlsByFlows(req, cb) {
        return this.request("DescribeResourceUrlsByFlows", req, cb);
    }
    /**
     * 通过此接口（DescribeTemplates）查询该子客企业在电子签拥有的有效模板，不包括渠道模板
     */
    async DescribeTemplates(req, cb) {
        return this.request("DescribeTemplates", req, cb);
    }
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain, 正式环境为 file.ess.tencent.cn。
代码示例：
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
     */
    async UploadFiles(req, cb) {
        return this.request("UploadFiles", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于渠道平台的，无法针对员工做新增/更新/离职等操作。
若经办人信息有误，或者需要修改，也可以先将之前的经办人做离职操作，然后重新使用控制台链接CreateConsoleLoginUrl让经办人重新实名。
     */
    async SyncProxyOrganizationOperators(req, cb) {
        return this.request("SyncProxyOrganizationOperators", req, cb);
    }
    /**
     * 此接口（OperateChannelTemplate）用于针对渠道模板库中的模板对子客企业可见性的查询和设置，不会直接分配渠道模板给子客企业。
1、OperateType=select时：
查询渠道模板库
2、OperateType=update或者delete时：
对子客企业进行模板库中模板可见性的修改、删除操作。
     */
    async OperateChannelTemplate(req, cb) {
        return this.request("OperateChannelTemplate", req, cb);
    }
    /**
     * 接口（ChannelCreateFlowGroupByFiles）用于通过多文件创建合同组签署流程。
     */
    async ChannelCreateFlowGroupByFiles(req, cb) {
        return this.request("ChannelCreateFlowGroupByFiles", req, cb);
    }
    /**
     * 此接口（DescribeFlowDetailInfo）用于查询合同(签署流程)的详细信息。
     */
    async DescribeFlowDetailInfo(req, cb) {
        return this.request("DescribeFlowDetailInfo", req, cb);
    }
}
exports.Client = Client;
