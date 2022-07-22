import React from "react";
import Link from "next/link";

const test2 = () => {
  return (
    <div className="container">
      <h1>Upcoming Shows</h1>
      <style jsx>
        {`
          h1 {
            margin: 100px 0;
            text-align: center;
            color: white;
          }
        `}
      </style>
      <ul className="shows">
        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">29</span>
                      <span className="text-month">jul</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Hangzhou</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-jul-29.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">30</span>
                      <span className="text-month">Jul</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Nanjing</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-jul-30.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">31</span>
                      <span className="text-month">Jul</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Ningbo</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-jul-31.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">5</span>
                      <span className="text-month">Aug</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Wuhan</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-aug-5.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">6</span>
                      <span className="text-month">Aug</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Changsha</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-aug-6.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="show">
          <Link href="/shows">
            <div className="show-holder">
              <div className="text-holder">
                <div className="text-holder-outer">
                  <div className="text-date-holder">
                    <div className="text-date-holder-inner">
                      <span className="text-day">13</span>
                      <span className="text-month">Aug</span>
                    </div>
                  </div>
                  <div className="text-holder-inner">
                    <h3 className="text-title">Shijiazhuang</h3>
                    <div className="categories"></div>
                  </div>
                </div>
              </div>

              <div className="image-holder">
                <span className="image">
                  <img src="images/posters/2022/poster-aug-13.jpg" alt="" />
                </span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default test2;
