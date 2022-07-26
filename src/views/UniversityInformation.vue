<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a>
                    <img v-lazy="universityInfo.logo" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a :href="universityInfo.officialUrl">
                    <base-button type="info" size="sm" class="mr-4"
                      >Website</base-button
                    ></a
                  >
                  <span
                    v-for="(val, index) in universityInfo.socialMedia"
                    :key="index"
                    class="mr-2"
                  >
                    <a :href="val.url">
                      <i :class="val.iconClass"></i>
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">{{ universityInfo.rank }}</span>
                    <span class="description">#Rank</span>
                  </div>
                  <div>
                    <span class="heading"
                      >{{ universityInfo.acceptanceRate }}%</span
                    >
                    <span class="description">#Acceptance</span>
                  </div>
                  <div>
                    <span class="heading">{{
                      universityInfo.coursesCount
                    }}</span>
                    <span class="description">#Courses</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{ universityInfo.name }}</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>{{ universityInfo.city }},
                {{ universityInfo.state }}, {{ universityInfo.countryInitials }}
              </div>
            </div>
            <div class="text-left">
              <base-nav class="navbar-main" type="" effect="light" expand>
                <ul class="navbar-nav align-items-lg-left mr-lg-auto">
                  <li
                    class="nav-item navbar-nav navbar-nav-hover"
                    v-for="(val, index) in sections"
                    :key="index"
                  >
                    <a
                      slot="title"
                      class="nav-link cursor"
                      data-toggle="dropdown"
                      role="button"
                      @click="scrollToElement(val.ref)"
                    >
                      <i class="ni ni-collection d-lg-none"></i>
                      <span class="nav-link-inner--text">{{ val.name }}</span>
                    </a>
                  </li>
                </ul></base-nav
              >
            </div>
            <div class="mt-4 py-5 border-top text-justify" ref="overview">
              <h4 class="text-center">OVERVIEW</h4>
              <div class="row justify-content-justify">
                <div class="col-lg-12">
                  <p>
                    {{ universityInfo.description }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 py-4 border-top text-justify" ref="courses">
              <h4 class="text-center">COURSES</h4>
              <div class="row justify-content-justify">
                <div class="col-lg-12">
                  <ul>
                    <li
                      v-for="(val, index) in universityInfo.courses"
                      :key="index"
                    >
                      <span
                        class="cursor"
                        @click="goToCourse(val.id, val.alias)"
                      >
                        <u> {{ val.name }} </u>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-5 py-4 border-top text-justify" ref="expenses">
              <h4 class="text-center">FEES & EXPENSES</h4>
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading currency"
                        >{{ universityInfo.averageTuitionFee }}
                        {{ universityInfo.currency }}</span
                      >
                      <span class="description">Average Yearly Tution Fee</span>
                    </div>
                    <div>
                      <span class="heading currency"
                        >{{
                          universityInfo.averageMonthlyLivingExpenseOnCampus
                        }}
                        {{ universityInfo.currency }}</span
                      >
                      <span class="description"
                        >Average Monthly Expenses (On-Campus)</span
                      >
                    </div>
                    <div>
                      <span class="heading currency"
                        >{{
                          universityInfo.averageMonthlyLivingExpenseOffCampus
                        }}
                        {{ universityInfo.currency }}</span
                      >
                      <span class="description"
                        >Average Monthly Expenses (Off-Campus)</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 py-4 border-top text-justify" ref="scholarships">
              <h4 class="text-center">SCHOLARSHIPS</h4>
              <div class="container">
                <div
                  v-for="(val,index) in universityInfo.scholarships"
                  :key="index"
                >
                  <div class="row mt-2">
                    <div class="col-8 "><h5>{{val.name}}</h5></div>
                    <div class="col text-align-right">
                      <a class="cursor" :href="val.url">view details</a>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col"><i class="fa fa-graduation-cap"></i> DEGREE</div>
                    <div class="col"><i class="fa fa-calendar"></i> DEADLINE</div>
                    <div class="w-100"></div>
                    <div class="col">{{val.degree}}</div>
                    <div class="col">{{val.deadline}}</div>
                  </div>
                  <div class="row mt-4">
                    <div class="col"><i class="fa fa-money"></i> SCHOLARSHIP AMOUNT</div>
                    <div class="col"><i class="fa fa-trophy"></i> SCHOLARSHIP TYPE</div>
                    <div class="w-100"></div>
                    <div class="col">{{val.amount}}</div>
                    <div class="col">{{val.type}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 py-4 border-top text-justify" ref="international">
              <h4 class="text-center">INTERNATIONAL STUDENTS</h4>
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading currency"
                        >{{
                          universityInfo.internationalStudents.percentage
                        }}
                        %</span
                      >
                      <span class="description"
                        >International Students Percentage</span
                      >
                    </div>
                    <div>
                      <span class="heading currency"
                        >{{ universityInfo.internationalStudents.total }}
                      </span>
                      <span class="description"
                        >Total International Students</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 py-4 border-top text-justify" ref="alumni">
              <h4 class="text-center">ALUMNI/CURRENT STUDENTS</h4>
              <div class="row justify-content-justify">
                <div class="col-lg-12">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
export default {
  components: {
    BaseNav,
    BaseDropdown,
  },
  data() {
    return {
      sections: [
        {
          name: "Overview",
          ref: "overview",
        },
        {
          name: "Courses",
          ref: "courses",
        },
        {
          name: "Fees/Expenses",
          ref: "expenses",
        },
        {
          name: "Scholarships",
          ref: "scholarships",
        },
        {
          name: "International Students",
          ref: "international",
        },
        {
          name: "Alumni/Current Students",
          ref: "alumni",
        },
      ],
      universityInfo: {
        id: "1",
        name: "Syracuse University",
        logo: "https://www.logolynx.com/images/logolynx/22/2214780819eabe29ea17db9c04dfcd71.jpeg",
        state: "New York",
        city: "Syracuse",
        country: "United States of America",
        countryInitials: "USA",
        description:
          "Syracuse University (informally 'Cuse or SU)[10] is a private research university in Syracuse, New York. Established in 1870 with roots in the Methodist Episcopal Church, the university has been nonsectarian since 1920.[11] Located in the city's University Hill neighborhood, east and southeast of downtown Syracuse, the large campus features an eclectic mix of architecture, ranging from nineteenth-century Romanesque Revival to contemporary buildings. Syracuse University is organized into 13 schools and colleges, with nationally recognized programs in information studies and library science, architecture, communications, business administration, inclusive education and wellness, sport management, public administration, engineering and the College of Arts and Sciences. The university is classified among \"R1: Doctoral Universities – Very high research activity\".[12] \nAlumni and affiliates include three Nobel Prize laureates, one Fields Medalist, 36 Olympic Medalists, 13 Pulitzer Prize recipients, numerous Academy Award winners, two Rhodes Scholars, four Marshall Scholars, the 46th president of the United States Joe Biden, and various governors and members of the U.S. Senate and House of Representatives. Syracuse University athletic teams, known as the Orange, participate in 20 intercollegiate sports. SU is a member of the Atlantic Coast Conference, or ACC for all NCAA Division I athletics,[13] except for the men's rowing and women's ice hockey teams.[14][15] SU is also a member of the Eastern College Athletic Conference.[16]",
        courses: [
          {
            id: "1",
            name: "Master of Science In Computer Science",
            alias: "MSCS",
          },
          {
            id: "2",
            name: "Masters In Information Science",
            alias: "MIS",
          },
        ],
        rank: 69,
        acceptanceRate: 69,
        coursesCount: 15,
        officialUrl: "https://www.syracuse.edu",
        averageTuitionFee: 45000,
        averageMonthlyLivingExpenseOnCampus: 900,
        averageMonthlyLivingExpenseOffCampus: 900,
        currency: "USD",
        socialMedia: [
          {
            id: 1,
            name: "facebook",
            logo: "",
            iconClass: "fa fa-facebook-square",
            url: "",
          },
          {
            id: 2,
            name: "linkedin",
            logo: "",
            iconClass: "fa fa-linkedin-square",
            url: "",
          },
        ],
        scholarships: [
          {
            id: "1",
            name: "The Founders’ Scholarship",
            deadline: "02/01/21",
            amount: 50230,
            degree: "masters",
            type: "NA",
            url: "",
          },
        ],
        internationalStudents: {
          percentage: 19,
          total: 3690,
        },
      },
    };
  },
  methods: {
    scrollToElement(id) {
      var ele = this.$refs[id];
      ele.scrollIntoView({ behavior: "smooth" });
    },
    goToCourse(id, name) {
      this.$router.push({
        name: "universityCourse",
        params: { id: id, name: name },
      });
    },
  },
};
</script>
<style>
.cursor {
  cursor: pointer;
}
.currency {
  color: green;
}
.alignleft {
  float: left;
}
.alignright {
  float: right;
}
.text-align {
  text-align: left;
}
.text-align-right {
  text-align: right;
}
</style>
