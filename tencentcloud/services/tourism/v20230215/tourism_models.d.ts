/**
 * DescribeDrawResourceList返回参数结构体
 */
export interface DescribeDrawResourceListResponse {
    /**
      * 返回数据条数
      */
    TotalCount?: number;
    /**
      * 返回数据数组
      */
    ResourceDrawList?: Array<ResourceDrawListType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 输出用户的资源数据
 */
export interface ResourceDrawListType {
    /**
      * 记录id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
    /**
      * 资源记录id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId?: number;
    /**
      * 资源id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId?: string;
    /**
      * 本订单资源序列号
注意：此字段可能返回 null，表示取不到有效值。
      */
    IndexId?: string;
    /**
      * 客户的uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uin?: string;
    /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    BigDealId?: string;
    /**
      * 小订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SmallOrderId?: string;
    /**
      * 资源创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceNewStartTime?: string;
    /**
      * 资源到期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceNewEndTime?: string;
    /**
      * 资源状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceStatus?: number;
    /**
      * 本记录状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 项目类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType?: number;
}
/**
 * DescribeDrawResourceList请求参数结构体
 */
export interface DescribeDrawResourceListRequest {
    /**
      * PageNumber
      */
    PageNumber: number;
    /**
      * PageSize
      */
    PageSize: number;
}
