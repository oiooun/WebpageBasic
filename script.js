

// 헤더부분 배경, 이미지 설명글
    const images = ['img/mainimg1.jpg', 'img/mainimg2.jpg', 'img/mainimg4.jpg', 'img/mainimg5.jpg', 'img/mainimg6.jpg'];
    const descriptions = [
      '파도와 함께 떠나는 해변 여행!',
      '산의 절경을 경험하세요.',
      '도시의 아름다운 경관을 즐기세요.',
      '호수 주변의 고요함과 평화를 느껴보세요.',
      '숲 속의 자연을 만끽할 수 있는 여행!'
    ];
    
    let currentIndex = 0;
    
    function changeBackgroundImage() {
        const heroSection = document.getElementById('HeaderBackground');
        const imageDescription = document.getElementById('imageDescription');
    
        imageDescription.classList.remove('visible');
    
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
        
        setTimeout(() => {
            imageDescription.textContent = descriptions[currentIndex];
            imageDescription.classList.add('visible');
        }, 500);
    
       
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);





// 스크롤 이벤트 top 버튼
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {

            scrollToTopBtn.style.display = 'block';
        } else {

            scrollToTopBtn.style.display = 'none';
        }
    });


    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    });


//nav-over-ray effect

    const NavMain = document.getElementById('NavMain');
    const overlay = document.getElementById('overlay');

    document.addEventListener('mousemove', (event) => {
        if (event.clientY < 50) {
            
            NavMain.classList.add('show-nav_main');
            overlay.style.display = 'block';  
        } else {
            
            NavMain.classList.remove('show-nav_main');
            overlay.style.display = 'none';  
        }
    });




