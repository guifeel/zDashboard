import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";
import { SidebarWrap } from "./Sidebar.styles";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">雷诺.</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <img src={Icons.Chart} alt="" />
                </span>
                <span className="menu-link-text">仪表盘</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Graph} alt="" />
                </span>
                <span className="menu-link-text">排行榜</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Cart} alt="" />
                </span>
                <span className="menu-link-text">订单</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Bag} alt="" />
                </span>
                <span className="menu-link-text">产品</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Analytics} alt="" />
                </span>
                <span className="menu-link-text">销售报告</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Message} alt="" />
                </span>
                <span className="menu-link-text">消息</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.Cog} alt="" />
                </span>
                <span className="menu-link-text">设置</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <img src={Icons.SignOut} alt="" />
                </span>
                <span className="menu-link-text">登出</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
