<template>
  <div class="container w">
    <!-- 最顶层 -->
    <div class="topBar">
      <div class="topBarItem" v-for="item in topBarList" :key="item.imgPath">
        <a href="javascript:void(0)">
          <img :src="item.imgPath" alt="" />
          <span class="itemName">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <!-- 标题 -->
    <div class="title">“遇贫则鸣”返贫监测系统</div>
    <!-- 图片区域 -->
    <div class="swipperContainer">
      <MySwipper></MySwipper>
      <div class="navBar">
        <navBarItem
          v-for="item in navBarList"
          :key="item.outer"
          :content="item"
        ></navBarItem>
      </div>
    </div>
    <!-- 欢迎访问 -->
    <div class="welcome">
      <span>欢迎</span>
      <img src="../../src/assets/images/welcome.png" alt="" />
      <span>访问</span>
    </div>
    <div class="about">
      <p class="subTitle">关于我们</p>
      <p class="content">
        “遇贫则鸣”智能动态防返贫监测系统是由**公司制定的一个针对于脱贫户返贫、边缘户等存在返贫风险人群设计的返贫监测智能解决方案，由信息收集系统、监测预警系统、入户核实系统、帮扶落实系统以及防返贫APP和智能可视化面板站等部分组成的一套智能系统，致力于解决目前我国脱贫户众多、个体差异大、返贫风险因素多、数据挖掘程度不深所造成的人为返贫评估存在较大主观性、滞后性、精度低的现状。
      </p>
      <div class="qrCodeContainer">
        <div class="qrcode" v-for="item in qrCodeList" :key="item.name">
          <img :src="item.imgPath" alt="" />
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="bottomBar"></div>
  </div>
</template>

<script>
import MySwipper from "../components/MySwipper.vue";
import navBarItem from "../components/navBarItem.vue";
import phonePng from "/src/assets/images/phone.png";
import lovePng from "/src/assets/images/love.png";
import concatPng from "/src/assets/images/call.png";
import qrcode from "/src/assets/images/qrcode_web.png";
export default {
  components: {
    MySwipper,
    navBarItem,
  },
  setup() {
    let topBarList = [
      { name: "手机APP", imgPath: phonePng },
      { name: "添加收藏", imgPath: lovePng },
      { name: "联系我们", imgPath: concatPng },
    ];
    let navBarList = [
      {
        outer: "首页",
        inner: [],
      },
      {
        outer: "信息收集管理",
        inner: [
          { name: "部门共享数据", url: "" },
          { name: "自主上报数据", url: "" },
        ],
      },
      {
        outer: "返贫预警管理",
        inner: [
          { name: "返贫预警分级", url: "" },
          { name: "监测预警信息", url: "" },
        ],
      },
      {
        outer: "入户审核管理",
        inner: [
          { name: "入户核实进度", url: "" },
          { name: "入户核实反馈", url: "" },
        ],
      },
      {
        outer: "帮扶落实管理",
        inner: [
          { name: "帮扶对象信息", url: "" },
          { name: "单位帮扶措施", url: "" },
        ],
      },
      {
        outer: "信息公开",
        inner: [],
      },
    ];
    let qrCodeList = [
      {
        name: "安卓端",
        imgPath: qrcode,
      },
      {
        name: "IOS",
        imgPath: qrcode,
      },
      {
        name: "小程序",
        imgPath: qrcode,
      },
    ];
    return {
      topBarList,
      navBarList,
      qrCodeList,
    };
  },
};
</script>

<style lang="less" scoped>
@ratio: 1.3;
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .topBar {
    width: 100%;
    height: (55px / @ratio);
    background-color: #d54d29;
    display: flex;
    justify-content: end;
    align-items: center;
    .topBarItem {
      position: relative;
      height: (30px / @ratio);
      margin-right: (18px / @ratio);
      color: white;
      img {
        width: (18px / @ratio);
        height: (18px / @ratio);
        vertical-align: middle;
      }
      .itemName {
        margin-left: 5px;
      }
    }
    .topBarItem::after {
      content: "";
      display: block;
      position: absolute;
      right: (-10px / @ratio);
      top: 4px;
      width: 0px;
      height: (20px / @ratio);
      border: 1px solid rgb(224, 219, 219);
    }
    .topBarItem:last-child::after {
      display: none;
    }
  }
  .title {
    width: 100%;
    height: (84px / @ratio);
    line-height: (84px / @ratio);
    font-size: 25px;
    border: 1px solid #ccc;
    padding-left: (100px / @ratio);
    user-select: none;
  }
  .swipperContainer {
    position: relative;
    width: (1243px / @ratio);
    height: (617px / @ratio);
    margin: 0 auto;
    .navBar {
      width: (1243px / @ratio);
      height: (90px / @ratio);
      position: absolute;
      top: 0;
      background-color: rgba(237, 146, 122, 0.7);
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .swipperContainer::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(110%);
    border: 20px solid;
    border-color: #d8d8d8 transparent transparent transparent;
    z-index: 2;
  }
  .welcome {
    text-align: center;
    margin-top: 70px;
    span {
      font-size: 24px;
      color: #686363;
      display: inline-block;
      width: 80px;
      text-align-last: justify;
    }
    span:first-child {
      margin-right: 40px;
    }
    span:last-child {
      margin-left: 40px;
    }
    img {
      width: (73px / @ratio);
      height: (84px / @ratio);
      vertical-align: middle;
    }
  }
  .about {
    width: (1240px / @ratio);
    height: (480px / @ratio);
    background-color: #faf3f3;
    margin: 0 auto;
    margin-top: (90px / @ratio);
    padding: (25px / @ratio) 0 0 (10px / @ratio);
    .subTitle {
      font-size: 24px;
      letter-spacing: 0.3em;
    }
    .content {
      color: #837878;
      text-indent: 2em;
      margin-top: (25px / @ratio);
      letter-spacing: 0.1em;
      line-height: 30px;
    }
    .qrCodeContainer {
      margin-top: 50px;
      width: 350px;
      float: right;
      display: flex;
      justify-content: space-evenly;
      .qrcode {
        display: inline-block;
        width: (82px / @ratio);
        height: 100px;
        img {
          display: block;
          width: 100%;
        }
        span {
          display: inline-block;
          text-align: center;
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
  .bottomBar {
    background-color: #d54d29;
    height: (55px / @ratio);
  }
}
.w {
  width: (1440px / @ratio);
  margin: 0 auto;
}
</style>