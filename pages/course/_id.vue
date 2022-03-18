<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14">{{courseWebVo.title}}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
            <img height="357px" :src="courseWebVo.cover" :alt="courseWebVo.title" class="dis c-v-pic">
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{courseWebVo.title}}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size:24px;">￥{{courseWebVo.price}}</b>
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14">主讲： {{courseWebVo.teacherName}}&nbsp;&nbsp;&nbsp;</span>
            </section>

            <section class="c-attr-mt" v-if="isBuy || Number(courseWebVo.price)  === 0">
              <a href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
            </section>

            <section class="c-attr-mt of" v-else>
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a @click="createOrders()" href="#" title="立即购买" class="comm-btn c-btn-3">立即购买</a>
              </span>
            </section>
            
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.buyCount}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.lessonNum}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseWebVo.viewCount}}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" :title="courseWebVo.title">{{courseWebVo.title}}</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description">
                        
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li class="lh-menu-stair" v-for="chapter in chapterVoList" :key="chapter.id">
                            <a href="javascript: void(0)" :title="chapter.title" class="current-1">
                              <em class="lh-menu-i-1 icon18 mr10"></em>{{chapter.title}}
                            </a>
                            <ol class="lh-menu-ol" style="display: block;">
                              <li class="lh-menu-second ml30" v-for="video in chapter.children" :key="video.id">
                                <a :href="'/player/' + video.videoSourceId" target="_blank">
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </a>
                              </li>
                              
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>

          <div>
              <h6 class="c-i-content c-infor-title">
                <span>课程评价</span>
              </h6>
              <section class="mt20">
                <div class="lh-menu-wrap">
                  <menu id="lh-menu" class="lh-menu mt10 mr10">
                    <el-input
                      placeholder="请输入内容，按回车键或点击评论按钮进行评论"
                      v-model="content"
                      @keyup.enter.native="addComment"
                      clearable>                              
                    </el-input>
                    <el-button type="primary" plain @click="addComment">评论</el-button>  
                    
                  </menu>
                </div>
              </section>
              <section class="mt20">
                <div class="lh-menu-wrap">
                  <menu id="lh-menu" class="lh-menu mt10 mr10">
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%"
                      :default-sort = "{prop: 'gmtCreate', order: 'descending'}"
                      >
                      <el-table-column
                        prop="nickname"
                        label="会员昵称"
                        sortable
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="gmtCreate"
                        label="创建时间"
                        sortable
                        width="180">
                      </el-table-column>
                      
                      <el-table-column
                        prop="content"
                        label="评论内容">
                      </el-table-column>
                    </el-table>

                    <!-- 分页 -->
                    <el-pagination
                      :current-page="page"
                      :page-size="size"
                      :total="total"
                      style="padding: 30px 0; text-align: center;"
                      layout="total, prev, pager, next, jumper"
                      @current-change="getCommentList"
                    />
                  </menu>
                </div>
              </section>
          </div>
          

            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto;">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img :src="courseWebVo.avatar" width="50" height="50" alt>
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{courseWebVo.teacherName}}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{courseWebVo.intro}}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>
<script>
import orderApi from '@/api/order'
import courseApi from '@/api/course'
import commentApi from '@/api/comment'
import cookie from 'js-cookie'

export default {
  asyncData({params, err}) {
    return {
      courseId: params.id
    }
  },
  data() {
      return {
        content: '',
        page: 1,
        size: 10,
        total: 0,
        tableData: [],
        token: '',
        commentData: {
          content: '',
          courseId: '',
          teacherId: ''
        },
        chapterVoList: [],
        courseWebVo: {},
        isBuy: false
      }
    },
    created() {
      this.getCommentList()
      this.initCourseInfo()
    },
    methods: {
      initCourseInfo() {
         courseApi.getFrontCourseInfo(this.courseId)
          .then(response => {
            this.courseWebVo = response.data.data.courseWebVo
            this.chapterVoList = response.data.data.chapterVoList
            this.isBuy = response.data.data.isBuy 
            console.log("................" + this.isBuy)      
        }) 
      },
      getCommentList() {
        commentApi.getCommentList(this.page, this.size, this.courseId)
        .then(response => {
          console.log(response)
          this.tableData = response.data.data.rows
          this.total = response.data.data.total
          this.content = ''
        })
      },
      addComment() {
        var userToken = cookie.get('guli_token')
        console.log("userToken" + userToken)
        if (!userToken) {
          this.$confirm('此操作需要登录后才能操作, 是否前往登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
              //跳转页面
              this.$router.push({path:'/login'})
          })
        } else {
          this.commentData.content = this.content
          this.commentData.courseId = this.courseId
          this.commentData.teacherId = this.courseWebVo.teacherId

          cookie.set('guli_token', userToken,{domain: 'localhost'})
          commentApi.addComment(this.commentData).then(response => {
            this.$message({
              type: 'success',
              message: '添加评论成功!'
            })

            this.page = 1
            this.getCommentList()
          })

        }
      },
      createOrders() {
        orderApi.createOrder(this.courseId)
        .then(response => {
          //获取返回订单号
          //生成订单之后，跳转订单显示页面
          this.$router.push({path:'/order/'+response.data.data.orderNo})
        })
      }
    }
};
</script>