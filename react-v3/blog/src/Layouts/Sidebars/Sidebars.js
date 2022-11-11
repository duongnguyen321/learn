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
      posts: [],
      recentPosts: [],
    };
  }
  getOptions = async () => {
    const res = await client.get(client.options);
    if (res.response.ok) {
      const data = res.data;
      this.setState({
        video: data.sidebar.video,
        categories: data.sidebar.categories,
      });
      this.getRecentPosts(data.sidebar.posts.limit);
      this.getLastedPosts(data.sidebar.posts.limit);
    }
  };
  getLastedPosts = async (limit) => {
    const res = await client.get(client.posts + "?_expand=category", {
      _limit: limit,
      _expand: "user",
    });
    if (res.response.ok) {
      const data = res.data;
      this.setState({
        posts: data,
      });
    }
  };
  getRecentPosts = async (limit) => {
    const res = await client.get(client.posts + "?_expand=category", {
      _expand: "user",
      _limit: limit,
    });
    if (res.response.ok) {
      const data = res.data;
      this.setState({
        recentPosts: data,
      });
    }
  };

  componentDidMount = () => {
    this.getOptions();
  };
  render() {
    const { video, categories, posts, recentPosts } = this.state;
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
              >
                Latest
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* Popular */}
            <Popular data={recentPosts} />
            {/* End Popular */}
            {/* Trending */}
            <Trending data={recentPosts} />
            {/* End Trending */}
            {/* Latest */}
            <LastedPosts data={posts} />
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
