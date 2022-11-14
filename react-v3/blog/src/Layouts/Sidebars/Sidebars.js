import React, { Component } from "react";
import Categories from "./Categories";
import LastedPosts from "./LastedPosts";
import Popular from "./Popular";
import Trending from "./Trending";
import Video from "./Video";
import HttpClient from "../../Services/Helpers/Api/HttpClient";
const client = new HttpClient();
export class Sidebars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
      categories: {},
      postPolular: [],
      postTrending: [],
      postLatest: [],
      tab: 'popular'
    };
  }
  getOptions = async (type='latest') => {

   
    const res = await client.get(client.options);
    if (res.response.ok) {
      const data = res.data;
      this.setState({
        video: data.sidebar.video,
        categories: data.sidebar.categories,
      });
  
      this.getPosts(data.sidebar.posts.limit, type);
    }
  };
  // getLastedPosts = async (limit) => {
  //   const res = await client.get(client.posts + "?_expand=category", {
  //     _limit: limit,
  //     _expand: "user",
  //   });
  //   if (res.response.ok) {
  //     const data = res.data;
  //     this.setState({
  //       posts: data,
  //     });
  //   }
  // };
  // getRecentPosts = async (limit) => {
  //   const res = await client.get(client.posts + "?_expand=category", {
  //     _expand: "user",
  //     _limit: limit,
  //   });
  //   if (res.response.ok) {
  //     const data = res.data;
  //     this.setState({
  //       recentPosts: data,
  //     });
  //   }
  // };

  getPosts = async (limit, type = 'latest') => {
    const filter = {
      _expand: "user",
      _limit: limit,
    };

    if (type !== 'latest') {
      filter.type = type;
    }


    const res = await client.get(client.posts + "?_expand=category", filter);
    if (res.response.ok) {
      const data = res.data;
      if (type == 'latest') {
        this.setState({
          postLatest: data,
        });
      } else if (type == "popular") {
        this.setState({
          postPopular: data,
        });
      } else {
        this.setState({
          postTrending: data,
        });
      }
    }
  };

  componentDidMount = () => {
    this.getOptions(this.state.tab);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {tab: prevTab} = prevState;
    const {tab} = this.state;
    if (prevTab !== tab) {
      this.getOptions(this.state.tab);
    }
  }

  handleChangeTab = (e) => {
    const tab = e.target.dataset.current;
    if (tab!==null){
      this.setState({tab: tab});
    }
  }

  render() {
    const { video, categories, postLatest, postPopular, postTrending } =
      this.state;
    return (
      <div className="col-md-3">
        {/* ======= Sidebar ======= */}
        <div className="aside-block">
          <ul
            className="nav nav-pills custom-tab-nav mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-popular-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-popular"
                type="button"
                role="tab"
                aria-controls="pills-popular"
                aria-selected="true"
                data-current="popular"
                onClick={this.handleChangeTab}
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-trending-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trending"
                type="button"
                role="tab"
                aria-controls="pills-trending"
                aria-selected="false"
                data-current="trending"
                onClick={this.handleChangeTab}
              >
                Trending
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-latest-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-latest"
                type="button"
                role="tab"
                aria-controls="pills-latest"
                aria-selected="false"
                data-current="latest"
                onClick={this.handleChangeTab}
              >
                Latest
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* Popular */}
            <Popular data={postPopular} />
            {/* End Popular */}
            {/* Trending */}
            <Trending data={postTrending} />
            {/* End Trending */}
            {/* Latest */}
            <LastedPosts data={postLatest} />
            {/* End Latest */}
          </div>
        </div>
        <div className="aside-block">
          <Video data={video} />
        </div>
        {/* End Video */}
        <Categories data={categories} />
        {/* End Categories */}
      </div>
    );
  }
}

export default Sidebars;
