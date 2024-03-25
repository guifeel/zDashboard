import { TOP_PRODUCTS_DATA } from "../../../data/mockData";
import { BlockTitle } from "../../../styles/global/default";
import { TopProductsWrap } from "./TopProducts.styles";

const TopProducts = () => {
  return (
    <TopProductsWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>顶级产品</h3>
        </BlockTitle>
      </div>
      <div className="tbl-products">
        <table>
          <thead>
            <tr>
              <th>TOP</th>
              <th>产品名</th>
              <th>热度</th>
              <th>售出</th>
            </tr>
          </thead>
          <tbody>
            {TOP_PRODUCTS_DATA?.map((progressItem, index) => {
              return (
                <tr key={progressItem.id}>
                  <td>{index + 1}</td>
                  <td>{progressItem.name}</td>
                  <td>
                    <div className="tbl-progress-bar">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${progressItem.popularityPercent}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <div className="tbl-badge">
                      {progressItem.salesPercent}%
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TopProductsWrap>
  );
};

export default TopProducts;
