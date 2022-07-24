import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteAclRequest, BatchCreateAclRequest, DeleteUserRequest, DescribeACLRequest, DescribeTopicAttributesRequest, DescribeInstanceAttributesRequest, AuthorizeTokenResponse, CancelAuthorizationTokenRequest, CancelAuthorizationTokenResponse, CreateRouteRequest, DeleteTopicRequest, DescribeInstancesResponse, BatchModifyTopicAttributesResponse, ModifyInstancePreRequest, CreateTokenResponse, DescribeInstancesDetailResponse, CreateConnectResourceRequest, CheckCdcClusterResponse, DescribeACLResponse, DescribeTopicSubscribeGroupResponse, DeleteAclRuleRequest, BatchModifyGroupOffsetsResponse, CreateTokenRequest, DescribeTopicResponse, DescribeCkafkaZoneRequest, CreateConsumerResponse, CreateCdcClusterResponse, DescribeGroupResponse, ModifyPasswordResponse, AuthorizeTokenRequest, CreateConnectResourceResponse, CreateUserResponse, ModifyInstanceAttributesResponse, CreatePartitionResponse, DeleteGroupRequest, DescribeConsumerGroupRequest, DeleteUserResponse, CreateAclRequest, DescribeTopicSyncReplicaResponse, DescribeAppInfoRequest, DeleteRouteResponse, CreateTopicIpWhiteListResponse, ModifyGroupOffsetsResponse, CreateAclResponse, CreateTopicRequest, DeleteAclResponse, DescribeTopicSubscribeGroupRequest, DeleteInstancePreResponse, FetchMessageByOffsetRequest, DescribeRegionRequest, DeleteAclRuleResponse, DescribeGroupInfoRequest, DescribeGroupInfoResponse, ModifyTopicAttributesResponse, DeleteRouteTriggerTimeResponse, DescribeUserResponse, DescribeTopicRequest, CreatePartitionRequest, DescribeAppInfoResponse, DescribeInstanceAttributesResponse, DeleteInstancePreRequest, ModifyPasswordRequest, ModifyInstanceAttributesRequest, DescribeRegionResponse, CreateTopicResponse, DescribeTopicAttributesResponse, DescribeConsumerGroupResponse, DescribeGroupOffsetsRequest, DeleteRouteTriggerTimeRequest, DescribeInstancesRequest, DescribeGroupRequest, BatchCreateAclResponse, ModifyInstancePreResponse, CreateUserRequest, DeleteRouteRequest, CreateCdcClusterRequest, DeleteTopicIpWhiteListResponse, CreateInstancePreResponse, CheckCdcClusterRequest, DescribeInstancesDetailRequest, FetchMessageByOffsetResponse, CreateConsumerRequest, DescribeRouteRequest, SendMessageResponse, DescribeCkafkaZoneResponse, BatchModifyGroupOffsetsRequest, CreateRouteResponse, DescribeRouteResponse, CreateDatahubTaskRequest, DescribeTopicDetailRequest, DescribeGroupOffsetsResponse, SendMessageRequest, ModifyGroupOffsetsRequest, BatchModifyTopicAttributesRequest, DeleteGroupResponse, CreateTopicIpWhiteListRequest, ModifyTopicAttributesRequest, CreateInstancePreRequest, DeleteTopicIpWhiteListRequest, DeleteTopicResponse, CreateDatahubTaskResponse, DescribeUserRequest, DescribeTopicSyncReplicaRequest, DescribeTopicDetailResponse } from "./ckafka_models";
/**
 * ckafka client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看路由信息
     */
    DescribeRoute(req: DescribeRouteRequest, cb?: (error: string, rep: DescribeRouteResponse) => void): Promise<DescribeRouteResponse>;
    /**
     * 获取消费分组信息
     */
    DescribeGroupInfo(req: DescribeGroupInfoRequest, cb?: (error: string, rep: DescribeGroupInfoResponse) => void): Promise<DescribeGroupInfoResponse>;
    /**
     * 创建消费者组
     */
    CreateConsumer(req: CreateConsumerRequest, cb?: (error: string, rep: CreateConsumerResponse) => void): Promise<CreateConsumerResponse>;
    /**
     * 查询消费分组信息
     */
    DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse>;
    /**
     * 查询订阅某主题消息分组信息
     */
    DescribeTopicSubscribeGroup(req: DescribeTopicSubscribeGroupRequest, cb?: (error: string, rep: DescribeTopicSubscribeGroupResponse) => void): Promise<DescribeTopicSubscribeGroupResponse>;
    /**
     * 预付费实例变配接口，调整磁盘，带宽
     */
    ModifyInstancePre(req: ModifyInstancePreRequest, cb?: (error: string, rep: ModifyInstancePreResponse) => void): Promise<ModifyInstancePreResponse>;
    /**
     * 批量设置主题属性
     */
    BatchModifyTopicAttributes(req: BatchModifyTopicAttributesRequest, cb?: (error: string, rep: BatchModifyTopicAttributesResponse) => void): Promise<BatchModifyTopicAttributesResponse>;
    /**
     * 删除路由
     */
    DeleteRoute(req: DeleteRouteRequest, cb?: (error: string, rep: DeleteRouteResponse) => void): Promise<DeleteRouteResponse>;
    /**
     * 通过HTTP接入层发送消息
     */
    SendMessage(req: SendMessageRequest, cb?: (error: string, rep: SendMessageResponse) => void): Promise<SendMessageResponse>;
    /**
     * 本接口用于修改主题属性。
     */
    ModifyTopicAttributes(req: ModifyTopicAttributesRequest, cb?: (error: string, rep: ModifyTopicAttributesResponse) => void): Promise<ModifyTopicAttributesResponse>;
    /**
     * 创建主题ip白名单
     */
    CreateTopicIpWhiteList(req: CreateTopicIpWhiteListRequest, cb?: (error: string, rep: CreateTopicIpWhiteListResponse) => void): Promise<CreateTopicIpWhiteListResponse>;
    /**
     * 枚举消费分组(精简版)
     */
    DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse>;
    /**
     * 设置Groups 消费分组offset
     */
    ModifyGroupOffsets(req: ModifyGroupOffsetsRequest, cb?: (error: string, rep: ModifyGroupOffsetsResponse) => void): Promise<ModifyGroupOffsetsResponse>;
    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 添加实例路由
     */
    CreateRoute(req: CreateRouteRequest, cb?: (error: string, rep: CreateRouteResponse) => void): Promise<CreateRouteResponse>;
    /**
     * 删除消费组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 查询用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 枚举ACL
     */
    DescribeACL(req: DescribeACLRequest, cb?: (error: string, rep: DescribeACLResponse) => void): Promise<DescribeACLResponse>;
    /**
     * 取消授权token
     */
    CancelAuthorizationToken(req: CancelAuthorizationTokenRequest, cb?: (error: string, rep: CancelAuthorizationTokenResponse) => void): Promise<CancelAuthorizationTokenResponse>;
    /**
     * 创建实例(预付费包年包月)
     */
    CreateInstancePre(req: CreateInstancePreRequest, cb?: (error: string, rep: CreateInstancePreResponse) => void): Promise<CreateInstancePreResponse>;
    /**
     * 根据指定offset位置的消息
     */
    FetchMessageByOffset(req: FetchMessageByOffsetRequest, cb?: (error: string, rep: FetchMessageByOffsetResponse) => void): Promise<FetchMessageByOffsetResponse>;
    /**
     * 删除主题IP白名单
     */
    DeleteTopicIpWhiteList(req: DeleteTopicIpWhiteListRequest, cb?: (error: string, rep: DeleteTopicIpWhiteListResponse) => void): Promise<DeleteTopicIpWhiteListResponse>;
    /**
     * 修改密码
     */
    ModifyPassword(req: ModifyPasswordRequest, cb?: (error: string, rep: ModifyPasswordResponse) => void): Promise<ModifyPasswordResponse>;
    /**
     * 添加 ACL 策略
     */
    CreateAcl(req: CreateAclRequest, cb?: (error: string, rep: CreateAclResponse) => void): Promise<CreateAclResponse>;
    /**
     * 创建ckafka主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 创建Datahub连接源
     */
    CreateConnectResource(req: CreateConnectResourceRequest, cb?: (error: string, rep: CreateConnectResourceResponse) => void): Promise<CreateConnectResourceResponse>;
    /**
     * 用于查询cdc-ckafka任务状态
     */
    CheckCdcCluster(req: CheckCdcClusterRequest, cb?: (error: string, rep: CheckCdcClusterResponse) => void): Promise<CheckCdcClusterResponse>;
    /**
     * 本接口用于增加主题中的分区
     */
    CreatePartition(req: CreatePartitionRequest, cb?: (error: string, rep: CreatePartitionResponse) => void): Promise<CreatePartitionResponse>;
    /**
     * 删除用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 创建最高权限的token
     */
    CreateToken(req: CreateTokenRequest, cb?: (error: string, rep: CreateTokenResponse) => void): Promise<CreateTokenResponse>;
    /**
     * 获取主题列表详情（仅控制台调用）
     */
    DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse>;
    /**
     * 删除ACL
     */
    DeleteAcl(req: DeleteAclRequest, cb?: (error: string, rep: DeleteAclResponse) => void): Promise<DeleteAclResponse>;
    /**
     * 查询用户列表
     */
    DescribeAppInfo(req: DescribeAppInfoRequest, cb?: (error: string, rep: DescribeAppInfoResponse) => void): Promise<DescribeAppInfoResponse>;
    /**
     * 获取主题属性

     */
    DescribeTopicAttributes(req: DescribeTopicAttributesRequest, cb?: (error: string, rep: DescribeTopicAttributesResponse) => void): Promise<DescribeTopicAttributesResponse>;
    /**
     * 删除预付费实例
     */
    DeleteInstancePre(req: DeleteInstancePreRequest, cb?: (error: string, rep: DeleteInstancePreResponse) => void): Promise<DeleteInstancePreResponse>;
    /**
     * 获取实例属性
     */
    DescribeInstanceAttributes(req: DescribeInstanceAttributesRequest, cb?: (error: string, rep: DescribeInstanceAttributesResponse) => void): Promise<DescribeInstanceAttributesResponse>;
    /**
     * 用户账户下获取实例列表详情
     */
    DescribeInstancesDetail(req: DescribeInstancesDetailRequest, cb?: (error: string, rep: DescribeInstancesDetailResponse) => void): Promise<DescribeInstancesDetailResponse>;
    /**
     * 批量添加ACL策略
     */
    BatchCreateAcl(req: BatchCreateAclRequest, cb?: (error: string, rep: BatchCreateAclResponse) => void): Promise<BatchCreateAclResponse>;
    /**
     * 创建Datahub转储任务
     */
    CreateDatahubTask(req: CreateDatahubTaskRequest, cb?: (error: string, rep: CreateDatahubTaskResponse) => void): Promise<CreateDatahubTaskResponse>;
    /**
     * 删除ACL规则
     */
    DeleteAclRule(req: DeleteAclRuleRequest, cb?: (error: string, rep: DeleteAclRuleResponse) => void): Promise<DeleteAclRuleResponse>;
    /**
     * 修改删除路由延迟触发时间
     */
    DeleteRouteTriggerTime(req: DeleteRouteTriggerTimeRequest, cb?: (error: string, rep: DeleteRouteTriggerTimeResponse) => void): Promise<DeleteRouteTriggerTimeResponse>;
    /**
     * 批量修改消费组offset
     */
    BatchModifyGroupOffsets(req: BatchModifyGroupOffsetsRequest, cb?: (error: string, rep: BatchModifyGroupOffsetsResponse) => void): Promise<BatchModifyGroupOffsetsResponse>;
    /**
     * 获取Topic 副本详情信息
     */
    DescribeTopicSyncReplica(req: DescribeTopicSyncReplicaRequest, cb?: (error: string, rep: DescribeTopicSyncReplicaResponse) => void): Promise<DescribeTopicSyncReplicaResponse>;
    /**
     * 获取消费分组offset
     */
    DescribeGroupOffsets(req: DescribeGroupOffsetsRequest, cb?: (error: string, rep: DescribeGroupOffsetsResponse) => void): Promise<DescribeGroupOffsetsResponse>;
    /**
     * 给实例授权token
     */
    AuthorizeToken(req: AuthorizeTokenRequest, cb?: (error: string, rep: AuthorizeTokenResponse) => void): Promise<AuthorizeTokenResponse>;
    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 设置实例属性
     */
    ModifyInstanceAttributes(req: ModifyInstanceAttributesRequest, cb?: (error: string, rep: ModifyInstanceAttributesResponse) => void): Promise<ModifyInstanceAttributesResponse>;
    /**
     * 用于查看ckafka的可用区列表
     */
    DescribeCkafkaZone(req: DescribeCkafkaZoneRequest, cb?: (error: string, rep: DescribeCkafkaZoneResponse) => void): Promise<DescribeCkafkaZoneResponse>;
    /**
     * 枚举地域,只支持广州地域
     */
    DescribeRegion(req: DescribeRegionRequest, cb?: (error: string, rep: DescribeRegionResponse) => void): Promise<DescribeRegionResponse>;
    /**
     * 用于cdc的专用ckafka集群
     */
    CreateCdcCluster(req: CreateCdcClusterRequest, cb?: (error: string, rep: CreateCdcClusterResponse) => void): Promise<CreateCdcClusterResponse>;
    /**
     * 添加用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 删除ckafka主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
}
