import { Icons } from "../../../assets/icons";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SalesBlockWrap } from "./Sales.styles";

const SalesBlock = () => {
  return (
    <SalesBlockWrap>
      <div className="block-head">
        <div className="block-head-l">
          <BlockTitle className="block-title">
            <h3>今日销售额</h3>
          </BlockTitle>
          <p className="text">销售摘要</p>
        </div>
        <div className="block-head-r">
          <button type="button" className="export-btn">
            <img src={Icons.ExportDark} alt="" />
            <span className="text">导出</span>
          </button>
        </div>
      </div>
      <BlockContentWrap>
        <div className="cards">
          <div className="card-item card-misty-rose">
            <div className="card-item-icon">
              <img src={Icons.CardSales} alt="" />
            </div>
            <div className="card-item-value">￥1k</div>
            <p className="card-item-text text">总销售额</p>
            <span className="card-item-sm-text">较昨日增长 +8%</span>
          </div>
          <div className="card-item card-latte">
            <div className="card-item-icon">
              <img src={Icons.CardOrder} alt="" />
            </div>
            <div className="card-item-value">300</div>
            <p className="card-item-text text">订单总额</p>
            <span className="card-item-sm-text">较昨日增长+5%</span>
          </div>
          <div className="card-item card-nyanza">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">5</div>
            <p className="card-item-text text">售出的产品</p>
            <span className="card-item-sm-text">较昨日增长+1.2%</span>
          </div>
          <div className="card-item card-pale-purple">
            <div className="card-item-icon">
              <img src={Icons.CardCustomer} alt="" />
            </div>
            <div className="card-item-value">8</div>
            <p className="card-item-text text">新顾客</p>
            <span className="card-item-sm-text">较昨日增长+0.5%</span>
          </div>
        </div>
      </BlockContentWrap>
    </SalesBlockWrap>
  );
};

export default SalesBlock;