// 언어 icon


    document.getElementById("language-icon").addEventListener("click", function() {
        var menu = document.getElementById("language-menu");
        menu.classList.toggle("show"); // 'show' 클래스를 토글하여 애니메이션 적용
    });
    


    function toggleMenu() {
        const mobileMenu = document.querySelector('.nav_main nav.mobile');
        mobileMenu.classList.toggle('show');
      }




      const regionInfo = {
        korea: { 
          description: "지도를 클릭해보세요",
          cities: [] // 대한민국 자체는 도시 목록이 없으므로 비워둡니다.
        },
        gangwon: {
          title: "강원도",
          description: "강원도는 자연 경관이 아름다운 지역으로 유명합니다. 산과 바다, 그리고 청정한 공기까지 매력적인 여행지입니다.",
          link: "detail.html", // 강원도 설명 링크
          cities: [
            {
              name: "춘천",
              description: "춘천은 낭만적인 여행지로 유명합니다.",
              influencer: {
                name: "이춘천",
                description: "춘천을 사랑하는 로컬 가이드입니다.",
                image: "chuncheon_influencer.jpg",
                youtubeLink: "https://youtube.com/chuncheon_influencer" // 유튜브 링크만 남김
              }
            },
            {
              name: "속초",
              description: "속초는 바다와 산이 어우러진 도시입니다.",
              influencer: {
                name: "김속초",
                description: "속초의 숨은 명소를 소개하는 여행자입니다.",
                image: "sokcho_influencer.jpg",
                youtubeLink: "https://youtube.com/sokcho_influencer"
              }
            },
            {
              name: "속초",
              description: "속초는 바다와 산이 어우러진 도시입니다.",
              influencer: {
                name: "김속초",
                description: "속초의 숨은 명소를 소개하는 여행자입니다.",
                image: "sokcho_influencer.jpg",
                youtubeLink: "https://youtube.com/sokcho_influencer"
              }
            },
            {
              name: "속초",
              description: "속초는 바다와 산이 어우러진 도시입니다.",
              influencer: {
                name: "김속초",
                description: "속초의 숨은 명소를 소개하는 여행자입니다.",
                image: "sokcho_influencer.jpg",
                youtubeLink: "https://youtube.com/sokcho_influencer"
              }
            },
            {
              name: "속초",
              description: "속초는 바다와 산이 어우러진 도시입니다.",
              influencer: {
                name: "김속초",
                description: "속초의 숨은 명소를 소개하는 여행자입니다.",
                image: "sokcho_influencer.jpg",
                youtubeLink: "https://youtube.com/sokcho_influencer"
              }
            },
            {
              name: "속초",
              description: "속초는 바다와 산이 어우러진 도시입니다.",
              influencer: {
                name: "김속초",
                description: "속초의 숨은 명소를 소개하는 여행자입니다.",
                image: "sokcho_influencer.jpg",
                youtubeLink: "https://youtube.com/sokcho_influencer"
              }
            }
          ]
        },
        gyeonggi: {
          title: "경기도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        chungbuk: {
          title: "충청북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        chungnam: {
          title: "충청남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        gyeongbuk: {
          title: "경상북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        gyeongnam: {
          title: "경상남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        jeonbuk: {
          title: "전라북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        },
        jeonnam: {
          title: "전라남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "https://www.gg.go.kr/", // 경기도 설명 링크
          cities: [
            {
              name: "수원",
              description: "수원 화성이 유명합니다.",
              influencer: {
                name: "박수원",
                description: "수원의 역사와 문화를 알리는 블로거입니다.",
                image: "suwon_influencer.jpg",
                youtubeLink: "https://youtube.com/suwon_influencer"
              }
            },
            {
              name: "고양",
              description: "고양은 편안한 교외 도시입니다.",
              influencer: {
                name: "최고양",
                description: "고양의 따뜻한 매력을 전하는 유튜버입니다.",
                image: "goyang_influencer.jpg",
                youtubeLink: "https://youtube.com/goyang_influencer"
              }
            }
          ]
        }
        
        
      };

      
      // 초기 상태에서 대한민국 설명을 보여줍니다.
      document.getElementById("region-title").textContent = regionInfo.korea.title;
      document.getElementById("region-description").textContent = regionInfo.korea.description;
      
      // 초기 링크 숨기기
      document.getElementById("region-link").style.display = "none";
      
      let currentRegion = "korea"; // 현재 표시된 지역, 초기값은 대한민국
      
      const regions = document.querySelectorAll(".map-region");
      let activeRegion = null;
      
      regions.forEach(region => {
        region.addEventListener("click", () => {
          const regionId = region.id;
          const info = regionInfo[regionId];
      
          if (!info) return;
      
          // 같은 지역을 다시 클릭하면 대한민국으로 돌아가도록 처리
          if (regionId === currentRegion) {
            // 대한민국 설명으로 되돌리기
            document.getElementById("region-title").textContent = regionInfo.korea.title;
            document.getElementById("region-description").textContent = regionInfo.korea.description;
      
            // 링크 숨기기
            document.getElementById("region-link").style.display = "none";
      
            // 도시 목록 및 정보 숨기기
            document.getElementById("city-container").style.display = "none";
            document.getElementById("city-info").style.display = "none";
            document.getElementById("city-influencer-container").style.display = "none"; // 인플루언서 정보 숨기기
            currentRegion = "korea"; // 현재 지역을 대한민국으로 설정
          } else {
            // 다른 지역을 클릭했을 때 해당 지역 설명 표시
            document.getElementById("region-title").textContent = info.title;
            document.getElementById("region-description").textContent = info.description;
      
            // 지역 설명 링크 처리
            const regionLink = document.getElementById("region-link");
            if (info.link) {
              regionLink.href = info.link;
              regionLink.style.display = "block";
            } else {
              regionLink.style.display = "none";
            }
      
            // 도시 버튼 초기화 및 생성
            const cityContainer = document.getElementById("city-container");
            const cityButtons = document.getElementById("city-buttons");
            cityButtons.innerHTML = "";
      
            info.cities.forEach(city => {
              const button = document.createElement("button");
              button.textContent = city.name;
              button.className = "city-button";
              button.addEventListener("click", () => {
                // 도시 정보 업데이트
                document.getElementById("city-info").style.display = "block";
                document.getElementById("city-name").textContent = city.name;
                document.getElementById("city-description").textContent = city.description;
            
                // 도시 인플루언서 정보 업데이트
                const cityInfluencer = city.influencer;
                const cityInfluencerContainer = document.getElementById("city-influencer-container");
                document.getElementById("city-influencer-image").src = cityInfluencer.image;
                document.getElementById("city-influencer-name").textContent = cityInfluencer.name;
                document.getElementById("city-influencer-description").textContent = cityInfluencer.description;
                document.getElementById("city-influencer-youtube-link").href = cityInfluencer.youtubeLink; // 유튜브 링크만 남김
                cityInfluencerContainer.style.display = "block";
              });
              cityButtons.appendChild(button);
            });
            
      
            cityContainer.style.display = "block";
      
            // 도시 관련 설명 및 인플루언서 정보 초기화
            document.getElementById("city-info").style.display = "none";
            document.getElementById("city-influencer-container").style.display = "none";
      
            currentRegion = regionId; // 현재 지역을 해당 지역으로 설정
          }
      
          // 이전 활성화된 지역의 상태 제거
          if (activeRegion) {
            document.getElementById(activeRegion).classList.remove("active");
          }
          region.classList.add("active");
          activeRegion = regionId;
        });
      });
      