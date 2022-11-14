import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
        <div className="col-lg-4">
        <div className="trending">
          <h3>Trending</h3>
          <ul className="trending-post">
            <li>
              <a href="single-post.html">
                <span className="number">1</span>
                <h3>
                  The Best Homemade Masks for Face (keep the Pimples
                  Away)
                </h3>
                <span className="author">Jane Cooper</span>
              </a>
            </li>
            <li>
              <a href="single-post.html">
                <span className="number">2</span>
                <h3>
                  17 Pictures of Medium Length Hair in Layers That
                  Will Inspire Your New Haircut
                </h3>
                <span className="author">Wade Warren</span>
              </a>
            </li>
            <li>
              <a href="single-post.html">
                <span className="number">3</span>
                <h3>
                  13 Amazing Poems from Shel Silverstein with
                  Valuable Life Lessons
                </h3>
                <span className="author">Esther Howard</span>
              </a>
            </li>
            <li>
              <a href="single-post.html">
                <span className="number">4</span>
                <h3>
                  9 Half-up/half-down Hairstyles for Long and Medium
                  Hair
                </h3>
                <span className="author">Cameron Williamson</span>
              </a>
            </li>
            <li>
              <a href="single-post.html">
                <span className="number">5</span>
                <h3>
                  Life Insurance And Pregnancy: A Working Mom’s
                  Guide
                </h3>
                <span className="author">Jenny Wilson</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar