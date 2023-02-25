import "./BubbleChart.css";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";

const BubbleChart = () => {
  return (
    <div className="bubble-chart">
      <div className="background" />

      {/* A big bubble chart with various bubble icons representing different categories */}
      <div className="big-widget-bubble-chart">
        <img className="bg-lines-icon" alt="" src="../bg-lines.svg" />
        <img className="bg-lines-icon1" alt="" src="../bg-lines1.svg" />
        <div className="bubble-chart1">
          <img className="bubble-icon" alt="" src="../bubble.svg" />
          <img className="bubble-icon1" alt="" src="../bubble1.svg" />
          <img className="bubble-icon2" alt="" src="../bubble2.svg" />
          <img className="bubble-icon3" alt="" src="../bubble3.svg" />
          <img className="bubble-icon4" alt="" src="../bubble4.svg" />
          <img className="bubble-icon5" alt="" src="../bubble5.svg" />
          <img className="bubble-icon6" alt="" src="../bubble6.svg" />
          <img className="bubble-icon7" alt="" src="../bubble7.svg" />
          <img className="bubble-icon8" alt="" src="../bubble8.svg" />
          <img className="bubble-icon9" alt="" src="../bubble9.svg" />
          <img className="bubble-icon10" alt="" src="../bubble10.svg" />
          <img className="bubble-icon11" alt="" src="../bubble11.svg" />
          <img className="bubble-icon12" alt="" src="../bubble12.svg" />
          <img className="bubble-icon13" alt="" src="../bubble13.svg" />
          <img className="bubble-icon14" alt="" src="../bubble14.svg" />
          <img className="bubble-icon15" alt="" src="../bubble15.svg" />
          <img className="bubble-icon16" alt="" src="../bubble16.svg" />
          <img className="bubble-icon17" alt="" src="../bubble17.svg" />
        </div>

        {/* Investments section */}
        <div className="investments">
          <div className="time">3 month</div>
          <div className="tittle">Investments</div>
          <div className="value">$76,644</div>
        </div>

        {/* Design section */}
        <div className="design">
          <div className="time1">3 month</div>
          <div className="value1">$32,982</div>
          <div className="title1">Design</div>
        </div>

        {/* Finance section */}
        <div className="finance">
          <div className="value2">
            <span> $</span>
            <span className="span">23,657</span>
          </div>
          <div className="title2">Finance</div>
        </div>

        {/* Business section */}
        <div className="business">
          <div className="value3">$21,987</div>
          <div className="title3">Business</div>
        </div>

        {/* Development section */}
        <div className="development">
          <div className="value4">$31,657</div>
          <div className="title4">Development</div>
        </div>
      </div>

      <div className="title5">Design faster</div>
      <img className="bubble-icon18" alt="" src="../bubble18.svg" />
      <img className="bubble-icon19" alt="" src="../bubble19.svg" />
      <img className="bubble-icon20" alt="" src="../bubble20.svg" />
      <img className="bubble-icon21" alt="" src="../bubble21.svg" />
      <img className="bubble-icon22" alt="" src="../bubble22.svg" />
      <b className="timeline">Timeline</b>

      {/* Chart filter */}
      <div className="timeline1">
        <div className="background-element" />
        <div className="date-range-picker">
          <div className="time-period">
            <div className="period">1W</div>
          </div>
          <div className="time-period">
            <div className="period">1M</div>
          </div>
          <div className="time-period2">
            <div className="hover" />
            <b className="period2">3M</b>
          </div>
          <div className="time-period">
            <div className="period">1Y</div>
          </div>
          <div className="time-period">
            <div className="period">ALL</div>
          </div>
        </div>
      </div>
      {/* Navigation bar */}
      <Navbar />

      {/* Footer */}
      <Footer />

      {/* Trending goods */}
      <div className="informer-trend-goods">
        <div className="value5">204</div>
        <b className="title6">Trend goods</b>
        <div className="icon3">
          <div className="stroke" />
          <div className="favorite">
            <img className="vector-icon" alt="" src="../vector.svg" />
          </div>
        </div>
      </div>

      {/* Shopping views */}
      <div className="informer-trend-goods1">
        <div className="value6">65,540</div>
        <b className="title7">Shopping views</b>
        <div className="icon3">
          <div className="stroke" />
          <img className="favorite" alt="" src="../eye1.svg" />
        </div>
      </div>

      {/* Store dynamics */}
      <div className="informer-trend-goods2">
        <div className="value7">324</div>
        <b className="title8">Store dynamics</b>
        <div className="icon3">
          <div className="stroke" />
          <div className="favorite">
            <img className="vector-icon1" alt="" src="../vector1.svg" />
          </div>
        </div>
      </div>

      {/* Panel section */}
      <div className="panel-group" id="panel-group">
        <div className="zoom" id="zoom">
          <div className="bg1" id="zoom-mask" />
          <div className="plus" id="plus">
            <img className="plus-icon" alt="" src="../plus.svg" />
          </div>
          <div className="minus" id="minus">
            <img className="minus-icon" alt="" src="../minus.svg" />
          </div>
        </div>
        <div className="map" id="map">
          <div className="bg1" id="map-mask" />
          <div className="map1" id="map-map">
            <img className="vector-icon" alt="" src="../icon2.svg" />
          </div>
        </div>
        <div className="tool" id="tools">
          <div className="bg1" id="tools-mask" />
          <div className="plus" id="node">
            <img className="icon7" alt="" src="../icon3.svg" />
          </div>
          <div className="element" id="element">
            <img className="icon-1" alt="" src="../icon-1.svg" />
          </div>
          <div className="minus" id="path">
            <img className="icon-2" alt="" src="../icon-2.svg" />
          </div>
        </div>
      </div>
      <div className="widget-m-size-combined-cir">
        <div className="graph">
          <div className="chart-double-big-circle-char">
            <div className="chart1">
              <img className="chart-bg-icon" alt="" src="../chart-bg.svg" />
              <img className="chart-bg-icon1" alt="" src="../chart-bg1.svg" />
              <img className="progress-1-icon" alt="" src="../progress-1.svg" />
              <img className="progress-2-icon" alt="" src="../progress-2.svg" />
              <img className="progress-3-icon" alt="" src="../progress-3.svg" />
              <img className="bg-icon" alt="" src="../bg.svg" />
            </div>
            <div className="icon8">
              <img className="icon-chart" alt="" src="../icon--chart.svg" />
              <div className="icon-diamond">
                <img className="vector-icon" alt="" src="../vector2.svg" />
              </div>
              <img className="icon-chart" alt="" src="../icon--bill.svg" />
              <img
                className="icon-chart"
                alt=""
                src="../icon--weekly-calendar.svg"
              />
              <img
                className="icon-chart"
                alt=""
                src="../icon--monthly-calendar.svg"
              />
              <img
                className="icon-chart"
                alt=""
                src="../icon--yearly-calendar-calendar.svg"
              />
              <img className="icon-chart" alt="" src="../icon--deposit.svg" />
              <img className="icon-chart" alt="" src="../icon--doc.svg" />
            </div>
          </div>

          {/* Total Earning Graph */}
          <div className="info">
            <div className="title9">
              <div className="name">Total earning</div>
            </div>
            <div className="value8">
              <div className="amount">$12,875</div>
              <div className="indicator">
                <div className="arrow-up">
                  <img className="arrow-icon" alt="" src="../arrow.svg" />
                </div>
                <div className="percent">2%</div>
              </div>
            </div>
            <div className="detail">Compared to $21,504 last year</div>
          </div>
        </div>
        <div className="table">
          <div className="row">
            <div className="name1">Presentation</div>
            <div className="amount1">862</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon2" alt="" src="../chart2.svg" />
            </div>
          </div>
          <div className="row">
            <div className="name1">Development</div>
            <div className="amount1">753</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon3" alt="" src="../chart3.svg" />
            </div>
          </div>
          <div className="row">
            <div className="name1">Research</div>
            <div className="amount1">553</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon4" alt="" src="../chart4.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* Total Earning and Sales */}
      <div className="widget-m-size-omposite-in">
        <div className="informer">
          <div className="title10">
            <div className="name4">Total earning</div>
          </div>
          <div className="value9">
            <div className="amount4">$12,875</div>
            <div className="indicator1">
              <div className="arrow-up">
                <img className="arrow-icon" alt="" src="../arrow1.svg" />
              </div>
              <div className="percent1">10%</div>
            </div>
          </div>
          <div className="detail1">Compared to $21,490 last year</div>
        </div>
        <img className="divider-icon" alt="" src="../divider.svg" />
        <div className="informer">
          <div className="title10">
            <div className="name4">Sales</div>
          </div>
          <div className="value9">
            <div className="amount4">$43,123</div>
            <div className="indicator1">
              <div className="arrow-up">
                <img className="arrow-icon" alt="" src="../arrow1.svg" />
              </div>
              <div className="percent1">12%</div>
            </div>
          </div>
          <div className="detail1">Compared to $21,490 last year</div>
        </div>
      </div>

      {/* Travel */}
      <div className="table-indicator-table">
        <div className="summary">
          <div className="summary">
            <div className="name6">Travel</div>
            <div className="amount6">760</div>
            <div className="summary1">2,540</div>
          </div>
          <div className="status">
            <div className="arrow-up">
              <img className="arrow-icon" alt="" src="../arrow3.svg" />
            </div>
            <img className="arrow-up-icon" alt="" src="../arrow-up.svg" />
          </div>
        </div>

        {/* Presentation */}
        <div className="summary">
          <div className="summary">
            <div className="name6">Presentation</div>
            <div className="amount6">650</div>
            <div className="summary1">2,304</div>
          </div>
          <div className="status">
            <img className="arrow-up-icon" alt="" src="../arrow-up1.svg" />
            <div className="arrow-up">
              <img className="arrow-icon" alt="" src="../arro.svg" />
            </div>
          </div>
        </div>

        {/* Business */}
        <div className="summary">
          <div className="summary">
            <div className="name6">Business</div>
            <div className="amount6">612</div>
            <div className="summary1">2,140</div>
          </div>
          <div className="status">
            <div className="arrow-up">
              <img className="arrow-icon" alt="" src="../arrow3.svg" />
            </div>
            <img className="arrow-up-icon" alt="" src="../arrow-up.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
