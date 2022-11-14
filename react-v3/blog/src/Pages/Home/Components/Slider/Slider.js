import React, { Component } from "react";
import { Link } from "react-router-dom";
import HttpClient from "../../../../Services/Helpers/Api/HttpClient";
import Url from "../../../../Services/Helpers/Url/Url";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import './Slider.scss';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const url = new Url();
const client = new HttpClient();
export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      slider: {},
      posts: [],
    };
  }
  getOptions = async () => {
    const res = await client.get(client.options);

    if (res.response.ok) {
      const data = res.data;
      this.setState({
        categories: data.home.categories,
        slider: data.home.slider,
      });

      this.getPosts(data.home.slider.limit);
    }
  };
  getPosts = async (limit) => {
    const filters = {};
    filters._limit = limit;
    filters._expand = "user";
    const res = await client.get(client.posts + "?_expand=category", filters);
    if (res.response.ok) {
      const postsList = res.data;
      this.setState({
        posts: postsList,
      });
    }
  };
  componentDidMount() {
    this.getOptions();
  }
  render() {
    const { posts } = this.state;
    const { getPost } = url;
    return (
      <section id="hero-slider" className="hero-slider">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{delay: 500}}
                pagination={{ clickable: true }}
                loop={true}
              >
                {posts.map((posts) => {
                  return (
                    <SwiperSlide key={posts.id}>
                      <Link
                        to={getPost(posts.id, posts.title)}
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${posts.thumbnail})`,
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>{posts.title}</h2>
                          <p>{posts.excerpt}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      //   <Swiper slidesPerView={1}>

      //     <SwiperSlide>Slide 1</SwiperSlide>
      //     <SwiperSlide>Slide 2</SwiperSlide>
      //     <SwiperSlide>Slide 3</SwiperSlide>
      //     <SwiperSlide>Slide 4</SwiperSlide>

      //   </Swiper>
    );
  }
}

export default Slider;
