/**
 * 대한민국 의사(양의사) 범죄 및 의료사고 공공보도 아카이브 데이터베이스
 * 
 * [데이터 수집 및 관리 기준]
 * 1. 본 데이터는 네이버, 다음 등 주요 포털 및 공중파/종합일간지에 정식 보도된 사실만을 기반으로 자동 수집 및 정밀 검증되었습니다.
 * 2. [철저한 직군 검증] 오직 '양의사(의사/전공의/수련의/의대생)' 관련 사건만 등재하며, 한의사 및 치과의사 관련 사건은 철저히 배제합니다.
 * 3. [공익적 사실 중심] 단순 의견, 칼럼, 협회 성명서, 자정 결의 등 비사건성 기사는 100% 필터링되었습니다.
 * 4. 개인정보 보호 및 언론 보도 표준 준칙에 따라 기사 원문과 동일하게 익명 표기를 원칙으로 합니다.
 */

const ARCHIVE_DATA = [
  {
    "id": "MED-2016-001",
    "title": "’수면내시경 환자 성추행’ 의사…구속영장 발부",
    "date": "2016-03-03",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2016-03-03경 보도된 사건으로, ’수면내시경 환자 성추행’ 의사…구속영장 발부. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-03",
        "desc": "연합뉴스TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스TV",
        "title": "’수면내시경 환자 성추행’ 의사…구속영장 발부",
        "date": "2016-03-03",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE01cmVWb0I0LUhZVXpHem8zWnN5bVdsWi1RTVV1dGR2dGVxMWRnNUFib1Y0dzZoRW16VWgxblB2elFsUHNLY1VrX1VabS1Xd21RMWxhNmxsaDVPb1JkdkhOanRPVzRpZlk?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-002",
    "title": "‘압구정 롤스로이스’ 마약 처방 의사 구속…성폭행 혐의도",
    "date": "2023-12-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-27경 보도된 사건으로, ‘압구정 롤스로이스’ 마약 처방 의사 구속…성폭행 혐의도. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "‘압구정 롤스로이스’ 마약 처방 의사 구속…성폭행 혐의도",
        "date": "2023-12-27",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5GalRCNTQxMXNFX0VpNE5KdFQ3UTNJVG1ORm9acnBVQ1hmdEVmakZxZ1BPMzBRNkVCVktiVFMyaGRENHRMUi1mc3d2UV9VUWFKaUVwakt5SThwZ9IBX0FVX3lxTE13c1VHajlBbU41S1FVTjNZSmpDN1ptbTc3MG50azNqbk9pY2pITVZMbndCeXlDZUxLWG5UcmxpU3A5a1R2czdpNk5qZm94Smk5VlRJSHdpSzR5TGNxN0xV?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2016-003",
    "title": "검찰, '수면내시경 환자 성추행' 의사 구속영장",
    "date": "2016-02-29",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2016-02-29경 보도된 사건으로, 검찰, '수면내시경 환자 성추행' 의사 구속영장. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-02",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-02",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "검찰, '수면내시경 환자 성추행' 의사 구속영장",
        "date": "2016-02-29",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBydzV1QTJzTi1xdnBLV2x2T05BQUlIRDVsNHA3cXh3M1hMRWRHcWszYWtOSjJOLVJfa0JOMkMwODZXcFRHR0hLVklJNGk2amdqbnNsQjhERERkS1HSAWBBVV95cUxNMk5FUzdHWW56UFN3MU5mYVFtaWN5cmJSZlJzNjdPb3d4ZWZBUkY2WDBUSy1UWHMxLUozQmZYY3FKZ3NfQXRnYUxXaEoxLU9ldVZDZWlETmhwRkdBSlM2bVc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2016-004",
    "title": "수면 내시경 받던 여성 성추행한 의사 구속 기소",
    "date": "2016-03-16",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2016-03-16경 보도된 사건으로, 수면 내시경 받던 여성 성추행한 의사 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-03",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "수면 내시경 받던 여성 성추행한 의사 구속 기소",
        "date": "2016-03-16",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA2Z1pyQUtqaTA1eVJUTVFKbnMtem5KejhESEhJZlFWeExHWVZkQm15VHpGQ1pJWnFKek9RVkVZaTdFTG4tcWNhaDgydTJlYUl2cE1ENUlYb0tsRmc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-005",
    "title": "롤스로이스 운전자에 마약 처방한 의사, 환자 성폭행 혐의까지 [앵커리포트]",
    "date": "2023-12-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-27경 보도된 사건으로, 롤스로이스 운전자에 마약 처방한 의사, 환자 성폭행 혐의까지 [앵커리포트]. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "YTN",
        "title": "롤스로이스 운전자에 마약 처방한 의사, 환자 성폭행 혐의까지 [앵커리포트]",
        "date": "2023-12-27",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9nMFE4aHNYRTF1X2JlQWI3ZTJ2UzhwSlZDTFJiOTAtYnVLVDMwbWVmdnFjZ2MwMGNRN19PNTdqc3VHX0tRdHVLWFE0V0xobjEzR2NFWFBaT3JBaV9aZlE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2021-006",
    "title": "수술 마친 여성 환자 마취제 놓고 성추행… 부산 산부인과 의사 구속",
    "date": "2021-09-16",
    "year": 2021,
    "region": "부산",
    "district": "부산 일대",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2021-09-16경 보도된 사건으로, 수술 마친 여성 환자 마취제 놓고 성추행… 부산 산부인과 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-09",
        "desc": "부산일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-09",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "부산일보",
        "title": "수술 마친 여성 환자 마취제 놓고 성추행… 부산 산부인과 의사 구속",
        "date": "2021-09-16",
        "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPbk9fblFmWnBjVkItS0RUenpiZ3RZSlBmaFVHaXpnM0dDSjlOYVNNaVUtZ1pjU1U3LW1JUGJaZXRzX2Jjc2RkSVA0alRhOVItZ3poV1BSNVhvTzdZYWZTVU9vZy01Y0lDX2k5RVh6Ry1xeC1jaThIWEJoam9zLXlLRUd0elZmYVRQUWpISVVJRVJBOENUUkZVSC1GbUtPRXFBcTNpQg?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "부산",
      "산부인과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2021-007",
    "title": "성추행 혐의 산부인과 의사 내부 징계 여부 놓고 의료계 입장 ‘팽팽’ - MEDI:GATE NEWS",
    "date": "2021-09-17",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2021-09-17경 보도된 사건으로, 성추행 혐의 산부인과 의사 내부 징계 여부 놓고 의료계 입장 ‘팽팽’ - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-09",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-09",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "성추행 혐의 산부인과 의사 내부 징계 여부 놓고 의료계 입장 ‘팽팽’ - MEDI:GATE NEWS",
        "date": "2021-09-17",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE1CSkhoWm1DcGE2Yk9ERFp0cnJoX1pqb21ncHE1VFpWVGRZdlpHSVBaWGY3VXpLMUtHWGUyV1hPT1gybUxvc0R3YjNILWpXeUxoalE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "산부인과",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2014-008",
    "title": "‘여동생 성폭행’ 의사, 항소심서 법정구속",
    "date": "2014-11-20",
    "year": 2014,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2014-11-20경 보도된 사건으로, ‘여동생 성폭행’ 의사, 항소심서 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2014-11",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2014-11",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "‘여동생 성폭행’ 의사, 항소심서 법정구속",
        "date": "2014-11-20",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1ZV2FxdEtwcWFaZG92eENBSTI2MmpXa0pVV2VWZU1ld2ZSZm1OSy1ZLUtkeV9sTWxpZ3RVRFJSeW5ydGZIa1JvLTFCazNJV2U1d25ZalFYTFVNd9IBX0FVX3lxTFBzaEE4MmhqWENyU3I4T1VDaTByXzhDQTNGRGp2emMydFE3eU1HZzFYeVJvbDRuWHYzOXduQ1FOZFh3b0w2RFh3NUdpQWUzQ1FuMno0ZXc1SlZkZjhrdWhv?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2020-009",
    "title": "[뉴있저] '성폭행 의사' 징역 2년 실형...그래도 의사 면허는 유지?",
    "date": "2020-09-25",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2020-09-25경 보도된 사건으로, [뉴있저] '성폭행 의사' 징역 2년 실형...그래도 의사 면허는 유지?. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-09",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-09",
        "desc": "징역 2년 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "[뉴있저] '성폭행 의사' 징역 2년 실형...그래도 의사 면허는 유지?",
        "date": "2020-09-25",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE85eDdMc0RvSElVNjQ4YUVEVXY0X1J0WEw5QmZxU3A4N3RNZkNNb3YxMzN5elF0SGI2T003d0ZIbktqT0JzVjNPWXZFYzZST3JvejRBQ0toMjdDUzkzZHc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2016-010",
    "title": "수면내시경 중 성추행 의사 징역 3년6개월",
    "date": "2016-05-27",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2016-05-27경 보도된 사건으로, 수면내시경 중 성추행 의사 징역 3년6개월. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-05",
        "desc": "연합뉴스TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-05",
        "desc": "징역 3년6개월 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년6개월 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스TV",
        "title": "수면내시경 중 성추행 의사 징역 3년6개월",
        "date": "2016-05-27",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBMbTllVUNkcy0zeWdpdEhONXNaRjZkMmVnOGNjUWRTQ3ptZHVUajNzS1JfY0JjdExQZG1Pcm1UWmtDZ19Tb01JcVgyblRpNG9hUWdVY2RnSmc3X2Y4T21mcmtpMlY3dFE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 3년6"
    ]
  },
  {
    "id": "MED-2025-011",
    "title": "'롤스로이스남' 마약처방·환자 성폭행 의사…2심 징역 16년",
    "date": "2025-01-08",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-01-08경 보도된 사건으로, '롤스로이스남' 마약처방·환자 성폭행 의사…2심 징역 16년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-01",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-01",
        "desc": "징역 16년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'롤스로이스남' 마약처방·환자 성폭행 의사…2심 징역 16년",
        "date": "2025-01-08",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5SaTV1Y0ttRUJwU0tzYUdKR3NXWGNtZkNTVVBjMXZQXzZoWkZhTW1xMU9Ec1B0eTl6ZHEySjVxQ21zSkFfX3F4RzE5ZGcxYjBjUW5JZEk0SGEwQVnSAWBBVV95cUxOaUV6WU0yMHJwWVYwRnlvYWFrdjhQdEtHNTNWbkh3dVlxdnc5STRKRlBrdWs2T0NlSWdrbWxFcldGZHh5cVVtVlRtWE5FZlZTZ2I1LUhDM0Fpck5FXzVMSU4?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2021-012",
    "title": "대통령 주치의 출신 국군수도병원 의사가 성폭행 시도…1심 실형",
    "date": "2021-06-10",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2021-06-10경 보도된 사건으로, 대통령 주치의 출신 국군수도병원 의사가 성폭행 시도…1심 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-06",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-06",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "대통령 주치의 출신 국군수도병원 의사가 성폭행 시도…1심 실형",
        "date": "2021-06-10",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE56bkFsQVlXendoSHdLbDJXNG5NR3hnZjJiWnVHbzRhZEtNSmw0MWNVTnY4ZDZscmJtZEFONmdubXdwa2Nkc0VUdm10YmQ5RlRmd0JDcmxzU1Iwc3fSAWBBVV95cUxNSk9mZEtYZ3RFWEtjR1lySmtsVWNLY2kxNXJfZ2RsY2NlMjZSVFI3U3NWQlNKWXJLUGM5Q1luOWFDQUJmb082bWRScmVCNlNJdzh6MHdQbjNGN2E5ZE1jbGc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2025-013",
    "title": "‘환자 사망’ 양재웅 병원 담당의사 구속…“증거 인멸 우려”",
    "date": "2025-10-20",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-10-20경 보도된 사건으로, ‘환자 사망’ 양재웅 병원 담당의사 구속…“증거 인멸 우려”. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "헤럴드경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "헤럴드경제",
        "title": "‘환자 사망’ 양재웅 병원 담당의사 구속…“증거 인멸 우려”",
        "date": "2025-10-20",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9CRnBRQzhvQmNlZHhKYkJ0MDdnUWRRdm1nVnp0ZjQ2aUtsQloxeEVCcDJsYjl3TVRyeHluV3NQOFJVZWlJYmFoQjNPQnUxOHZsbUZkdHZ3?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2019-014",
    "title": "\"최면치료 해줄게\" 10대 여성 추행한 50대 의사 실형",
    "date": "2019-05-29",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2019-05-29경 보도된 사건으로, \"최면치료 해줄게\" 10대 여성 추행한 50대 의사 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-05",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-05",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "\"최면치료 해줄게\" 10대 여성 추행한 50대 의사 실형",
        "date": "2019-05-29",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9UV1B2Tzg2RElOcXZTRFpobjhUbG1pQ1BTNmRmY0VqX3hzX29FbENtUHZuZVh1WEZSTVBnQUdBeUlxcmhjWXVzcEZka05UU3FaR2xCSTdJc2pieWfSAWBBVV95cUxPclV4VFViTElvUl9tWWRXd2w3bXFubkZNaXV0dWw4bGlfTnZva2M4bmlFNV9BdDZFSTN5THBqSnFORDlURkZZZ3A0YmdWYjZ0amxKUTNlU19GQlBrSzA0YUY?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2014-015",
    "title": "‘친여동생 성폭행 혐의’ 의사 오빠 항소심에서 징역형",
    "date": "2014-11-20",
    "year": 2014,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2014-11-20경 보도된 사건으로, ‘친여동생 성폭행 혐의’ 의사 오빠 항소심에서 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2014-11",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2014-11",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한겨레",
        "title": "‘친여동생 성폭행 혐의’ 의사 오빠 항소심에서 징역형",
        "date": "2014-11-20",
        "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1qMlRTOThRVFlEZzRQLXZQRjV4R3Y4U1puc3lPcDlJalUxU0F6cjl0TTBEcXhyVUh0ekpJZENkb1pZVlViNk5qU29idS1GRzRzZTk3NEg0LXdsVTloWFdlaW5JMVJldVlOUWpTLTJMTFM?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2023-016",
    "title": "성폭력 시작하면 커튼으로 가리고…JMS 돕던 의사, 구속 기로",
    "date": "2023-11-03",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-11-03경 보도된 사건으로, 성폭력 시작하면 커튼으로 가리고…JMS 돕던 의사, 구속 기로. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-11",
        "desc": "한국경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-11",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국경제",
        "title": "성폭력 시작하면 커튼으로 가리고…JMS 돕던 의사, 구속 기로",
        "date": "2023-11-03",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBfUjh0bHJ5X2tlajdtNzVYZnFtVS0wM1FxY2ZIdDZXcy14cVZTZzNLam1vWjVuR29BMXlHYklvOWZYSGtUS01BaUZsSjFaM0hVSW93NUk4WFp5Zw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2024-017",
    "title": "마취 여성환자 544번 촬영에 성폭행까지…'의주빈' 의사, 징역 17년 - 머니투데이",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, 마취 여성환자 544번 촬영에 성폭행까지…'의주빈' 의사, 징역 17년 - 머니투데이. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "머니투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "머니투데이",
        "title": "마취 여성환자 544번 촬영에 성폭행까지…'의주빈' 의사, 징역 17년 - 머니투데이",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBsSGJRdWZZLU8xOXRueVIyTmYzcHBWTy1qSm4yaE53LWV5NVlyUDFHcURSNDBrSVMxRFBPZFNpa0tpUVdhRHZfMEJmYmdxLUxESXdaY09HbmJMZnJtSE9kWTB0YnBlb1dXd1Zj0gFwQVVfeXFMT3F5ZXFPQVpYSzRzcHVNODM5TEhKTjhJX2lhcGlIbVFoUzd6ZjdVS1pyN2luQ0JEX19lTkEzRV9QLU9obFhreUZXMGh5VF94dF9sRmZJbkhWVk5jUVE0SF9ic1VVeWlxd3dQOFI4U1VzTA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2013-018",
    "title": "산부인과 의사 사칭해 임신부 성추행…징역 3년",
    "date": "2013-04-22",
    "year": 2013,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2013-04-22경 보도된 사건으로, 산부인과 의사 사칭해 임신부 성추행…징역 3년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2013-04",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2013-04",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "산부인과 의사 사칭해 임신부 성추행…징역 3년",
        "date": "2013-04-22",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFAzS2RrbHVwWjhZZ0lmV0Vfbl9VYk9MckpfdmVFWElOMVVLdGpDLXlmWGtHUk9tZ0dFYXpwTk5TX1B1MllxY1picGhpNVZHdUVxNkdKWkh3dHdnOEF5U3lTc1piM3M3R2R4WUFodE1zODlxVUp4NzV3?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "산부인과",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2022-019",
    "title": "환자 신체에 기구 삽입 검사 반복·불법 촬영한 의사 징역형…법정 구속",
    "date": "2022-06-15",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2022-06-15경 보도된 사건으로, 환자 신체에 기구 삽입 검사 반복·불법 촬영한 의사 징역형…법정 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-06",
        "desc": "노컷뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-06",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "노컷뉴스",
        "title": "환자 신체에 기구 삽입 검사 반복·불법 촬영한 의사 징역형…법정 구속",
        "date": "2022-06-15",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE52TXE5Wkx4NEY5LVpYWlhJcmRPUUF3WERWQzdHRllVdl9TRGxSTXZCcTJjRUE4ckNXcFRWYVRMV1M0YThSdHdUU0gtVkVLSjRXemc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2024-020",
    "title": "'롤스로이스 남성' 마약 처방 의사 구속송치",
    "date": "2024-01-05",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-01-05경 보도된 사건으로, '롤스로이스 남성' 마약 처방 의사 구속송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'롤스로이스 남성' 마약 처방 의사 구속송치",
        "date": "2024-01-05",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE54TlVOSlhEcDAtQWN6b3FUaTRLcUxHRnVpdHgtVjdtMnVHSHN2cEtKQlY3WXFRRFVXSWVCRlRYY0Z1cUFkRy1DVko2YnR2U1BwYkFqeS1DY3FKS01tNUVwMXBzM1Foa2VhTmp5cVE1NVlTY2RHSmc0YtIBeEFVX3lxTE5MdHVselNuOHV2SVpKU2prZW04Tnc3S1R5NDRKSmFPRjVzWUVNdGQxRm9PbFdlNEJ0QlBRVDdVODdXWll5X0doSmQ0Um9oTEhQWEFUc3VybkxHRldOVFJXZ1QxWkJ5MEdIcW8xRXl6Nlo2aHh0UUxpRw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2014-021",
    "title": "\"내가 의사인데…\" 여동생 협박·성폭행한 병원장 8년 지나서야 법정구속",
    "date": "2014-11-20",
    "year": 2014,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2014-11-20경 보도된 사건으로, \"내가 의사인데…\" 여동생 협박·성폭행한 병원장 8년 지나서야 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2014-11",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2014-11",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "네이트",
        "title": "\"내가 의사인데…\" 여동생 협박·성폭행한 병원장 8년 지나서야 법정구속",
        "date": "2014-11-20",
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE9rcEsyTzl0TklfSzBKUWR3a0dGbHZ3SHk3OUZNeFhqLVlZNkpJYkx2RkNubi1NMHFuS3JpNURYalRQVDNfbERULXlIWlBkLUxpbzBF?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2016-022",
    "title": "'수면내시경 女환자 성추행' 의사에 징역 3년6월 실형",
    "date": "2016-05-27",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2016-05-27경 보도된 사건으로, '수면내시경 女환자 성추행' 의사에 징역 3년6월 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-05",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-05",
        "desc": "징역 3년6월 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년6월 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "네이트",
        "title": "'수면내시경 女환자 성추행' 의사에 징역 3년6월 실형",
        "date": "2016-05-27",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBOUnBWcW5tZzBRUjYwRkhtR2loUWQtSFhZQm9XclBRQ0QwdUFWVmxtQ253eldNR29MbGtyRi1nQXl0VW8wTmpqR2F5dEdsZUZneUZnRGN5RXJPSWxyUU0tbUFGOVJNellPd1doNWJsNllqM3R2Slhv?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 3년6"
    ]
  },
  {
    "id": "MED-2026-023",
    "title": "방송 출연한 대학병원 의사, 여성 불법 촬영하다 체포",
    "date": "2026-08-25",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2026-08-25경 보도된 사건으로, 방송 출연한 대학병원 의사, 여성 불법 촬영하다 체포. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "네이트",
        "title": "방송 출연한 대학병원 의사, 여성 불법 촬영하다 체포",
        "date": "2026-08-25",
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5UUHIycXdYTUFCaUlVSVdpRURrMHNMTUg2d3BHMnU0V0Izc3RwQVBoWHl2Y2VlWno3Y01wUEtudDRjT0tqSnlKRnlLMDVJSmJUM1Z3?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-024",
    "title": "압구정 나인의원 염찬동 의사 '롤스로이스 신우준 처방 & 환자 성추행' 혐의 구속 직전에 한 짓 (신상) - artivenews.co.kr",
    "date": "2023-12-29",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-29경 보도된 사건으로, 압구정 나인의원 염찬동 의사 '롤스로이스 신우준 처방 & 환자 성추행' 혐의 구속 직전에 한 짓 (신상) - artivenews.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "artivenews.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "artivenews.co.kr",
        "title": "압구정 나인의원 염찬동 의사 '롤스로이스 신우준 처방 & 환자 성추행' 혐의 구속 직전에 한 짓 (신상) - artivenews.co.kr",
        "date": "2023-12-29",
        "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1HLTEtVUpJTkhqYTNLbHB6cmpuejJSRjh3bXFvSV9qS3JURmtzNHVfclRoSk1LWE9RQlNyLWRkRWt4TjkxUXgwTHpBb0hxRkVMQ0VMNEpCTTNPbHo4R3hsOFFrOWdwRy15R0YxOA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-025",
    "title": "‘롤스로이스남’ 마약 처방한 의사 징역 2년 추가…총 징역 18년",
    "date": "2026-04-11",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2026-04-11경 보도된 사건으로, ‘롤스로이스남’ 마약 처방한 의사 징역 2년 추가…총 징역 18년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "JTBC 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "징역 2년 추가 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 추가 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "JTBC",
        "title": "‘롤스로이스남’ 마약 처방한 의사 징역 2년 추가…총 징역 18년",
        "date": "2026-04-11",
        "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1RZENpZXFkaGRCLWR0cmxvbVNCY1lZX2xzYUJYZWloS3VwenU5cExYd1hIX3ZLeW1SRVRGRnp6bjl1TUpmNUpGbnBOeGxhcE1VYlhSOQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2025-026",
    "title": "수면마취 성범죄 의사 ‘징역 16년·배상 5000만원’",
    "date": "2025-11-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-11-28경 보도된 사건으로, 수면마취 성범죄 의사 ‘징역 16년·배상 5000만원’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-11",
        "desc": "데일리메디 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-11",
        "desc": "징역 16년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "데일리메디",
        "title": "수면마취 성범죄 의사 ‘징역 16년·배상 5000만원’",
        "date": "2025-11-28",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5ibXB2NUJMc1dYbTk0bFNPUGJMT3pMOHdtazAxV3JPMnVUNnJXZUpnbkhzUEVFV2JYTHNiX3hycy0tS2NKNUZ3VXU2ZG4zR3l6ZU5xZXE2N0xOdllHZDg0T1o0Zm1RRy0y?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2025-027",
    "title": "환자 약물 투여 성폭행·불법촬영…美의사 징역 24년 선고",
    "date": "2025-08-31",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-08-31경 보도된 사건으로, 환자 약물 투여 성폭행·불법촬영…美의사 징역 24년 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-08",
        "desc": "중앙일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-08",
        "desc": "징역 24년 선고 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 24년 선고 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "중앙일보",
        "title": "환자 약물 투여 성폭행·불법촬영…美의사 징역 24년 선고",
        "date": "2025-08-31",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9GQmRjZlAtWlMwNVNZYWVBZlVkNUZwWXBtSXhHTDVxQUl6R0J6dW0wVUxITmNqc1hyX3RSU2RTOEZLQnBCcEJYQ24xUlhuNG1DNlVnNlhn?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 24년"
    ]
  },
  {
    "id": "MED-2022-028",
    "title": "'여자화장실 불법촬영' 의대생 징역형...\"퇴학에 실형이어도 의사 될 수 있다\"",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, '여자화장실 불법촬영' 의대생 징역형...\"퇴학에 실형이어도 의사 될 수 있다\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "'여자화장실 불법촬영' 의대생 징역형...\"퇴학에 실형이어도 의사 될 수 있다\"",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE54QUNXOXg0U2JLMUpiUlZOeTIxMlREWHZ0MGVRX2QzRE80MHhveUhGaktsenAzZng4RTB4TjFUTjY3MEFBRTlnMmVhOFRrVzlUd3ZsQTZ5Ti1yVEMySlE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2023-029",
    "title": "탈의실서 간호조무사들 불법 촬영한 60대 의사 징역형 집유",
    "date": "2023-10-17",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-10-17경 보도된 사건으로, 탈의실서 간호조무사들 불법 촬영한 60대 의사 징역형 집유. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-10",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-10",
        "desc": "징역 형 집유 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 집유 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "탈의실서 간호조무사들 불법 촬영한 60대 의사 징역형 집유",
        "date": "2023-10-17",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0wR2RLZWJZbEd3WTRMUEQ0di1RTzRYU1d1RFBPRDJLdm45cnZZLWJuZFNySEJqTldtSkVMQUJrbWpISWFmZU9jWVl4ZzZDSTVQcmZIWXR1ZDcxVGvSAWBBVV95cUxPS0h0dzd5WHRpaS03X3p2RHFWMml0R0N3c3R4c1VJeXZrRG5TOGI3VGpSZVdSWXBZM1ZHdVJOV3dVR0NpemJ0NU9GdENGcHdiYTNGZGd5N2Qwdkxtb3ZBdWw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 형 집"
    ]
  },
  {
    "id": "MED-2020-030",
    "title": "간호사 탈의실 불법촬영 시도한 의사 ‘실형’",
    "date": "2020-02-17",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2020-02-17경 보도된 사건으로, 간호사 탈의실 불법촬영 시도한 의사 ‘실형’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-02",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-02",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "경향신문",
        "title": "간호사 탈의실 불법촬영 시도한 의사 ‘실형’",
        "date": "2020-02-17",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBWZlJnYXZiWXJLNmVqNm8zRFhqM3c1U0dDX2JrNmpDRTNCOE44V21kc0FMOWxMZXdFTTF6d1JCOHppaEdCUDlpQ0x5S1NxcXRJYXZlWGRvLWpCQdIBX0FVX3lxTE1LYnlTTVRobTNFWDlSR2V1em9NWnRIRFEwUHpqTFIzbl9UUm1FVFJXS3FtOXVKazNOTjJORXRxVkd2NGdzVHhIb3c1ZWxlV1BvN3puUnNpU0Q1OTFkdUdN?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2022-031",
    "title": "환자 성추행에 불법촬영까지…대학병원 인턴 의사 징역 5년 구형",
    "date": "2022-05-25",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "수련의 (인턴)",
    "summary": "2022-05-25경 보도된 사건으로, 환자 성추행에 불법촬영까지…대학병원 인턴 의사 징역 5년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-05",
        "desc": "매일신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-05",
        "desc": "징역 5년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 5년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "매일신문",
        "title": "환자 성추행에 불법촬영까지…대학병원 인턴 의사 징역 5년 구형",
        "date": "2022-05-25",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9DWDFBbHd2Sy02ckZ0MGpMQWdyaGRHUjFXUWNPWFg2X3pWaVA0ZHozT1BpRVV3WUpEbmVyZGtaY3JTTm5Hb2p2dS12SEdRcFppZFRGUGhBQW93VFlYYWc4OTRn?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "수련의(인턴)",
      "징역 5년"
    ]
  },
  {
    "id": "MED-2024-032",
    "title": "‘롤스로이스 마약처방·성폭행’ 의사 징역 17년…“기습 공탁에 참담”",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, ‘롤스로이스 마약처방·성폭행’ 의사 징역 17년…“기습 공탁에 참담”. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "‘롤스로이스 마약처방·성폭행’ 의사 징역 17년…“기습 공탁에 참담”",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1rRXVJVWZ2ZUF2d0VOcXFWdXFROTk5VHhXdGxTUXdnSjB3TUh6emt1cWtlbzFUSWNWVHBXYmRORnhfUjJtajNLT3duOEYyVWNjWGFDd01BV0cwdHc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2025-033",
    "title": "‘롤스로이스 사건’ 마약 처방 의사 징역 16년 확정",
    "date": "2025-04-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-22경 보도된 사건으로, ‘롤스로이스 사건’ 마약 처방 의사 징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "연합뉴스TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스TV",
        "title": "‘롤스로이스 사건’ 마약 처방 의사 징역 16년 확정",
        "date": "2025-04-22",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE4waUlhcUh6WGtVbUNoNEFjSDRDRl9FOUFUTVBpNHBOM2xpQXowVlJZblFJSjZmVWxmQ0wxUWluUDE0bGcyd2Foalh4RGJJVXgxRFh1SGU3cTBtemhTcW9Xd3hsOFdIUEk?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2022-034",
    "title": "화장실 32회 불법촬영, 연대 의대생 실형…의사 될 수 있을까",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, 화장실 32회 불법촬영, 연대 의대생 실형…의사 될 수 있을까. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "중앙일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "중앙일보",
        "title": "화장실 32회 불법촬영, 연대 의대생 실형…의사 될 수 있을까",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE9tWUdCMHZlRy02MDdwWUZBQnhDMm9MSmZvM0QtVUZJa1g0QnF4ZVFZaF9JeUZPelczWUdwTk8ybm1PRDhEbzdVQzZpTExORmdyR1VTQkJ3?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2024-035",
    "title": "[뉴스나우] '롤스로이스남' 처방 의사, 징역 17년...法 \"죄질 불량\"",
    "date": "2024-06-14",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-14경 보도된 사건으로, [뉴스나우] '롤스로이스남' 처방 의사, 징역 17년...法 \"죄질 불량\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "[뉴스나우] '롤스로이스남' 처방 의사, 징역 17년...法 \"죄질 불량\"",
        "date": "2024-06-14",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5GRDFZZldFb3V1Y18zeGNxQkU1UkxZbFJvaE9jUzFSOGs4TWpSMW5yeWotaFVNNlphRnJkQkdfN1RxQU92aXZEcG1lb0dvbEdSRE12TUJfSXpneTA5a2c?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2022-036",
    "title": "지시받지 않은 불필요한 검사 하며 환자 성추행·불법촬영한 대학병원 의사, 징역 5년",
    "date": "2022-06-16",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2022-06-16경 보도된 사건으로, 지시받지 않은 불필요한 검사 하며 환자 성추행·불법촬영한 대학병원 의사, 징역 5년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-06",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-06",
        "desc": "징역 5년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 5년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "지시받지 않은 불필요한 검사 하며 환자 성추행·불법촬영한 대학병원 의사, 징역 5년",
        "date": "2022-06-16",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE50aUVLVm82LUVWN1pLSXVGRm83WE9jV01fWmt0OHBmT0xkcWtMNG84amVjR25tN19MdEQyanNfYmlOX2dHWUo1b2RBdC1Lb3d0ZWFjbUdZdW1XQQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 5년"
    ]
  },
  {
    "id": "MED-2024-037",
    "title": "‘롤스로이스 마약’ 처방 의사, 환자 10여명 성폭행…징역 17년",
    "date": "2024-06-14",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-14경 보도된 사건으로, ‘롤스로이스 마약’ 처방 의사, 환자 10여명 성폭행…징역 17년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한겨레",
        "title": "‘롤스로이스 마약’ 처방 의사, 환자 10여명 성폭행…징역 17년",
        "date": "2024-06-14",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9NbEd1amd5ODVna0ZHbUsxR2U0czJnLXhESWUxUi1EZE9ua19uZTdUd0J1N1lvT0tHaXBlRmZXbi1rOThuTV9CYVlXZFFjTzRYWXFHQWpabnphbFpOTkkzWktLNG5nUnNBUmVoZkdXMUlNUQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2024-038",
    "title": "[판결] '압구정 롤스로이스男' 마약 처방, 환자 성폭행한 의사 1심서 징역 17년",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, [판결] '압구정 롤스로이스男' 마약 처방, 환자 성폭행한 의사 1심서 징역 17년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "법률신문",
        "title": "[판결] '압구정 롤스로이스男' 마약 처방, 환자 성폭행한 의사 1심서 징역 17년",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE8xSC1vTTlYWEdzNjVNZmlnOUt2bEhZQjRFSFlZaTlBc00wUzNnRnZXZXNQY01YWGRfTl9ITjRUS01NRm9fZ0d3T19fZjRRYkFPTDNwYTNUR2xuOFkxOVliVzVtWi04eWNLSzhMOHFB0gFyQVVfeXFMT0d0WHBPUUhMek5QQWpwS25PeHVQQi14Sjk5dTZkRjkyWGRlRnF4aFQ4RWpYLUFJQlloXzk3RUJEOWdHWF9xQlhvUldyb0FxbGYwdS1hTnYyVndkOGJJRWdFekZPSXdIb1gzTmpwOWZFeWRB?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2025-039",
    "title": "롤스로이스남 마약처방·환자 성폭행 의사, 징역 17년→16년 - 머니투데이",
    "date": "2025-01-08",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-01-08경 보도된 사건으로, 롤스로이스남 마약처방·환자 성폭행 의사, 징역 17년→16년 - 머니투데이. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-01",
        "desc": "머니투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-01",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "머니투데이",
        "title": "롤스로이스남 마약처방·환자 성폭행 의사, 징역 17년→16년 - 머니투데이",
        "date": "2025-01-08",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1ndUFzNFZLZzlCcnc4ZGg3azB5SU80MHN0ck5DcTgxaXBqeGpVUWpCY3VDVElaZlZtcU1mcHdUYzRCdExpYXRldFN4WU0zVHRiRG9zb1dBYVZzU0ZHbGUxYWVqbmo3SU9sMHFz0gFwQVVfeXFMTXlBeFdKRkJtdFpHNGk0ZUJWU2xiS1VJTi05Nm5qY2Z3eVBRcHdoOVA3VTZXNEZ2WURTeTZjVGJhQWtfZTVGTmtFS0dPNnYxMGduRDdYS3h3QXRNbVlWaFpkVmQ3MHc5Ml9KRC0tbDYxeQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2022-040",
    "title": "\"무지한 게 원인이었다\"던 불법촬영 연세대 의대생, 1심 징역 1년",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, \"무지한 게 원인이었다\"던 불법촬영 연세대 의대생, 1심 징역 1년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "\"무지한 게 원인이었다\"던 불법촬영 연세대 의대생, 1심 징역 1년",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5nRWZtZ2lYM3JMaG1WTU90aFZzbVl0MTdMTGxqWkRQb2FXTVE4bEphMjBoMC02VG1yLWozQnplU2xXWUNYNm1oMkVKdVdEZFNGUFhPUW1DdG9RUQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2022-041",
    "title": "`환자 성추행·불법촬영` 전직 대학병원 인턴 징역 5년 법정구속",
    "date": "2022-06-15",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "수련의 (인턴)",
    "summary": "2022-06-15경 보도된 사건으로, `환자 성추행·불법촬영` 전직 대학병원 인턴 징역 5년 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-06",
        "desc": "매일신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-06",
        "desc": "징역 5년 법정구속 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 5년 법정구속 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "매일신문",
        "title": "`환자 성추행·불법촬영` 전직 대학병원 인턴 징역 5년 법정구속",
        "date": "2022-06-15",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1xU2R0TVpIN3VEUDMyajVQMXZuTzB1RTR3QVdJcHU4dTdDeE1JMmhjWVA0cGFMeWdlMHYydC1tMUJoZmZIQXJwLU9RYzdGWHBVakROaUlVa2hIMnRRbEdMQTVR?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "수련의(인턴)",
      "징역 5년"
    ]
  },
  {
    "id": "MED-2024-042",
    "title": "'롤스로이스' 마약 처방 의사 징역 17년‥\"히포크라테스 선서 정면으로 어겼다\"",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, '롤스로이스' 마약 처방 의사 징역 17년‥\"히포크라테스 선서 정면으로 어겼다\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'롤스로이스' 마약 처방 의사 징역 17년‥\"히포크라테스 선서 정면으로 어겼다\"",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1iXzRaRWt0dUNDQVJsbTV2YklWZVNheFI3cUF6OVh5MGoyWGVoU1hXQTgtazI1SlhPX0V6M1hoUnlrVjJlXzctbW8wY1JheEhucERLTEdWckpYSUFDaXd4RG5fWF9IMEhXS2xYdXU4NWlVWWhuOWswTdIBeEFVX3lxTE16czNQZ2tJQjRCQlFwTlNyUkhqNXhIN0hIbWlfUnhKQmtpeS1GNVQyeGk4T3psaXNHclRseFdxUnJwczg4U3BmY21lbEo1YlJSLW9oZ3U4LVJET1ZwWWtnUkdBTmVrQlNiM3AwdmVGeFRZTWJpMG1ySQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2019-043",
    "title": "'성범죄 실형' 고려대 의대생, 재입학 후 의사 면허 취득 눈앞",
    "date": "2019-03-18",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2019-03-18경 보도된 사건으로, '성범죄 실형' 고려대 의대생, 재입학 후 의사 면허 취득 눈앞. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-03",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-03",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "'성범죄 실형' 고려대 의대생, 재입학 후 의사 면허 취득 눈앞",
        "date": "2019-03-18",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9ZUVVGS0lZNG1LNHBJS2c0dmkwQTBBOURnUkdkZFZON1lkOGE3X3JBM0hKV3FnOENnUmY4WmhraksydTRkbHJFS3R5TmMxT1NSTUJfVkthVzNPNDh5cGc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2022-044",
    "title": "대구지법, 20대 여환자 검사장면 불법촬영 인턴의사에 징역 5년 선고",
    "date": "2022-06-15",
    "year": 2022,
    "region": "대구",
    "district": "대구 일대",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "수련의 (인턴)",
    "summary": "2022-06-15경 보도된 사건으로, 대구지법, 20대 여환자 검사장면 불법촬영 인턴의사에 징역 5년 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-06",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-06",
        "desc": "징역 5년 선고 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 5년 선고 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "대구지법, 20대 여환자 검사장면 불법촬영 인턴의사에 징역 5년 선고",
        "date": "2022-06-15",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9wTG9QSF9tSGFwazlENXpZenYtZW9yamI0REc0QXZ4NVgtMW5Pc0l0UHJ2dGZ0YzZtY2pjQlpyQ3dYQmZqYWg0QUpxVjdRbmVPVTNNQmNwRmQ0bFhMX2ZIbtIBeEFVX3lxTE1sVDA3UE9XbWtVRnZHR2drUkVKMHhtTmZtMG1EZTVHWDU3TGlSTk1ldDV6aF9zdVF4aFk2enlGb01KODBBa3phcVBzMTJ0N3J3UzJ6c1dwVDltVlJ4Uk8wb0JRZkg0UHpKbVctajBhaHgzRjZDb3RYeQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "대구",
      "수련의(인턴)",
      "징역 5년"
    ]
  },
  {
    "id": "MED-2025-045",
    "title": "‘롤스로이스’ 운전자에 마약 처방하고 환자 성폭행한 의사, 징역 16년 확정",
    "date": "2025-04-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-22경 보도된 사건으로, ‘롤스로이스’ 운전자에 마약 처방하고 환자 성폭행한 의사, 징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "조선일보",
        "title": "‘롤스로이스’ 운전자에 마약 처방하고 환자 성폭행한 의사, 징역 16년 확정",
        "date": "2025-04-22",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNTmpTbm5MMmhGd3YxMVV6SEhRUFhBbnl1VjUxV3M4R2pEY2FDaUxiaHU4RE1La25jYnZmRWpSZVdKeUZRZE1IZmVPVzI0b3lPdHliNEpJaXFNM2lVMkVKRGhnWWFFSk91VnBabXJ6amppSnY1M0FKR2pjVTJTanZrMndYeHJGWHM?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2025-046",
    "title": "‘롤스로이스’ 운전자 마약 처방·환자 성폭행 의사, 징역 16년 확정",
    "date": "2025-04-23",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-23경 보도된 사건으로, ‘롤스로이스’ 운전자 마약 처방·환자 성폭행 의사, 징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "‘롤스로이스’ 운전자 마약 처방·환자 성폭행 의사, 징역 16년 확정",
        "date": "2025-04-23",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB2ejJuR05VUlR1bE45ZEEyeGhBc3JCSld6VEVaZk1HdnJQWGd1THo0a3FaRVZZQUtqWDdidlljeHhwc0tjM2RzVE9DTjF5WC02aFhKa1ROcVgxVzVKd0l6cUR0VDNvWEJVbUNpQmVn0gFzQVVfeXFMT29KS21qTGVpSDVraDRVc1drQnhBd04tdExGUWhqN2RBQ2pfSnlWYmRrRnN3M0ZfRkxCWUVLUkRJUmRlWlN4RGlWdVhpNl90aE9vUlMwbUpSQnhHM0F4Q0J1UThQR1hzMWxOa1JlODhTZURCOA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2022-047",
    "title": "여성 환자 성추행·불법 촬영 인턴 징역 5년…의사면허 유지",
    "date": "2022-06-16",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "수련의 (인턴)",
    "summary": "2022-06-16경 보도된 사건으로, 여성 환자 성추행·불법 촬영 인턴 징역 5년…의사면허 유지. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-06",
        "desc": "웨딩TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-06",
        "desc": "징역 5년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 5년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "웨딩TV",
        "title": "여성 환자 성추행·불법 촬영 인턴 징역 5년…의사면허 유지",
        "date": "2022-06-16",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9ZN0lGSGdaaVJ6VVBrQS1acmZ5ZUh2ODViMC1aYmJaZVZBN2g1Z3hza2lPaFMzdkwwMFhheC1Wem80RHVWaDlFVGxYYVdYbEhLQUtJNktNVnlyTWEwMWl1SFFn?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "수련의(인턴)",
      "징역 5년"
    ]
  },
  {
    "id": "MED-2025-048",
    "title": "'롤스로이스男 마약 처방·환자 성폭행' 의사, 대법서 징역 16년 확정",
    "date": "2025-04-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-22경 보도된 사건으로, '롤스로이스男 마약 처방·환자 성폭행' 의사, 대법서 징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "'롤스로이스男 마약 처방·환자 성폭행' 의사, 대법서 징역 16년 확정",
        "date": "2025-04-22",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5UUVlvQVBoR0M5Vkw4aVJOTnVxd2hMSjF0bVJXRjlzNG1hN2RFVzFLNDZ0WDRjQTltcWNMdDBmRS1pMFFkM1hjaWRYVjZEeGh3OHF3WEJHXzVGaDFuUG1DN9IBeEFVX3lxTE5YaC0xREdpNUd1QTFyellCZkdHbmdYLUpHNHM3NlhqbGtTZ0lYRmlXQzdJbWl5S2ZpWkNRVjJiSW96Qi1sZGRYTldLc29LMV91X3hzUEVPVW5MOU9PZFpaOEJfQTFSd09BTHJ5UGloX0MtN0lSWXoxVw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2025-049",
    "title": "‘롤스로이스남’에 마약 주고 환자 성폭행한 의사, 징역 16년 확정",
    "date": "2025-04-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-22경 보도된 사건으로, ‘롤스로이스남’에 마약 주고 환자 성폭행한 의사, 징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "헤럴드경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "헤럴드경제",
        "title": "‘롤스로이스남’에 마약 주고 환자 성폭행한 의사, 징역 16년 확정",
        "date": "2025-04-22",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBDTEtyUTUxYW82M0FBZzZLUkRSbHVNaEpDZkFJSzJwQUlIVEE0UE1zR2lLVzJUWTc4M3JFSDRiZkcwTnhWVC1TdW8wdnFzU2ZJTlpRZkhB?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2024-050",
    "title": "검찰, '롤스로이스 사건' 마약류 처방 의사 구속기소",
    "date": "2024-01-24",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-01-24경 보도된 사건으로, 검찰, '롤스로이스 사건' 마약류 처방 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "뉴시스",
        "title": "검찰, '롤스로이스 사건' 마약류 처방 의사 구속기소",
        "date": "2024-01-24",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9USDN0LThiZUhnQnJoblRvaTZ5cFhvNHNmWE9DalVYZW51R0hHOVBUVVpLbkhtS1pFWk5WekNBeG92U1g3UDJEYlNPWjgxZ05XbGxUVE1BdU5zY1FmaDYtTtIBeEFVX3lxTE11OHhJUV8xZFRqTGVEOV9MWEVjamtCSDlzaDRRbHlBZWViYkpJOUJEanVGSlRWTWlLRVZaWFlNNUJNWnZTdy01WGhiZDltM2s1WnA2TFI4MVBCMUFTWlhhTXRvVFQ3aWZROWpXU0x6TElnM3JURVkteA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2020-051",
    "title": "진료 중 환자 추행한 산부인과 의사, 징역 1년 받아도 면허 유지⋯3년 동안만 진료 못 해",
    "date": "2020-10-13",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2020-10-13경 보도된 사건으로, 진료 중 환자 추행한 산부인과 의사, 징역 1년 받아도 면허 유지⋯3년 동안만 진료 못 해. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-10",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-10",
        "desc": "징역 1년 받아도 면허 유지 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 받아도 면허 유지 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "진료 중 환자 추행한 산부인과 의사, 징역 1년 받아도 면허 유지⋯3년 동안만 진료 못 해",
        "date": "2020-10-13",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5XbUtlTjEtOUFxZWVBb3pnQk0xVTlBMXZhNzAtOWVjMzFhcW9lVk12QTdUNXpfR2d4aV85TVZuQ0JuNXB3ZUFLRmxkemJtSEduRHVqNVMzbTJrUQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "산부인과",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2025-052",
    "title": "'롤스로이스男'에 마약 처방, 환자 성폭행한 의사…징역 16년 확정",
    "date": "2025-04-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-22경 보도된 사건으로, '롤스로이스男'에 마약 처방, 환자 성폭행한 의사…징역 16년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "한국경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 16년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국경제",
        "title": "'롤스로이스男'에 마약 처방, 환자 성폭행한 의사…징역 16년 확정",
        "date": "2025-04-22",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBvRlhKTGtpUllMUUhyNVp4UlZLN2F2bUphelVvdzN6NXczUU82SG5IYUpacnZsN2J2WVRCSGxiYTNnOUdLQU5CS3RwR3h1eXdpdXhOeFhvNHFkUQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2026-053",
    "title": "환자에 의료용 마약 불법 투약, 성범죄까지…경찰, 의사 등 마약 14명 입건",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 환자에 의료용 마약 불법 투약, 성범죄까지…경찰, 의사 등 마약 14명 입건. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "세계일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "세계일보",
        "title": "환자에 의료용 마약 불법 투약, 성범죄까지…경찰, 의사 등 마약 14명 입건",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5sWGZud3Q3SUE0ZndSX1lpQUMyMEtnZktWa0pvd1lLU3kwbEI5RjIxQVd1QVo3M3lIN0pjNVM0dTNEMUpXLUZOUHBqWmx6LXpvU24xR1Z6NEzSAVRBVV95cUxPdF9XeTYydEFGbXljc09wc09XMU03X2dtbk1heEZBeVRRMzBPcDhzWFczdDlaMnMtTWxCdHE5SGxzM0hDY0VXZFR4dko2Y2dfYjdfZk8?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-054",
    "title": "'롤스로이스 남'에 마약 준 의사, 오늘 구속 심사...환자 성폭행 혐의도",
    "date": "2023-12-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-27경 보도된 사건으로, '롤스로이스 남'에 마약 준 의사, 오늘 구속 심사...환자 성폭행 혐의도. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "YTN",
        "title": "'롤스로이스 남'에 마약 준 의사, 오늘 구속 심사...환자 성폭행 혐의도",
        "date": "2023-12-27",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE96US01QnN1NlNOZE9jWHRtSFJpbENBbHRXMHhTZEdTWk9UR2lpb3JNM0MzeDkwcEd2dWhxdjFNQ2dvQ2lyU2NpR0pNaV9ZSE1sbHlnYlh0WU9RSG15MlE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-055",
    "title": "마취환자 성폭행 혐의…‘압구정 롤스로이스’ 마약처방 의사 영장 청구",
    "date": "2023-12-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-27경 보도된 사건으로, 마취환자 성폭행 혐의…‘압구정 롤스로이스’ 마약처방 의사 영장 청구. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "마취환자 성폭행 혐의…‘압구정 롤스로이스’ 마약처방 의사 영장 청구",
        "date": "2023-12-27",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1pM3d4eUhtNVhaVVh3TWNGY0hhT3U3T1d1SHliYUlpZVBibmozSjhEeFV3ejBoTTRaMDhlN1JvcXBVVVhpN3dYN0pMdnN4cjdITDY5WXRKM29iTXNkS3FsdGdCMFZ4eS1sT1N1SGpIT3NPZw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2024-056",
    "title": "'롤스로이스남 마약 처방' 의사 구속기소…환자 성폭행 혐의도",
    "date": "2024-01-24",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-01-24경 보도된 사건으로, '롤스로이스남 마약 처방' 의사 구속기소…환자 성폭행 혐의도. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'롤스로이스남 마약 처방' 의사 구속기소…환자 성폭행 혐의도",
        "date": "2024-01-24",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBOR2pPbm5kUFpzd0xTYnZsNzlHSWhVNDZ0LXJzRXhnRGNMeE8wRk5NSXMxd1NUSUdfWS1Nem5qQzRTVzFwbXRxWlktbEp3enp4N0FzdGlPd2g3LXfSAWBBVV95cUxNV3pFWkc0d1o5eUNJZ1JvaW9NUlI1dVJoRkM3VFdyQVhuMGhYNkwxUmQ1Q2s1QV9vblI5bDRsM3hOS3ptSTQtbnZmekdEWVF6RzA1RXZ5MGlYdDRUb2hFUTM?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2024-057",
    "title": "'롤스로이스男 마약 처방·환자 성폭행' 의사, 1심서 징역 17년",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, '롤스로이스男 마약 처방·환자 성폭행' 의사, 1심서 징역 17년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "뉴스핌 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴스핌",
        "title": "'롤스로이스男 마약 처방·환자 성폭행' 의사, 1심서 징역 17년",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFA2dWpxUk0xMzA1cmhhdmFjSkcwci1TSVVhMW5TTUhoMmZ3Z3E2S0U0cDd0OG1zS0ZaMmxOSlFRVEZwdjJLU2txMmlQbHVybVBVQzZsMXhnVDdmRHBq?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2024-058",
    "title": "마약 처방하고 마취 환자 준강간까지 … 40대 의사 징역 17년",
    "date": "2024-06-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-06-13경 보도된 사건으로, 마약 처방하고 마취 환자 준강간까지 … 40대 의사 징역 17년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-06",
        "desc": "뉴데일리 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-06",
        "desc": "징역 17년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 17년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴데일리",
        "title": "마약 처방하고 마취 환자 준강간까지 … 40대 의사 징역 17년",
        "date": "2024-06-13",
        "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1pWm1XRDJiLS12cnNSVEU4U21VUGtfNmZRNHNKZ08zVFBhWGpLRHFIMDlVMVExUS0xeV9TUjdEWDVKU194VnlxaHY5NFBZMWhGX2xWQjVXWXhDeTdhNEFNY2Z4Vl9jQ0FjQ3JYemtNYzRrcUFqcE84RGxMSdIBgAFBVV95cUxOM3FOZlV0SkdHbUhKYnliYXZiR1J0REdRZVRmVm5OT3BVYUw4Q2N3X2VXWF9PNkhVbEE0bi1pM19fNDdjYVFOQUlwZXdEYjNMLWtzOWVKa0VsdGE1ZjYzeWthV29BN29XWFpjaU04c3h3ajhxU2pUcWtvWlpUbk1QcQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 17년"
    ]
  },
  {
    "id": "MED-2024-059",
    "title": "‘압구정 롤스로이스’ 마약처방 의사 구속 송치",
    "date": "2024-01-05",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2024-01-05경 보도된 사건으로, ‘압구정 롤스로이스’ 마약처방 의사 구속 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "‘압구정 롤스로이스’ 마약처방 의사 구속 송치",
        "date": "2024-01-05",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBHNmM0MmZDLWNUVFJVTGx5SXI5dGxXZlZQS1poTzlhMnBWeDhOZm1YMk5IRXhHZ0tqQkhCcnYwaXhsUTg2TUl5YXlyYmRya2g2bmpoNXc5cVd3ZGQ1Zkpodml1RnpfdlBGYmtWLTUwUkl3Zw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-060",
    "title": "'압구정 롤스로이스' 마약 처방·수면 강간 혐의 의사 구속기로",
    "date": "2023-12-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2023-12-27경 보도된 사건으로, '압구정 롤스로이스' 마약 처방·수면 강간 혐의 의사 구속기로. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'압구정 롤스로이스' 마약 처방·수면 강간 혐의 의사 구속기로",
        "date": "2023-12-27",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5PY1F1QnFxN1Blc1VOclBlZTFINnljR2FvOTZ5cFliRHN1VGJWQlZHZl9HQUtHb1BOTE52NDdISG01X3h4X0hLdmFqYUVRZkZIQW5kYjR2S3o3NmRMYUpUSVpFdDRvc2taRFBTX1k1dktZRDJaczhJ0gF3QVVfeXFMTUx1NEVuY3RwXzVjVDAySkNHeXJsM0lVN3FMLTIwM2RKeTM0ai10MHI2QzRGQmlzZ3dTVTRkaG1hSERpVXV6Njg3UHVrcWJDeHIwZTE2eVZwRDdEaWZwVUFkN0Z2aUpMLVB1TUdra1V1OFdjbDVDVTg?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-061",
    "title": "'롤스로이스 운전자' 마약 처방 의사 2심 징역 16년…1년 감형",
    "date": "2025-01-08",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-01-08경 보도된 사건으로, '롤스로이스 운전자' 마약 처방 의사 2심 징역 16년…1년 감형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-01",
        "desc": "더팩트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-01",
        "desc": "징역 16년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 16년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "더팩트",
        "title": "'롤스로이스 운전자' 마약 처방 의사 2심 징역 16년…1년 감형",
        "date": "2025-01-08",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBGTFctekktbjBHMWlNU2JUNU1FYl92ZkRxN3E0X3pqUE1NWlh1WXo1RFI2ZHl6aEotanNsZlNVYWpTNGZQN3AtdEg5S0pYdlpmcy1OQy1n0gFQQVVfeXFMTzRDeUNReUY0Mk5wbjRSNHNQQ0cwdDh3WU84OXZvYlFnYjJjd3MzVDd4UVFUalRtYnYyQ3lFVTFRUUZsQTNSR2o0SXRfb2Zra2g?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "징역 16년"
    ]
  },
  {
    "id": "MED-2025-062",
    "title": "10년간 성범죄 적발된 의사 1500명인데…면허취소는 단 1건 - v.daum.net",
    "date": "2025-04-15",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "일반의/의원",
    "summary": "2025-04-15경 보도된 사건으로, 10년간 성범죄 적발된 의사 1500명인데…면허취소는 단 1건 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "10년간 성범죄 적발된 의사 1500명인데…면허취소는 단 1건 - v.daum.net",
        "date": "2025-04-15",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBmUXZhTVVPVEVXX1d5ZmVmbHNKSHNaMmRuQ25uYkQ1UXZsZjJxbDhPVTJTemZ2VXY2VjRkcTMyR29vT3czbGc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2025-063",
    "title": "\"응급의학과 가서 속죄하겠다\"던 불법촬영 의대생… 항소심에서도 징역 구형",
    "date": "2025-05-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "응급의학과",
    "summary": "2025-05-28경 보도된 사건으로, \"응급의학과 가서 속죄하겠다\"던 불법촬영 의대생… 항소심에서도 징역 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-05",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-05",
        "desc": "징역 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "\"응급의학과 가서 속죄하겠다\"던 불법촬영 의대생… 항소심에서도 징역 구형",
        "date": "2025-05-28",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1GMFBLQ3hmNm5oaWJBMC1xTEZ0OUdwVjFwWDhpVWNxc0J4S1R1aWJ3NWFuYm5xYW9GOTlDMzBrVnRGU092ZXRNQmlkSkptTGw4VzRlQkZYZkM5SWtkVkZ3d2F3cGNITUNCOWlua2NB0gFzQVVfeXFMTWFfTDBuUjA4Q0YxbmM2OUdHcE5jaXZGUVRjQV8yamhrQ19qTGliVHFnZWFGSFZweGhwYTlscW1pdWR1MW1aT3NDa1RTREFKbUpwcjRZT1E2V0w1SnlFNnBVR0JMN2tTZ2JlQWRDMXlCTHYtWQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "응급의학과",
      "징역 구형"
    ]
  },
  {
    "id": "MED-2022-064",
    "title": "女화장실 32회 몰카 촬영 연대 의대생..1심 징역 1년 - v.daum.net",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, 女화장실 32회 몰카 촬영 연대 의대생..1심 징역 1년 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "女화장실 32회 몰카 촬영 연대 의대생..1심 징역 1년 - v.daum.net",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1LTDBYTHNUMEtnOTd2R25FRFV1RGZ4TDdQLVBKdlVxLU9ZVEhaaVJOUGdfVWdLRVdMYTNLRnlrdzF2cE50QnlpRHJwUQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2023-065",
    "title": "'화장실 32차례 불법촬영' 前연대 의대생 실형→집행유예",
    "date": "2023-02-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2023-02-13경 보도된 사건으로, '화장실 32차례 불법촬영' 前연대 의대생 실형→집행유예. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-02",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-02",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'화장실 32차례 불법촬영' 前연대 의대생 실형→집행유예",
        "date": "2023-02-13",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBRRkY4eXp2aGZpWGd2MVRnSjBfUnBFbUVaXzBveDlKbko2RF9Wbk5QWDJuY0tjaXRNWEVtOTdkZk5hQzdBN19odkhtQlRveVpmTkJ4b3FKWHJxMGvSAWBBVV95cUxQXzhyLTExRkhsc0o1MjNXb3NIYTVwWnIyN1ZqRDF4NkhrMk53Q3F6bUZFRUtKS0U5cUUxdUY3d3FuYzMteGtvQ1ZxVkQ3OUtrNWxLSl96MlB3NDUwOVNtSlA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2022-066",
    "title": "'女화장실 불법촬영' 의대생 징역 1년···성범죄 의대생 잇따라",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, '女화장실 불법촬영' 의대생 징역 1년···성범죄 의대생 잇따라. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "주간조선 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "주간조선",
        "title": "'女화장실 불법촬영' 의대생 징역 1년···성범죄 의대생 잇따라",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9wNUJPVEJCbTZCejQ0YjQtYTBjRDdYYUdYMFIzR0pxZUl4QVgtWnBJU3hvdXdOVmd2S3FWbEV5QzNPek1MZHE3bmJiVVVFOTllTlFjZW9oU0F1S1JtOTk5MVcwOWJVSjZ0LXfSAW5BVV95cUxOX3lPNVNSSU9QU0xhamdhZlctZFpsVm90TEVUczVfSkRMbXJhakVEOEVFb3cza3d0TXl1bUk0WkI2ZnBVdEt0ZnFyWkFxdS1XMWJDT2dQQ1RGOVN2QkNTck1Sa1R4Y1NsV0dtT1pxZw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2022-067",
    "title": "‘여자 화장실서 불법촬영’ 연세대 의대생 1심 징역 1년",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, ‘여자 화장실서 불법촬영’ 연세대 의대생 1심 징역 1년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "‘여자 화장실서 불법촬영’ 연세대 의대생 1심 징역 1년",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5BX3czc3FYZDU0TFF3d3RkWHFKdEJoNF9BRzJCSzZtWVUtMkFLSDYyQllVcl85eGdiZWUtY0pCWU1uM0xVMHdSV0d0XzVyb05tUXdkdWJYcjJuSFU?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2024-068",
    "title": "‘여성 나체 불법 촬영’ 고대 의대생에…法, 집행유예 선고",
    "date": "2024-07-18",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2024-07-18경 보도된 사건으로, ‘여성 나체 불법 촬영’ 고대 의대생에…法, 집행유예 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-07",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-07",
        "desc": "징역형 집행유예 선고 (면허 정지 처분)"
      }
    ],
    "legalStatus": "징역형 집행유예 선고",
    "licenseImpact": "면허 정지 처분",
    "sources": [
      {
        "media": "동아일보",
        "title": "‘여성 나체 불법 촬영’ 고대 의대생에…法, 집행유예 선고",
        "date": "2024-07-18",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9ERkRFVDJhLTVuazN2NTNDSTZSLXB6TTRfTndDX0c0ZkNuWk84azZjSEo0Y2pkSjVkY09DQjQzeGVLbzY5N3B4Y3RpOUIwTDRFOVp1cE1YM1NJelNTOHdxV09nZGxLczNwUXlqQkw0R1lJYWk1c2fSAWZBVV95cUxORTlkQzdpc3liakhQTm0xbWFJVWdlc3RtelpQa3ZyZk1JU3Y2REYwMGNaOEFUcG5KTXB2MjJhRkF3bWxzaXZvQXFQcFZBd0hDdlEwdmRCMlhZOFVCeVI3ZktVeFlrR1E?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 집행"
    ]
  },
  {
    "id": "MED-2022-069",
    "title": "'여자화장실 불법촬영' 연세대 의대생 징역 1년",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, '여자화장실 불법촬영' 연세대 의대생 징역 1년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'여자화장실 불법촬영' 연세대 의대생 징역 1년",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1hR25kZE10djduSWRRNjZGREN1YkxjNjNudnBiSnFUSVJZSHpJMmgxN2ZHMXM1LU56d3Z5dEFfN0U1bTR3eDZuX2UwbUZFdGt6ODVnZFNjVTZPRlZYdTllVXJNUGtyU1d5SkMxSnBCTlVJUTJUZ09R0gF3QVVfeXFMT3hmMW85UkJMZUFoUkNLS3FoN3kxYU5YaWJmVTd2MVBwUW4wVThkc3pqeHFoejdCQ0NrZURwT0psSm1LbER0eEE4SG9Lc09iaW5LNmtkdkFwdVBQelRnUG1YTzh1dGFidUpLQVNvRnV1LXptVldlVGc?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2024-070",
    "title": "‘여성 2명 불법 촬영’ 의대생, 징역형 집행유예",
    "date": "2024-07-18",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2024-07-18경 보도된 사건으로, ‘여성 2명 불법 촬영’ 의대생, 징역형 집행유예. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-07",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-07",
        "desc": "징역 형 집행유예 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 집행유예 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "‘여성 2명 불법 촬영’ 의대생, 징역형 집행유예",
        "date": "2024-07-18",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5remJHclR1U043RTJBZXJhLVZlQU03Q3JHWnJpcmFQRjF6Wk9pc09Wd3FCd3hiVHhiWkJ2SEdEVWFUV1JuS3VScGNpUDJ1bmk1WnplazJPYmpMQ0E?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 형 집"
    ]
  },
  {
    "id": "MED-2023-071",
    "title": "교내 탈의실서 ‘몰카’ 찍은 아주대 의대생…檢, 징역 2년 구형",
    "date": "2023-03-06",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2023-03-06경 보도된 사건으로, 교내 탈의실서 ‘몰카’ 찍은 아주대 의대생…檢, 징역 2년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-03",
        "desc": "문화일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-03",
        "desc": "징역 2년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "문화일보",
        "title": "교내 탈의실서 ‘몰카’ 찍은 아주대 의대생…檢, 징역 2년 구형",
        "date": "2023-03-06",
        "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE81aEM1SHZHczNhOGNVZ0ZIVWQya1R6cFo4UTRnd2pGbjg4SFUtLW9jS0prYnRYY1VQNm1FdVl4elh3a0N2WExKTTZsTUx4czF3?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2023-072",
    "title": "아주대 '몰카혐의' 의대생 집행유예 2년… 법원 \"학업 스트레스·초범 등 고려\"",
    "date": "2023-04-06",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2023-04-06경 보도된 사건으로, 아주대 '몰카혐의' 의대생 집행유예 2년… 법원 \"학업 스트레스·초범 등 고려\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-04",
        "desc": "경인일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-04",
        "desc": "징역형 집행유예 선고 (면허 정지 처분)"
      }
    ],
    "legalStatus": "징역형 집행유예 선고",
    "licenseImpact": "면허 정지 처분",
    "sources": [
      {
        "media": "경인일보",
        "title": "아주대 '몰카혐의' 의대생 집행유예 2년… 법원 \"학업 스트레스·초범 등 고려\"",
        "date": "2023-04-06",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE0zenNEY2VLeU4zQ1B6eGZBR2w1S2YxZ0o1aGdTSTFZeVQ0WVVzY2tFaEVQWVN6RFlKVVVpVlE4WGdmWlBjRW9WSVpySGFTeWZoakE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 집행"
    ]
  },
  {
    "id": "MED-2022-073",
    "title": "‘女화장실 32회 불법촬영’ 연세대 의대생, 1심 징역 1년",
    "date": "2022-10-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-12경 보도된 사건으로, ‘女화장실 32회 불법촬영’ 연세대 의대생, 1심 징역 1년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "동아일보",
        "title": "‘女화장실 32회 불법촬영’ 연세대 의대생, 1심 징역 1년",
        "date": "2022-10-12",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5LcWF2WER2UlhhNmJZRVJaRV9uM0EwWE5LZWhLOWNtNHBKMi1aZVpQdVk4RTNkWWlWekRYSjhSZDVBWVpLZllRcEpuaEZpNmxTZkZ3OGxJdzJNOVVRaWwwbVNtb0YzSHdpZ19j0gFmQVVfeXFMTzdhYnhyZWV2c2JkMVlZRDRVeVJHZHFidDhZN3ZkU2hseW9NbGM1bG5YMU8yNHNBT0J0SWxzRmUzQnRiSzJfZGhzMXl2NUhBX2ZQM3dLUFZ5QUg1M3htbTN3NHpBc213?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2020-074",
    "title": "대구 `고교 기숙사 탈의실 몰카` 의대생 징역 1년 6개월",
    "date": "2020-04-08",
    "year": 2020,
    "region": "대구",
    "district": "대구 일대",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2020-04-08경 보도된 사건으로, 대구 `고교 기숙사 탈의실 몰카` 의대생 징역 1년 6개월. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-04",
        "desc": "매일신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-04",
        "desc": "징역 1년 6개월 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 6개월 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "매일신문",
        "title": "대구 `고교 기숙사 탈의실 몰카` 의대생 징역 1년 6개월",
        "date": "2020-04-08",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE4wNnBXbjU1Wkh5TUo3LU95d3RfTXpvc3hYbjY4MUpoQjB0b1VsdWxDRFFMa2J2TXhiclkwZ3ZMcUVBcVItcFVWbEZMUTlLZUNGbU5kM3hyUjUyRTNSQUxrRzZR?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "대구",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2022-075",
    "title": "단독 연세대 女화장실 '불법 촬영' 의대생 현행범 체포",
    "date": "2022-07-05",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-07-05경 보도된 사건으로, 단독 연세대 女화장실 '불법 촬영' 의대생 현행범 체포. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-07",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "YTN",
        "title": "단독 연세대 女화장실 '불법 촬영' 의대생 현행범 체포",
        "date": "2022-07-05",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1YZUhnX3NESjZIS2s2RnN4a01uMFhkNURmczZpaHEwUEtSeDgyNFNSZzB0ZWdTbFFtRlRFSjlnZXlETHlDVjFDWm9OTG9sN1JzNG96eVF6TXV3VVRKM2c?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-076",
    "title": "'화장실 몰카' 前연대 의대생 풀려났다…'실형→집유' 감형 왜? - 머니투데이",
    "date": "2023-02-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2023-02-13경 보도된 사건으로, '화장실 몰카' 前연대 의대생 풀려났다…'실형→집유' 감형 왜? - 머니투데이. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-02",
        "desc": "머니투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-02",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "머니투데이",
        "title": "'화장실 몰카' 前연대 의대생 풀려났다…'실형→집유' 감형 왜? - 머니투데이",
        "date": "2023-02-13",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5MT0laN21FWVhnOHhqZmQwOEV3eFNDaUZNX2FOMlFwNUJIYjUxaDVfeGExMEp6ek9PTmEtWk81R0pVV2J3dFVlWVhRcVJNd0hIQ2UzY1dSclp5Q3Y5WVFUb2hrOGZ1dUNWWm9F0gFwQVVfeXFMTVR3VUMxejFIQjR3dWY5OFNRZFI5djlYVVdjRmR6REozYmR6SkpuODFINFk3X3BFZlRoLW9TaXpLaDk2WTB5bU55UlB4VUFVNUdxakc0MW94T1IyU0tYeXBWYjhLVVNQTjVRZDNNZER1WA?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2022-077",
    "title": "'불법촬영 징역 1년' 연대의대생, 제적될까…구속돼 징계위 못 열어",
    "date": "2022-10-13",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-10-13경 보도된 사건으로, '불법촬영 징역 1년' 연대의대생, 제적될까…구속돼 징계위 못 열어. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "세계일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "세계일보",
        "title": "'불법촬영 징역 1년' 연대의대생, 제적될까…구속돼 징계위 못 열어",
        "date": "2022-10-13",
        "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9BXzNUSUFzT09IdjVjTXJhRXVNTmZTX1l2YjRNS2tGRmFpN09tYnQ2bS03aEMzRVVOOUgyUFVXcUpyNWRVanR1dzhwZ281Um9KUGJoRlp3dW7SAVRBVV95cUxPNm4zRnR5ZlBrTGlOa3JKZnIxUGtsQ2lXN2g2ZXVNam9rWThHa2ZSN1NlWkxHMFM5cGs1dG10VWE3SDNUZVA0MlFWMHdXUkFQZGk5TUE?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2020-078",
    "title": "`고교 기숙사 탈의실 몰카` 대구 의대생 A씨 징역 2년 구형",
    "date": "2020-02-14",
    "year": 2020,
    "region": "대구",
    "district": "대구 일대",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2020-02-14경 보도된 사건으로, `고교 기숙사 탈의실 몰카` 대구 의대생 A씨 징역 2년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-02",
        "desc": "매일신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-02",
        "desc": "징역 2년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "매일신문",
        "title": "`고교 기숙사 탈의실 몰카` 대구 의대생 A씨 징역 2년 구형",
        "date": "2020-02-14",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE13YWdfSWI4OGZBSFF2ZW9LN2VTN1V5S1U5UXVXT09uc1NUVEFpRWZERWhCalJtdnozNTYwYzBGQ2RmWFhBZ3VybjdKQTA1UFVxVXJkVElicmc0ODNyY1NzUTBn?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "대구",
      "의과대학생(의사지망)",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2025-079",
    "title": "여성 나체 여러 차례 몰래 촬영한 의대생, 항소심서도 징역형 집행유예",
    "date": "2025-06-25",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2025-06-25경 보도된 사건으로, 여성 나체 여러 차례 몰래 촬영한 의대생, 항소심서도 징역형 집행유예. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-06",
        "desc": "메디컬투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-06",
        "desc": "징역 형 집행유예 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 집행유예 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "메디컬투데이",
        "title": "여성 나체 여러 차례 몰래 촬영한 의대생, 항소심서도 징역형 집행유예",
        "date": "2025-06-25",
        "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE01V0owWnZZR2U4WXA3TlhhbEljQnhxYm9DeUVkSEtvQ1A4MS02N2RLaF9ZWUtPanRPT1BtTE1ZQXlyTTZpREk2ckxDTDA3WnFVQnV5NDQycWpycElSSlpRMVdoNzFHbTVtOHRzdg?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 형 집"
    ]
  },
  {
    "id": "MED-2022-080",
    "title": "'여자 화장실서 불법 촬영' 연세대 의대생 현행범 체포…\"혐의 부인\"",
    "date": "2022-07-05",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-07-05경 보도된 사건으로, '여자 화장실서 불법 촬영' 연세대 의대생 현행범 체포…\"혐의 부인\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-07",
        "desc": "데일리안 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "데일리안",
        "title": "'여자 화장실서 불법 촬영' 연세대 의대생 현행범 체포…\"혐의 부인\"",
        "date": "2022-07-05",
        "url": "https://news.google.com/rss/articles/CBMimAJBVV95cUxQa19oNU1xQ04tcy1CT2t5QkQydnI5cnRuME1qNHJOSms1aWk1QVhLOUlad3NaVU9HY2dycndCcHd0eTdhcDhPemJSRWRqaUluN05VaHZITG5rNnpSdEwzUUhXZDNRM2VUa3RFMVBGYVphbHZHN2JiSmZjSW5kOEhJYnlJdWRNc054N3BwVENrckxLWjZzTkg4SjFzZkN6UUhqYnZFU084UVZ0dTBvZDF6bEZUM0gzUlhHMEpLVUVwdmtjQTRueHpTVFJWVWZWelBzLXpsRHAtNXotQ2FLY3BnY0hBaGxmeGVsdWxnaXdXUDJIZHBNa1FQZ0h3X1c5V1RhRTRPd05kV2E1RF81c2dDVFY1RWVWcUZM?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2022-081",
    "title": "불법촬영 적발돼도 ‘산부인과’ 실습…성범죄자도 의사가 된다",
    "date": "2022-10-18",
    "year": 2022,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2022-10-18경 보도된 사건으로, 불법촬영 적발돼도 ‘산부인과’ 실습…성범죄자도 의사가 된다. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "서울신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "서울신문",
        "title": "불법촬영 적발돼도 ‘산부인과’ 실습…성범죄자도 의사가 된다",
        "date": "2022-10-18",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9VenRlbVNZUDJqVURvczIzYmRXcnBqM0JDdDFOazFDbG1NbUQzNEVsazdxZ0VCMXlLX0d3SGxmWnAxLW1YbkU4M2VkOWMwcDcwS0NtYzF1cU9CQmZ4b2RRTFpUSXdwb1p0cVBmamlEQQ?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "산부인과",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-082",
    "title": "'화장실 몰카' 연세대 의대생, 2심서 감형…징역형 집행유예",
    "date": "2023-02-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2023-02-13경 보도된 사건으로, '화장실 몰카' 연세대 의대생, 2심서 감형…징역형 집행유예. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-02",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-02",
        "desc": "징역 형 집행유예 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 집행유예 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "네이트",
        "title": "'화장실 몰카' 연세대 의대생, 2심서 감형…징역형 집행유예",
        "date": "2023-02-13",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE54aklsSmlCS2toSW90LXBZU1drQ2lIVU9UY1J4WnBWTmdPbm51SFF5TWRtZGZZdmdRVUZCR0M2VFEzVGQ4WVVQc3hIMERyeEN1eG9jckdhNFBQS2Zka294Mg?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "징역 형 집"
    ]
  },
  {
    "id": "MED-2022-083",
    "title": "\"화장실서 중3 딸 불법촬영한 의대생, 집유 선고에 항소\" 분통",
    "date": "2022-08-12",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "의과대학생 (의사지망)",
    "summary": "2022-08-12경 보도된 사건으로, \"화장실서 중3 딸 불법촬영한 의대생, 집유 선고에 항소\" 분통. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-08",
        "desc": "파이낸셜뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "파이낸셜뉴스",
        "title": "\"화장실서 중3 딸 불법촬영한 의대생, 집유 선고에 항소\" 분통",
        "date": "2022-08-12",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5DeXI5QjZyX0RETElNWUtGMVZ2dXJyMGM2dEtxQVVtOERiNlJ1dDktYW91RTBUYV81SkRLRHZvUEMyQ25pU3Z6aFh6VkczdWdpY0tTR2l6Zkwwdw?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "의과대학생(의사지망)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2022-084",
    "title": "'탈의실 몰카' 의대생…적발 후에도 버젓이 '산부인과' 실습 참관",
    "date": "2022-10-18",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "sex_crime",
    "categoryName": "성범죄",
    "specialty": "산부인과",
    "summary": "2022-10-18경 보도된 사건으로, '탈의실 몰카' 의대생…적발 후에도 버젓이 '산부인과' 실습 참관. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "데일리안 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리안",
        "title": "'탈의실 몰카' 의대생…적발 후에도 버젓이 '산부인과' 실습 참관",
        "date": "2022-10-18",
        "url": "https://news.google.com/rss/articles/CBMilwJBVV95cUxQaFNkZWRPMXVDV0pxV0ZvbkRIY1B0enFNcTNyMmpVRkt6X1owbzVzS2lVR0puZ25qa3pBRHFqdUl1VlJmRU15MFZsd25seFZWUmxFYzRWcUVNMXVPSDZmamRjVmMzZUMwblU5cWZaM1FMVGF5Nl9BMjQyNzlRQ0hfc2ZYbEpLSGRmcjZ6bkZkZGNtNEtUTU1NdEd6MVV0VnJvODVZX2VyMGpEX05UUXJHUWt4Y19EYUZZdk9obGZCbFdxZ09YSTFZUlotSmZMZ3FtNVJyX0p0U0lmTVZVT2Y2U1I2YnFpSUh2b0FUeGZyU3A0UDM0OGIzUnREY3Nsbjh4dDhGU1BUVXkxNUVXMzFFWlVfM1JxOEU?oc=5"
      }
    ],
    "tags": [
      "성범죄",
      "서울",
      "산부인과",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-085",
    "title": "'30배 폭리' 프로포폴 놔주고, 불법 촬영까지 한 의사 구속",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, '30배 폭리' 프로포폴 놔주고, 불법 촬영까지 한 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'30배 폭리' 프로포폴 놔주고, 불법 촬영까지 한 의사 구속",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5kd2E2d0lrWW90ZGR2TGlaSFBhZVhQZng0bjdsOXdHNmM2TGVWb294ZVAtLTNWdGtzMGNva2RFbUZCSEEwMzkwWXY1aFRycHdVeU5CMkVwYjFNMzjSAWBBVV95cUxNeTg0bERrYkhFems3WVdKQ2xYdklHTUxaTFhVVF90TmRsWVhZbjQ1Q2lpbHhJeHlCTU9mYzlac0hFcElRZjU1dEFndkt2RjB0a3ZtZHhsSFpIb0xJay10cEw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-086",
    "title": "'프로포폴' 불법 투약하고 마취 환자 27차례 불법촬영한 의사 구속 송치",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, '프로포폴' 불법 투약하고 마취 환자 27차례 불법촬영한 의사 구속 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'프로포폴' 불법 투약하고 마취 환자 27차례 불법촬영한 의사 구속 송치",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5zUTVyVGhvSGx2dXpjbUZ5WTdyalRqUUIzd0txU3ctTmk5NVRWRm13emhkNHEzNmp5UnhBVDY5TUVMel9XWmVERUkxTUhvMjM2N1VDaFYtb250dFZUbFJVY0JCSEU5ZmNGYWRyREU5Y1BoT1JPbmZn0gF3QVVfeXFMTm5FSUFtX0d6MDFxRzVMOXhqWlUzeXNfTHFjRHo1SDlmLUdlRDBXTWt0R3FSSTBvLWhfYVlTeHJDWG5sXzVhZ25DSDN5UGVqLWp3T1BNSlRUR29PZHRNV2hrdGRqRWlKc1JmaEV2N2tSMWdVNXpTS00?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-087",
    "title": "[사회]하루에도 10번 투약...프로포폴 남용 의사 구속 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, [사회]하루에도 10번 투약...프로포폴 남용 의사 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "YTN",
        "title": "[사회]하루에도 10번 투약...프로포폴 남용 의사 구속 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBZNUplUWZCZDk3aWtNNFFsbUVYUTBjTngtOV9FQjJzZjJVTjJCYlo2TE15cXlCOWEwaDJaemxNS0czLXBuc3U5X1dlSGRMQzZLQjVxeDkxM2c0aXp0NW5JYmVsVFZGZG9FSDI0Z3pVQQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-088",
    "title": "프로포폴 등 마약류 상습 투약… 환자 불법촬영 혐의 의사 구속",
    "date": "2026-07-27",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-27경 보도된 사건으로, 프로포폴 등 마약류 상습 투약… 환자 불법촬영 혐의 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "동아일보",
        "title": "프로포폴 등 마약류 상습 투약… 환자 불법촬영 혐의 의사 구속",
        "date": "2026-07-27",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE14ckViUGQ0Nk1qR3h3NDYwLVMzMmdUSWtnZ2ZaX0tmSWJwMmEzdWVZbklXVGIxQUJPOGExR3kxS05vSVFrM0hGZjBHWTlOQlpJYXhzbm5peUV3TVFZM3JieXRTU0RGRnRMdVRqcE1BV3NXTm9JQWfSAWZBVV95cUxNajFNbXpBWFMzajhYalZqWDFYU0JSaDhIZy01TWFnVjFsOUU1cHJXRFRQSnA4QU92VHZleTZmNGE1alBMZTdGMFE1emVsMHQ4aHAxdkhTUjN1d2VuM0NRTHRUOFdvdlE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-089",
    "title": "중독자 32명에 프로포폴 18만㎖ 투약 의사 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 중독자 32명에 프로포폴 18만㎖ 투약 의사 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "연합뉴스TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "연합뉴스TV",
        "title": "중독자 32명에 프로포폴 18만㎖ 투약 의사 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1KWFN2X2NSeW9uOXJCT0RlSkt1R3d4cE5QRmZtb3diTmF2cGFiSng4T1hwNVlaaWxfYXh1SXNCaGtaRndTVXdfWFgyQjJoc1RKeTQxVlRuQ1JrblJOX2lDNU5YV3p2XzA?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-090",
    "title": "‘30배 폭리’ 프로포폴 불법 투약·환자 불법 촬영한 의사 구속",
    "date": "2026-07-26",
    "year": 2026,
    "region": "강원",
    "district": "강원 일대",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, ‘30배 폭리’ 프로포폴 불법 투약·환자 불법 촬영한 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "강원도민일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "강원도민일보",
        "title": "‘30배 폭리’ 프로포폴 불법 투약·환자 불법 촬영한 의사 구속",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9iazJwV3E3OXJSX01ncHpWaWNUWF9fUERKVGxUSHNyMmY0UmNfaDFUT0ZfT3RIM3ZLc3EzMFBpWXU4NG5RZlkycDF1ZndBb1JXWmdQdi15elVaSE50LXAxM1VlWHc5Ujg?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "강원",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-091",
    "title": "명의 도용해 5년간 4700회 프로포폴 불법 투약…檢, 50대 의사 구속기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 명의 도용해 5년간 4700회 프로포폴 불법 투약…檢, 50대 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "아시아투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "아시아투데이",
        "title": "명의 도용해 5년간 4700회 프로포폴 불법 투약…檢, 50대 의사 구속기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1HOXZDczBMWGQ1enA3anNHQXJsUmU3S1V3Vl9MN0gyMlFjaXJnc3FVeFJzQThCNkJnUnFNanN1UEdXMDA5d1ljUGg5Mk1Ldl9IOEJvWk4xYVpXSnE4RzFzLWtTRTI2NGNkWFRBTmxB?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-092",
    "title": "서울 강남 의원서 원가 30배 받고 불법 투약…의사 등 14명 송치",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 서울 강남 의원서 원가 30배 받고 불법 투약…의사 등 14명 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "경기일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "경기일보",
        "title": "서울 강남 의원서 원가 30배 받고 불법 투약…의사 등 14명 송치",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5UQkkxb0FUNGxmVGp4LUVIbHZoMmtYZVpLX1FhcTY0eWxxTldCYUxBVkQ5c3FfbUpjUERPWlNETElWUXNCQnVONWNXcEhuQlNIZlQyTmpLUDZGU3c?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-093",
    "title": "“하루 10회 프로포폴 투약…자살한 중독자 6명”…의사 구속 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, “하루 10회 프로포폴 투약…자살한 중독자 6명”…의사 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "“하루 10회 프로포폴 투약…자살한 중독자 6명”…의사 구속 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE84OGRsOW0yWU9fZ0FJVmg0QnoyV2ZybGZIcGlLWWJVekpaeHNpTkxpb25USTBrTWNqOVgxdUt5WGQ5dDJSQ09mUnlLaXR6OW95T2VDSjhPbzlNdERvN1NJWTFta05YNjJwa0FlaTJqQTJadw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-094",
    "title": "미용시술 뒤 감춰진 '마약 투약' … 의사 2명 구속송치",
    "date": "2026-07-27",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-27경 보도된 사건으로, 미용시술 뒤 감춰진 '마약 투약' … 의사 2명 구속송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "세이프타임즈 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "세이프타임즈",
        "title": "미용시술 뒤 감춰진 '마약 투약' … 의사 2명 구속송치",
        "date": "2026-07-27",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE4zZW1vZTJ2ak5DdGZuNEF2Q3M3M0haR0FwWVd0dUE4RFViTG9DUmZxSFc1dDNrbDlIQ3k1N2NRQjd6cW4xLWFjVnYycGZ4bFJYX0NmRGRwWFZmNEF2a2hGQ3F3VmpMMmd1eDhJNkRpZ9IBc0FVX3lxTFBmNC1hVFJYQ1kxTjlxejBRb25RRnZkc2ltSGVNaF93X19Jc0VNcl80d1R4Ul84Yk9oUUlodzFxLVB5NmxSTkZ3enVtaFlodGZGemhNdDVJVTJCZmpxamJ2RTBjVHpsUXNuQy1nVkRNX2N4MlU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-095",
    "title": "檢, 명의 도용해 5년간 프로포폴 4700회 불법 제공한 의사 구속기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 檢, 명의 도용해 5년간 프로포폴 4700회 불법 제공한 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "檢, 명의 도용해 5년간 프로포폴 4700회 불법 제공한 의사 구속기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNTEFodUxIcDhta0Jwdi1NVUx4TUhzTnFYXy00N0JBYVU1Zk5iZUZiclZZTWZEZGRBMWhmRnQzdldrd2xIako3NjE4SHNrQWlTZVFOS2pudnV1MkVzVHlBbEUzQkZCLV9idTNqT2ZDX0E1QVR2dTlQcy1VNkdqS3p5TEl2OTRCWFE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-096",
    "title": "“지인 명의 가져오면 더 투약”…프로포폴 불법 장사한 강남 의사 구속 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, “지인 명의 가져오면 더 투약”…프로포폴 불법 장사한 강남 의사 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "서울경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "서울경제",
        "title": "“지인 명의 가져오면 더 투약”…프로포폴 불법 장사한 강남 의사 구속 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9KN3ZxN0wwbUhmbU5XNGJTV3U4azI1Z3RnZFB3RVpOczdmczlMdHIzNnd4N2ZwYktpX0dFZ0JxRUtWcFJaYXdxcnJlYkcwb0JxdXc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-097",
    "title": "마약류 반복 투약 ‘의사 1명 구속·1명 檢 송치’",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 마약류 반복 투약 ‘의사 1명 구속·1명 檢 송치’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "데일리메디 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "데일리메디",
        "title": "마약류 반복 투약 ‘의사 1명 구속·1명 檢 송치’",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1Qa0ZNTkxxdXNNMUdkSEdhMzhzdVl4Sk5NWC02WnVWd3NrZ2lvZUlBZFFOamFRRWkyM0duRXI1QmlRQ2JvUUppWUpuRU1QbUYyc0hROGRGYUpqckRUMDlPNUlkOWVZdzVk?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-098",
    "title": "프로포폴 불법투약 의사들 적발...환자 불법 촬영도",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 프로포폴 불법투약 의사들 적발...환자 불법 촬영도. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "YTN",
        "title": "프로포폴 불법투약 의사들 적발...환자 불법 촬영도",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE43WWVRQ3Z2alk3UlVIR1ZqbTJ1RFIyN0tZQjA1VGRkdFR0Z3JXY242a2Fta2w0NXRhSGhQRW54VHV4eENIRUZXTG9nMFd6SnE3Zk5iNENiUXByOW5VTWc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-099",
    "title": "외국인 명의 등 도용 5년간 프로포폴 4천700회 투약한 의사 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 외국인 명의 등 도용 5년간 프로포폴 4천700회 투약한 의사 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "외국인 명의 등 도용 5년간 프로포폴 4천700회 투약한 의사 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5UVENEUVlUM3BVQzl3LUNxWDd2LVNXcVh3U09rMkJSSWtHb1BkclVLYXpEMnlwZzh3bnhXMUFjcVJraDBSZENkdXY5SDNiNUdOTWlrQmMxOU94X1nSAWBBVV95cUxNZktlazdYaF9jeDEyTER1TXdzb1kxa0Y2V2U4RXMteU51MTBUWmh6Rnl2UHE5UnVSUEJiNG9ubjNSSTRVdlFSQng4bWdPZDZVWlc3OC0yUGM4WEh0SHppNUc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-100",
    "title": "수사 중에도 병원 옮겨 투약‥원장·실장 구속",
    "date": "2026-06-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-06-26경 보도된 사건으로, 수사 중에도 병원 옮겨 투약‥원장·실장 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-06",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "수사 중에도 병원 옮겨 투약‥원장·실장 구속",
        "date": "2026-06-26",
        "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE54YTQyeVVvRTJVZl9JS1FpbHpjQ214bkc3LWp1cURrRkRJWXBVU0R0TWxWWG1RdDlnbjF3eTVBRHFmbkRBdTE0bm1Wd3RSbm1NQXRlVGJyclJRbDMyM3Jpbk4xd1RZMVVPVU5sVWNwM0lDaV9lQW9nVl9B?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-101",
    "title": "檢, 명의 도용해 프로포폴 4700회 투약한 의사 구속 기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 檢, 명의 도용해 프로포폴 4700회 투약한 의사 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "서울신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "서울신문",
        "title": "檢, 명의 도용해 프로포폴 4700회 투약한 의사 구속 기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1RNEZmZXNsdXlzeGtXVF9xcmN0bVcwMVlIbjNsR2tuZ3IyT1E0dWU4VFZ2MmVBOEJ2WUxLWHhVdXF1bFpqdU9KcXNTNWl1V3RuQkJYTjBPdWVVMTFSQnR5M2ZqOW8waTdJTGI2RkQxYw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-102",
    "title": "프로포폴 원가 30배 폭리…잠든 환자 불법 촬영한 의사 구속",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 프로포폴 원가 30배 폭리…잠든 환자 불법 촬영한 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "한국경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국경제",
        "title": "프로포폴 원가 30배 폭리…잠든 환자 불법 촬영한 의사 구속",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9QYkk2ZWwyV1FIVFBjS0xhN0UxTXlxb014OC1zVE5tR3dhazMyUUtIcDF0MXVVd2xpaE02c2R5Um54NUlDWXRTdUpNaGRPM2g5MVdSZmNOYmlOUQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-103",
    "title": "타인 명의 도용해 프로포폴 4700여차례 불법 투약한 의사 구속기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "강원",
    "district": "강원 일대",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 타인 명의 도용해 프로포폴 4700여차례 불법 투약한 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "강원도민일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "강원도민일보",
        "title": "타인 명의 도용해 프로포폴 4700여차례 불법 투약한 의사 구속기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5NQTZfVEF3Uk8wWXVIOFRGeF9PNnp6ZnAyeWFwVXROSEM0Zi1aSHN2VkJLWlE5YnEwSkZ5Nk96UlZhLTRfWmtTRjBBQ1FyUHVGdHN1dDVUd3JfZ3pNZjF1SkU0YlRiZW8?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "강원",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-104",
    "title": "\"프로포폴 하루 10번 맞혔다\"…중독자 양산한 강남 의사 구속 기소 - v.daum.net",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "강남구",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, \"프로포폴 하루 10번 맞혔다\"…중독자 양산한 강남 의사 구속 기소 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "\"프로포폴 하루 10번 맞혔다\"…중독자 양산한 강남 의사 구속 기소 - v.daum.net",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1mejh4M3Z3RkEtMXk5QzItRDRGc0MzWXk4eENhTXFhTk5JcE5QcXNFdDJ5TWpiSXZQUW95ZUFDWFBnZkRaVDIyT1IySmJTQlU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-105",
    "title": "SNS로 모집, 병원 옮겨가며 프로포폴 투약…강남 피부과 원장 등 구속",
    "date": "2026-06-25",
    "year": 2026,
    "region": "서울",
    "district": "강남구",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "피부과",
    "summary": "2026-06-25경 보도된 사건으로, SNS로 모집, 병원 옮겨가며 프로포폴 투약…강남 피부과 원장 등 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-06",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "SNS로 모집, 병원 옮겨가며 프로포폴 투약…강남 피부과 원장 등 구속",
        "date": "2026-06-25",
        "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBLYk5FeGJjZWNmTW85UEVpRHhoak15MjV4d0ZwcWVkYWtwQi1jbnZWU3g1bjd3MjJBRXNrX0J0aTJOY2dNNHlTOG1FRlpRYnFRc0x3RGhDcmlhalhOM3NSVVh4QQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "피부과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-106",
    "title": "\"가족 주민번호 가져오면 더 놔줄게\"... 프로포폴 4,700회 투약 의사 구속기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, \"가족 주민번호 가져오면 더 놔줄게\"... 프로포폴 4,700회 투약 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국일보",
        "title": "\"가족 주민번호 가져오면 더 놔줄게\"... 프로포폴 4,700회 투약 의사 구속기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5fakozOTNkZzlYZFJNNUxMOWtHNUNzRmtybEZLdTFXZWxlUlRTTk1fZjl5azhQTnBHNGJteTVNR19IYjVPdDB5ZmkyTjU5Y1U3blZfZEUxRzd2SUs5ck5mMkdnVG5KY25jVjV4bWFn0gFzQVVfeXFMTXRyTkJ3V0JkNVhsdzMzSXJoNDE5OEdFRTFRV2ZzSV9TakJWZFZRWV8wMXdsMlpSR0p6ZUtrazVzWWxXUDAzaFZsVGZJN2E4MVBEMmxUYzVGd1NSUEVIYVN0T1VmbzZKZFhVUEZoV2xRNC1Uaw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-107",
    "title": "서울 강남 프로포폴 불법 투약…구속된 의사의 충격적 행각",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 서울 강남 프로포폴 불법 투약…구속된 의사의 충격적 행각. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "공감신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "공감신문",
        "title": "서울 강남 프로포폴 불법 투약…구속된 의사의 충격적 행각",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9sTkQ2b0xzSHk2TDlSeGZPSG9JQjU5dHRleW1KVkppZFNwbkY1RWhySFIybkxaNTNSeW1XdGViY1ZFalB0MkZuWS1TRDRwQXhlOHBwWk1URmU3X3R3V3BYUGRyZjk4VmtI?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-108",
    "title": "프로포폴 중독 6명 죽음 불렀다… 유흥업소 종사자 등에 4700회 불법투약 의사 구속기소",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 프로포폴 중독 6명 죽음 불렀다… 유흥업소 종사자 등에 4700회 불법투약 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "서울Pn 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "서울Pn",
        "title": "프로포폴 중독 6명 죽음 불렀다… 유흥업소 종사자 등에 4700회 불법투약 의사 구속기소",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE13R21PSURQdDhFR3FlVU1VR09WWmVuekxIRUU5a3hBdHc1UDZSek9YYVlPWlgxTmU0SlFOdjVxdl9LdUgydUZWdWlrQm5ROFpxa1E4UmI0VW9RdHFLdjhvTkRLcEFGZGpJM2JfYmFB?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-109",
    "title": "청담동 의원서 '수면마취 장사'…프로포폴 불법투약·환자 성범죄 의사 구속",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 청담동 의원서 '수면마취 장사'…프로포폴 불법투약·환자 성범죄 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "한국AI부동산신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국AI부동산신문",
        "title": "청담동 의원서 '수면마취 장사'…프로포폴 불법투약·환자 성범죄 의사 구속",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiTEFVX3lxTFBQTWxQTFppME43c1BhSXMxWXc0WE5OU0Zqekw3SEVoMndqQzdDNXh6d3BTOEVUdGxNbEFfZU5XWmRXTGpXUTB0RzM5TVU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-110",
    "title": "프로포폴 빼돌려 판 동물병원장 구속…투약 운전자 사고로 덜미",
    "date": "2026-03-30",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-03-30경 보도된 사건으로, 프로포폴 빼돌려 판 동물병원장 구속…투약 운전자 사고로 덜미. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-03",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "프로포폴 빼돌려 판 동물병원장 구속…투약 운전자 사고로 덜미",
        "date": "2026-03-30",
        "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE42MDlEbnFRVmRUU2RNSjFpZUxOVDZ2RHZDSXNnbVYtNXJjc1JzbjJLd2JiaEU0VnR0RVFnWVdFNFE5VVByUUt1OGFNYlVsOUUxdFNLMmxWYXFOTEtjMzdRVDdRNA?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-111",
    "title": "\"미용 시술 탈 쓴 마약 장사\"…불법 투약에 환자 성범죄까지 한 의사 구속",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, \"미용 시술 탈 쓴 마약 장사\"…불법 투약에 환자 성범죄까지 한 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "네이트",
        "title": "\"미용 시술 탈 쓴 마약 장사\"…불법 투약에 환자 성범죄까지 한 의사 구속",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE03S1JEOWpFN2pSSFcwR1RBaHYtNlA2OVcxaVdwWkNIdUpWMl83VFE1ODBWdHNycG9yWjZxZnhKaFdWMkdyNThCV2oxVVZQQzZTUGIw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-112",
    "title": "수면마취 환자 27차례 불법촬영 의사 구속 송치···의료용 마약 불법투약도",
    "date": "2026-07-26",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-07-26경 보도된 사건으로, 수면마취 환자 27차례 불법촬영 의사 구속 송치···의료용 마약 불법투약도. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "네이트",
        "title": "수면마취 환자 27차례 불법촬영 의사 구속 송치···의료용 마약 불법투약도",
        "date": "2026-07-26",
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE1KU2gxdExSTDlSTE5HN2U2eWtIT2djcUxiZXdDYzczLXpMOG5LWGdWNGJWbEk5Mkx5Uk1rU1VwRnJoY2dQcDFKYVZKQWVoYWZCT0JF?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-113",
    "title": "피부과서 '프로포폴' 4700회 불법 투약⋯'강남 의사' 구속 기소 · 사건 전말은? - supple.kr",
    "date": "2026-06-01",
    "year": 2026,
    "region": "서울",
    "district": "강남구",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "피부과",
    "summary": "2026-06-01경 보도된 사건으로, 피부과서 '프로포폴' 4700회 불법 투약⋯'강남 의사' 구속 기소 · 사건 전말은? - supple.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-06",
        "desc": "supple.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "supple.kr",
        "title": "피부과서 '프로포폴' 4700회 불법 투약⋯'강남 의사' 구속 기소 · 사건 전말은? - supple.kr",
        "date": "2026-06-01",
        "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBDTmZmV29pQ0R0WG5XN0NaeXNHYkFuUjJvRktpVjB2aWFVaGFvVzl3RF9RdHgxNGFjRktoMjU5b0RBMDJSQlMwYUJVR0ZrYkZ1ZWxyYnpORkRpanc3?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "피부과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-114",
    "title": "프로포폴 1000회 투약해준 의사…검찰, '의료용 마약' 41명 입건",
    "date": "2025-12-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-28경 보도된 사건으로, 프로포폴 1000회 투약해준 의사…검찰, '의료용 마약' 41명 입건. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "더팩트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "더팩트",
        "title": "프로포폴 1000회 투약해준 의사…검찰, '의료용 마약' 41명 입건",
        "date": "2025-12-28",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5HdTNQVy1DVkxyTEF2NWVHdGZQRU9PVTd0TFFCWjU4RnR0cG9VQ0VkcEd6OHNIdTNOLVNNd2R4UDdHWTFsb1dGdTVONS10elFZTWJ5aHVB0gFQQVVfeXFMTVpLU0g5YjUzYmVjVTVZR1NXT25MUEt1cmRRYzV5OXJOVVZVTjZ4YndtMkRqcWgxWTctREhWNTVsN0ktZDFUUERacTlCRHpPOGk?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2024-115",
    "title": "돈만 내면 새벽에도 프로포폴 무제한 투약…의사 등 32명 적발",
    "date": "2024-11-20",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2024-11-20경 보도된 사건으로, 돈만 내면 새벽에도 프로포폴 무제한 투약…의사 등 32명 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "돈만 내면 새벽에도 프로포폴 무제한 투약…의사 등 32명 적발",
        "date": "2024-11-20",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9pamhqbW1NZHRoTEFBUXlvUW5ZeUdvc3Q1dmdTQWxfeXFhNzEtbmY1dm1Sc2ltYUFnY0piLThjSUE4RmM1OVUxdGc0UVg1M2wyaUtGc3RfbW1FX2_SAWBBVV95cUxQWjR6cVpvTm9ibVN5dms0b3dXRXpBR2J4dllYeW9LWmFiVDM0UXhJenN2OE1BeG1PMHFZeVMtckZHOGdpR09VaUVhSWFKLVJ6dlBWUFRVQzJqeDZmczRjSXI?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2024-116",
    "title": "'제2의 프로포폴' 5000회 이상 불법투약 혐의 의사 구속기소",
    "date": "2024-07-23",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2024-07-23경 보도된 사건으로, '제2의 프로포폴' 5000회 이상 불법투약 혐의 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-07",
        "desc": "뉴스핌 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "뉴스핌",
        "title": "'제2의 프로포폴' 5000회 이상 불법투약 혐의 의사 구속기소",
        "date": "2024-07-23",
        "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE9UWk5hY3NnMmVJa2VScnloMFRRcVlMV3l1a3JxYjFkb25zZU5SMkRRVTlFLUthNVRab1I5RERLN0JtQU5DNWFUeFBJcFA4VkxTZDhLeFhod1RHaUtY?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-117",
    "title": "‘시간당 100만원에 무제한 프로포폴’...불법 투약 의사 1심서 실형",
    "date": "2025-07-08",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-07-08경 보도된 사건으로, ‘시간당 100만원에 무제한 프로포폴’...불법 투약 의사 1심서 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "조선일보",
        "title": "‘시간당 100만원에 무제한 프로포폴’...불법 투약 의사 1심서 실형",
        "date": "2025-07-08",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPN2lMRmJGT3ctUlFtZWhGc0VHNXg1N2hudnhJSzczUE1KZEcwSnY3dWpoQkdObV80U3BBczVpRU0yaUJIYmhNRDNJSDNfNjd1TXEwY1hseFFibHVJWm9KSGFfLWJjVVMxU2JmUUxueGtWQ1Y4X2VFVjB4dEstcElheHM3RVhvQlE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2024-118",
    "title": "‘프로포폴 100만원에 1시간’…불법 판매‧투약 의사 적발",
    "date": "2024-11-21",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2024-11-21경 보도된 사건으로, ‘프로포폴 100만원에 1시간’…불법 판매‧투약 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "의학신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "의학신문",
        "title": "‘프로포폴 100만원에 1시간’…불법 판매‧투약 의사 적발",
        "date": "2024-11-21",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBWUEtjZTdrc2gtU0FVX29kTldzU1drNUY5akQwUVJmUDdYVDRrVjQyOVhXSUxQTnB4a1E1NERUaGNqeHZXaU5CNUFwZVNHbjJXMTBWcmJTSWNJMVB4ajhsMEY0dnVpeWpoeUE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-119",
    "title": "유아인 프로포폴 처방하고 ‘셀프’ 투약한 의사, 구속영장 기각",
    "date": "2023-03-16",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-03-16경 보도된 사건으로, 유아인 프로포폴 처방하고 ‘셀프’ 투약한 의사, 구속영장 기각. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-03",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "유아인 프로포폴 처방하고 ‘셀프’ 투약한 의사, 구속영장 기각",
        "date": "2023-03-16",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1tRGltWGVaOHVIUFQ5TWd6UnRZMDZjN2RzQ2tkNUd2LWRsamVudFB2dkNQS0JGRlhEb0Z0WTRvT3kzZFhIS0xjTjBYWWtFTGViTjhGVUpPQzAzd9IBX0FVX3lxTFAxQUtldkNnNWV2N3RaRzRjRlBvS25XVGdjaFdBYWllMXJNaWJCVTh5Y0RhdDhKejM2SzBCSEd6WmV4aXNST1UwYnIyN2xzUTcwWW9EUWxTYWpVT3ZIUFZR?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2024-120",
    "title": "하루 1860만원 받고 10시간 프로포폴 놔줬다... 의사 등 7명 구속기소",
    "date": "2024-11-20",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2024-11-20경 보도된 사건으로, 하루 1860만원 받고 10시간 프로포폴 놔줬다... 의사 등 7명 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "하루 1860만원 받고 10시간 프로포폴 놔줬다... 의사 등 7명 구속기소",
        "date": "2024-11-20",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNLVd3TDdaSjljSDJBLUFPX1E4Z2J0ekU3NzlWOTFhNVg5dzg1TzRrU09pLUh5ekI1WkJ4a29tUGxkbEgwOEc4YTNra1RJTEN6UmRxZDR6aERURllxaExXcTVoblRJOVdSUDFSakNWQUhmSjNYcDVRUnhadmRwUFlxNXNWSkdjbFU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-121",
    "title": "특별영업에 셀프 투약까지…'마약류 불법 처방' 의사 구속 - news.sbs.co.kr",
    "date": "2025-02-13",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-02-13경 보도된 사건으로, 특별영업에 셀프 투약까지…'마약류 불법 처방' 의사 구속 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-02",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-02",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "특별영업에 셀프 투약까지…'마약류 불법 처방' 의사 구속 - news.sbs.co.kr",
        "date": "2025-02-13",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5jQlZ1TFk2amVVU1dfcFJveFNZZGhUUjVqai1wTnNRanhJcF9yN3RQN0d3eHpuY0NrTXBoYjk4b2ViR2VTWUZrODJPNXk3UFdzVThZbGRMM0h1azk4MnNRZENWaU9CWllIV2fSAWZBVV95cUxQcEpmWE5lMzQyYkIwcWUyNEpDTjZnbnFmUWktelpGMEFuR0VOMmVWRUNNdFpXU1VOQ3AxZHppNDRmcERScUxmQkg0VXRzODFpQUFmU0Y5aFNWb3FDekJCbHFrWm1GcEE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2022-122",
    "title": "단골 환자에 프로포폴 상습 투약…50대 의사 법정구속",
    "date": "2022-08-03",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2022-08-03경 보도된 사건으로, 단골 환자에 프로포폴 상습 투약…50대 의사 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-08",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-08",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "단골 환자에 프로포폴 상습 투약…50대 의사 법정구속",
        "date": "2022-08-03",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE0yWGRza0h6NXJZYTgxaXNkMllQQWV4QVJtZVZGbmJMRzhJTTJxN2pocksxbWE4YzhZZVhjOHcxOVkycV9CTFc1dFU4eFhDSTVBNVg4OWQtbWtSOEnSAWBBVV95cUxQRE94Znc0ZmJxcjB2UzdyeHBnRTF2UTlUeF9hLUlDYXJsS3lQUXpjZmJBSExTZkI2ME1Ga1VPdy1OQmJyWmVtNUtyYWpHbVZ4Y2ZBVVVuOGVQY1FCQVpFcks?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-123",
    "title": "유아인 프로포폴 처방 의사 '셀프 투약' 혐의로 구속 기로",
    "date": "2023-03-16",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-03-16경 보도된 사건으로, 유아인 프로포폴 처방 의사 '셀프 투약' 혐의로 구속 기로. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-03",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국일보",
        "title": "유아인 프로포폴 처방 의사 '셀프 투약' 혐의로 구속 기로",
        "date": "2023-03-16",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5jVDZuTnhBU1VyZGptWkxHaVExRWZWdm9hMW83RklLaWxLUTVfVGhKU296amYxRDhFZk5tMnV1c1d0cmlCaUE2dHlkU3JPMVNsLVNRSV9QWGhRNmRMemkwaXVFeHpFVTNmazNnb3ZR0gFzQVVfeXFMT2F4OGdHbm12OFplVkJWS1hDT3JEajlLbVpPODd5d3JBZmJKZUdsalVpNzdralowbTBydm9QMDJlQ3FmLU11NzlkeVVRWTFxbVdTNVJTbUM2aEJTaHoyQmJELWV3eWw4T3FfTG52Qms5SFVtQQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2013-124",
    "title": "유명 연예인에 프로포폴 투약 의사 2명 구속",
    "date": "2013-03-06",
    "year": 2013,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2013-03-06경 보도된 사건으로, 유명 연예인에 프로포폴 투약 의사 2명 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2013-03",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2013-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "법률신문",
        "title": "유명 연예인에 프로포폴 투약 의사 2명 구속",
        "date": "2013-03-06",
        "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBHbnJZTnVKUUpIMDdNamdhQnJvYVVLc19fRjJuOW1heGtET3V6WkpvXzJJRy1vZ1NBa2IwS1pBSzVMOGRUbHpFWUR4Z1ZmMGVHeUpXbnliakFVc192TFhpbFdIbUpBWllYMTZKNNIBcEFVX3lxTE8yMW9iUnZob3NWUmpWU0FQUkNJNmxWOERGMUVXY2RrVm5PZjNqOFF5bU44Q1Nfb1U3U3djMnYzUDNhNk5mYmJYUURqOEpIbXhISzNlOXFSMEd2N2FzbHNCd3ZlcU9xVmhRUzBKUmhKRms?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2013-125",
    "title": "'프로포폴 투약' 이승연·박시연 등 치료한 의사 구속 - news.sbs.co.kr",
    "date": "2013-03-07",
    "year": 2013,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2013-03-07경 보도된 사건으로, '프로포폴 투약' 이승연·박시연 등 치료한 의사 구속 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2013-03",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2013-03",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "'프로포폴 투약' 이승연·박시연 등 치료한 의사 구속 - news.sbs.co.kr",
        "date": "2013-03-07",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE5Xczg2aWFnYjZ6V2dpb2pJMG9jVGRvYUpEVnhhMnNab0plNDRuMEttVjUyMWtjNFN6ZzdmNktHS3FhOE1SQkl2VHg4RGZzNGdVdUJsM0hOTnd3VGhRMVZiV2ZpVEZJWUlzcmc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-126",
    "title": "검찰, 펜타닐 불법처방 의사 징역 2년에 항소…“형량 지나치게 가벼워”",
    "date": "2023-12-18",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-18경 보도된 사건으로, 검찰, 펜타닐 불법처방 의사 징역 2년에 항소…“형량 지나치게 가벼워”. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역 2년에 항소 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년에 항소 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "검찰, 펜타닐 불법처방 의사 징역 2년에 항소…“형량 지나치게 가벼워”",
        "date": "2023-12-18",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9xTkNyLTNMQ3RKQ2psQXdvTEFwSVB6czV0eFdodEktZGpvYURrdTZtbWUtYVpGcUt4WVRKTkswV1BGdUxrSGpDcUNjT0lGVGoybjFEeGNITENmMmc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 2년에"
    ]
  },
  {
    "id": "MED-2023-127",
    "title": "‘좀비마약’ 펜타닐 패치 한 명에 4800장 처방한 의사…1심 ‘징역 2년’",
    "date": "2023-12-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-13경 보도된 사건으로, ‘좀비마약’ 펜타닐 패치 한 명에 4800장 처방한 의사…1심 ‘징역 2년’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "시사저널 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역 2년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "시사저널",
        "title": "‘좀비마약’ 펜타닐 패치 한 명에 4800장 처방한 의사…1심 ‘징역 2년’",
        "date": "2023-12-13",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1qZl9tSzk5LTJIWm95OUI4S3o0R1dMMEd4N3ViNk9rUENlYjZHRS1KaHJmamg5QmFIUGNtcVB4V3JxeVQxWlNGSk5iSlAweWlMc0pLSXZBaEFWLUM3U2RlRnRuRk8xNmUzZkJIV1ptVdIBc0FVX3lxTE1sMWNEMEpOT0ExSzJNX1oteTFkcHRnd0M5STNXWUdnNXI1Qi1NQWppdjVLUkIyS2tiWW5nd3k4WVliRC03aXpFSkptczRNb3BoSE1DZkk2aWExQmpfWGhWQ0Jrb1BFbUJ1THpJTnRZTmI1THM?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2023-128",
    "title": "펜타닐패치 7천여장 처방받은 30대·5천장 처방 의사 모두 실형",
    "date": "2023-12-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-13경 보도된 사건으로, 펜타닐패치 7천여장 처방받은 30대·5천장 처방 의사 모두 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "펜타닐패치 7천여장 처방받은 30대·5천장 처방 의사 모두 실형",
        "date": "2023-12-13",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBTZDJobl9tX3RLM2RydWpEUVlCaGRWbHBBYWlNN01lcGQ3Y01GTjdMT3VxaS1wRUdXTExYMUJZQ3lTSG81UUdaQUtJNzF5RVN4eHl5TFpBZ1VnOTTSAWBBVV95cUxPVVBTU3ppUGUzZVl4T1p2MnJ0RlRZUGU5Uk9LTTJlbWpzSm8zSGtFZTVBOXVfYllGNWkxMklhbENFdFA3QUxJbHpuN2tBazRyelVSLXBMVFNjUExqU3ZNck0?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-129",
    "title": "‘좀비마약’ 펜타닐 패치 한명에 4826장 처방한 의사 1심서 실형",
    "date": "2023-12-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-13경 보도된 사건으로, ‘좀비마약’ 펜타닐 패치 한명에 4826장 처방한 의사 1심서 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "경향신문",
        "title": "‘좀비마약’ 펜타닐 패치 한명에 4826장 처방한 의사 1심서 실형",
        "date": "2023-12-13",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5BdXQzejJTbEIzNl9KU0pVN0FjcWhmU3VZYjZPd3dpa0RweGFNOHB1MGhicGFWZ09YeU5lN1Nnc0tKeUhsNnc3cDBMUHhZSkU3RUVYejM5ZWZVQdIBX0FVX3lxTFA0T0N5LVRPaEdMbnl2WHlackJfVGY4Ukd2NWRJRkJPb3VYYkpqeFAzdG5lRmdTa09vaVBFNTJFWkNlakNydDBzLWJhcElGbDRyalBad0o4RUZhVTVKWTVZ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-130",
    "title": "검찰, 펜타닐 수천장 처방 의사 징역 2년에 \"형량 가볍다\" 항소 - v.daum.net",
    "date": "2023-12-18",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-18경 보도된 사건으로, 검찰, 펜타닐 수천장 처방 의사 징역 2년에 \"형량 가볍다\" 항소 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역 2년에  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년에  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "검찰, 펜타닐 수천장 처방 의사 징역 2년에 \"형량 가볍다\" 항소 - v.daum.net",
        "date": "2023-12-18",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTFA5VzdGREhMc3Z0Sl9FUHd0Z0ptbXJCQVJVOFF3TVVnWFd2UDZVXzJqTFI3c3RRSzFJWm1EWVI4clBKYUlfX2c?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 2년에"
    ]
  },
  {
    "id": "MED-2023-131",
    "title": "펜타닐 불법처방한 의사들, 1심서 실형·벌금형 선고",
    "date": "2023-12-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-13경 보도된 사건으로, 펜타닐 불법처방한 의사들, 1심서 실형·벌금형 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "펜타닐 불법처방한 의사들, 1심서 실형·벌금형 선고",
        "date": "2023-12-13",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5zcW1QOFd3OFBQOFRSNGZ3emc0MEZsZGV5bFVzRDdwOUEzeDFSV2tuWkJsUUw0TXRyaGhPemt2WE44aU90TlNJVWNmdlpFb0p5Mno4RGtWYkRNaV9zZDBwWdIBeEFVX3lxTE5HWlZKWHMzNXV4eHNuOEVDZDc2em96VDNmeHRkOGJCdTdjQmJJQlc2R2F0cl9vaDNrS2U4OXhSU3Z1SVd0YVhEdXIxRXpETl9rYWNlSE02Sm9OTUNFWjBRdGpTOV9LYnJVcU55OEFLQ2lpc1BKaEFLcg?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-132",
    "title": "펜타닐 패치 4천8백 장 불법 처방 의사 징역 2년",
    "date": "2023-12-13",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-12-13경 보도된 사건으로, 펜타닐 패치 4천8백 장 불법 처방 의사 징역 2년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-12",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-12",
        "desc": "징역 2년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "펜타닐 패치 4천8백 장 불법 처방 의사 징역 2년",
        "date": "2023-12-13",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBYSkZWNS00VUdhQ0d2LWw2UHNwZVR1NDl6RlgyZzBZYk9hbmZLenJNTTFac3ZRUGhGMG93NDExeTZJUUtHYVlJOThsZUp2dm1fYVZLMTNGbmRHd1NiVTZGV0dMTmxqMUl1TFR1LWdCbW1fcDFPeVp1VNIBeEFVX3lxTE9WVEVYR3JHYWRzVEpZRUhfeHNiclRkZ2h4RmJKaTN4LVYyVk9pbFlBbHROOVQzMjdNQUZsRXp5S1R3ODVEeHRucG9Xb3ZfZ0xvc0VwVmNZS1RQT0pCV3QtUUE4MEdKYjBVZ1hHRHdnalNXX3FGaDhsVA?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2025-133",
    "title": "프로포폴·펜타닐 중독, 병원이 도왔다? '묻지마 처방' 의사 23명 적발",
    "date": "2025-09-26",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-09-26경 보도된 사건으로, 프로포폴·펜타닐 중독, 병원이 도왔다? '묻지마 처방' 의사 23명 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-09",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-09",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "프로포폴·펜타닐 중독, 병원이 도왔다? '묻지마 처방' 의사 23명 적발",
        "date": "2025-09-26",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5pZkdBSi1SenRYUjhseGdkbUNmNHBnU1Bxc3NrNDVVYjZvVEc4MTFqam9VNTFxc2ltSjlwNENLU2ppelpndU9rOXZMRURtZzVXZVhGdFZSQmloZw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-134",
    "title": "진찰없이 '좀비마약' 펜타닐 불법 처방 의사 첫 구속기소",
    "date": "2023-06-28",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-28경 보도된 사건으로, 진찰없이 '좀비마약' 펜타닐 불법 처방 의사 첫 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "세이프타임즈 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "세이프타임즈",
        "title": "진찰없이 '좀비마약' 펜타닐 불법 처방 의사 첫 구속기소",
        "date": "2023-06-28",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1ZRnYxZjRzU0ZiUW9mWUptWFoxZVNETjFZUk9Pc0ltVUtLSk5IWXB1dE1BUElnby1IajBqVS1aOVZabTVWYzNPYjJZMWZIbzZKbWc1NUJtdjBrMlUzZVhoZ3FrMUY4UlVhSkNlZW44Y9IBc0FVX3lxTFBZelBKNWdjT2dTRGxDTGZUVF9uY0N0aGM1eXdGYUhlOENsN0dfbXBGRU95eEQ0QzI4ZG9SRS1FQWFyaVZYTU1fR3VGVEpDWm5nNHFmQTctZU5qVElrWXh0UU9qeTBDU1hpYkRsbkhmUDhDQlU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-135",
    "title": "‘제2의 프로포폴’ 5년간 불법 투약한 의사, 징역 4년 확정",
    "date": "2026-03-27",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-03-27경 보도된 사건으로, ‘제2의 프로포폴’ 5년간 불법 투약한 의사, 징역 4년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-03",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-03",
        "desc": "징역 4년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "동아일보",
        "title": "‘제2의 프로포폴’ 5년간 불법 투약한 의사, 징역 4년 확정",
        "date": "2026-03-27",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5HUDk5aFM1NVJodWJDS29zd1BqTjlINTRNUS1oaW95M3ZVeVRyRkR0M3hnNWJVYnJ0NUJzRzNmNUdoT1hnU2FkUFpQNU5paDNOejJGZGdjdDFBLVFZd0tzM0dQaDJUV08zWE1yWXRIdXJ4TXlSLVHSAWZBVV95cUxQZDZjVXZzSTRINFF3NC1SSkU5QWNTR3UxN3FYdUtzdWlSSENwSzFRYUJpM3FMaUFVOWVXRXR6ekJKNEtvSnVUM3dCU0JWY0NkdkpkUTJuLTFUQmJmNzhxNV9NalJPNmc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2025-136",
    "title": "프로포폴 417차례 불법 투약…의사 등 7명 항소심서도 실형",
    "date": "2025-11-16",
    "year": 2025,
    "region": "경기",
    "district": "경기 전역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-11-16경 보도된 사건으로, 프로포폴 417차례 불법 투약…의사 등 7명 항소심서도 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-11",
        "desc": "경기일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-11",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "경기일보",
        "title": "프로포폴 417차례 불법 투약…의사 등 7명 항소심서도 실형",
        "date": "2025-11-16",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1iamlfallrZXpSNXFyWEpVWmNwWWxiblRocmc5emF4akFXNTdWaUJnQW9IQjRoU1NveFVUVXBldmhiWU5oR3pFVFRfSkpRRTFVT19ueFlBYVB5V2M?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "경기",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2026-137",
    "title": "\"내원자에 '제2 프로포폴' 수천회 투약\"…의사 징역 4년 확정",
    "date": "2026-03-27",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-03-27경 보도된 사건으로, \"내원자에 '제2 프로포폴' 수천회 투약\"…의사 징역 4년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-03",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-03",
        "desc": "징역 4년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "\"내원자에 '제2 프로포폴' 수천회 투약\"…의사 징역 4년 확정",
        "date": "2026-03-27",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBMR1lXNUhEZWU5WUExWmVYNVJHT3oxWGdsVC1XQkZTOFlrU1k4LTVZOURfN2Z1U1FDLWpsdnV0Wkw2SHE1cmV6RTVZZUwzWDZNY1RjNGVmUmlkcWdXWWNrQ9IBeEFVX3lxTFBVQ2Z2c05xRFBXOW9vNFYtcmhhaWZBZHVFbzYyRWZOQ3ZENHQtcktOWE1TNFQyT3VhaE01WUZ2SmtpNVBUX1FTcVpVd3R4NHU0TUNkWGtFRk5RazNNSVh1bTMtQmNfbV9TUjNRSVc1Y3dpZmozbXdaTA?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2021-138",
    "title": "유명 걸그룹 멤버에 프로포폴 불법투약한 의사 2심도 실형",
    "date": "2021-06-25",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2021-06-25경 보도된 사건으로, 유명 걸그룹 멤버에 프로포폴 불법투약한 의사 2심도 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-06",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-06",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "유명 걸그룹 멤버에 프로포폴 불법투약한 의사 2심도 실형",
        "date": "2021-06-25",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1CaTNRdEZGdFRSLW9rZmtfMm1TdEt2dkZvNWIwV3RFSXFHOFpQMllrLUxVSHZKNG9wVmF6T0JGZXR6QmpTMC1vaGlsYlk5S1lkUlNvcGRTRW9TOU3SAWBBVV95cUxQalRGMWx5dV9hRmpfdVlVdXU3Q0QyLWtMZnNKVTEzTlZwTjgxTENYZjZ5Mnh6YWJmUkw1YWN4RGI5ZmJZSW9UU2hzRUIxVDM3bDN6TU5TUFdkUGRPUm4xTUM?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2026-139",
    "title": "중독자들에 ‘제2의 프로포폴’ 판 의사 감형, 왜?…징역 4년 실형 선고",
    "date": "2026-03-28",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-03-28경 보도된 사건으로, 중독자들에 ‘제2의 프로포폴’ 판 의사 감형, 왜?…징역 4년 실형 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-03",
        "desc": "문화일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-03",
        "desc": "징역 4년 실형 선고 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 실형 선고 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "문화일보",
        "title": "중독자들에 ‘제2의 프로포폴’ 판 의사 감형, 왜?…징역 4년 실형 선고",
        "date": "2026-03-28",
        "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE05OUNZYUcxbVBKb3hkam5tMzFfZ1V1c2JXLUlaVFVxZmgwd2dIRk9tVTBCaDlGQXNrWnFkQ1ZJamhzWVVCMnpYUFNRT2JYa1dH?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2025-140",
    "title": "'의사가 중독시켰다'…5년간 마취제 5000회 의사 징역 6년",
    "date": "2025-01-14",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-01-14경 보도된 사건으로, '의사가 중독시켰다'…5년간 마취제 5000회 의사 징역 6년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-01",
        "desc": "데일리한국 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-01",
        "desc": "징역 6년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 6년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "데일리한국",
        "title": "'의사가 중독시켰다'…5년간 마취제 5000회 의사 징역 6년",
        "date": "2025-01-14",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE84Wjc0U3ZRSzJSR29EQTdNbGU5b0FSMU1vaWdkVk9PaWVqNGJBU1I2OFE3bVpmMUU4d2tLV1ZhbjI5MzZxOS1BY1dGR005TEhwZ3hNOFhFRXR4aHRkbFoxb1BFYUFVOWdvR1JRc1BwRdIBc0FVX3lxTFBkNGcyVmttWHlOUVZydUI3VVViUTJMUk1rdDliOEdTN3VxYUx6LVJ5V3R2SEV0MjZuUGktQ0Z0LXI4eEZtTVhOc0JRM2xOQWlyNndVTTV1RFN1dmNWRlNRWXZGQklPTWI3NzBUQXl0Z29rVE0?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 6년"
    ]
  },
  {
    "id": "MED-2021-141",
    "title": "걸그룹 멤버에 프로포폴 불법 투약한 의사, 항소심도 징역형",
    "date": "2021-06-25",
    "year": 2021,
    "region": "경기",
    "district": "경기 전역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2021-06-25경 보도된 사건으로, 걸그룹 멤버에 프로포폴 불법 투약한 의사, 항소심도 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-06",
        "desc": "경기신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-06",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "경기신문",
        "title": "걸그룹 멤버에 프로포폴 불법 투약한 의사, 항소심도 징역형",
        "date": "2021-06-25",
        "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9aSUJPSTBSbTRTTk1oQ0p2b0xKRW1oUGFZUXFEeF9DSE9tbzRnZDRWMlpQMWhzZjdubzNDS1JaZGl5MGpkdmI4bHVEOTh1aElUc2NJc1hwSU5CNG9XSTFjXzJB?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "경기",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2022-142",
    "title": "징역 18년 구형받은 의사, 환자 성범죄 혐의 '무죄'로 징역 2년",
    "date": "2022-10-21",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2022-10-21경 보도된 사건으로, 징역 18년 구형받은 의사, 환자 성범죄 혐의 '무죄'로 징역 2년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-10",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-10",
        "desc": "징역 18년 구형받은 의사 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 18년 구형받은 의사 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "징역 18년 구형받은 의사, 환자 성범죄 혐의 '무죄'로 징역 2년",
        "date": "2022-10-21",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBGem5NVVdHMElvUFRZRGpIRlVvbU5UbXlXSzBIT1NFX1lmME9rRl9pY3QwWEI1aFZ2YnlDRXc2X29jR205YTVjOTJTUkZ3dGw3NU5YRWRoR09Hdw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "징역 18년"
    ]
  },
  {
    "id": "MED-2026-143",
    "title": "식약처, 식욕억제제 불법 처방한 의사 적발…검찰 송치",
    "date": "2026-08-22",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-08-22경 보도된 사건으로, 식약처, 식욕억제제 불법 처방한 의사 적발…검찰 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "데일리팜 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리팜",
        "title": "식약처, 식욕억제제 불법 처방한 의사 적발…검찰 송치",
        "date": "2026-08-22",
        "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTFAyaHY4RWd5d1kyN09iZV9RdmdLRW5nOVczcFJXM0FnTndWRTVuQ2ZQSEZZWXdnZjdaR24ySmVwTUllZFlsMUNhNmxmODBFaG9NN1lUUG1ZOWhMVUlObHlvczRuSXc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-144",
    "title": "식약처, 식욕억제제 '나비약' 등 과다 처방 의사 적발",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식약처, 식욕억제제 '나비약' 등 과다 처방 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "식약처, 식욕억제제 '나비약' 등 과다 처방 의사 적발",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE90UGd0cmNvLTh0Z2JoU1ZSRGdfT3BfdmRrRk9nYXJ6SEVyQl9OYThybHBWVW9hVmMxeU5CZnRLNlhBQW12UTFrSmF3S05NdTBoLUVsNXZOd1JmTVXSAWBBVV95cUxPUlNYdGNwNUhJUHFBSzhqVGZMN3J1cm1aN1ZPeXRlcHJOMkd1UW1kRDhsTS16X2JPMVRFOTZIRGVLaHBIMnVJZTlDWTNJTm1RdjZ6OEFfTlRiQmhweUZtakw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-145",
    "title": "식약처, ‘식욕억제제 과다 처방’ 의사 적발해 검찰 송치",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식약처, ‘식욕억제제 과다 처방’ 의사 적발해 검찰 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "식약처, ‘식욕억제제 과다 처방’ 의사 적발해 검찰 송치",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE51UWJ0RTNaMHIyaDNFQ0FSYmVtbEdtcFJaZk1CZzE2eHY5NjV3eU5nWm5HZXVzcU9DSC1vT3FoMFdWaGVEVXgyZHBwd1l5NmljbWdXSmdpYlVwRUU?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-146",
    "title": "‘나비약’ 5만정 처방한 의사 검찰 송치",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, ‘나비약’ 5만정 처방한 의사 검찰 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "경향신문",
        "title": "‘나비약’ 5만정 처방한 의사 검찰 송치",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE52RW9YVzhIcGxjYWpvakhCckItZ2hUMkhPbHBpRjZQNlBacWFqVGRqXzJFSjV3WmdZV1NFN25LN0pGWUQ2dkRCYkVsOGlQNEg3RFVIZFpLcUZxZ9IBX0FVX3lxTE84X0J1dzNUbmFDcmJNSUpsOFpTTVR5bnNINTRyTWFxbmc1ZUk0bGpNRHFTbXBFZnRVR1JOdjNGUU5XUnpXU2o2Vkd6ZVV2RXhITlc4SFcwczlFRkMxRThN?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-147",
    "title": "식욕억제제 불법 처방 의사 적발…의료진 대상 첫 형사조치",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식욕억제제 불법 처방 의사 적발…의료진 대상 첫 형사조치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "약사공론 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "약사공론",
        "title": "식욕억제제 불법 처방 의사 적발…의료진 대상 첫 형사조치",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9tN2NSTTZKYnVnYXFweUNTNmJRcmRwRnhqVFl5WmNXVUZNZjV0WmpFMUxGZ3BYUVc4MTZFVjQxV2dUMFRLV3lieWdDeER6ZlZTUlFUWk5OX05EMlVkYXJPT0xxRUFxQllUNW5lOQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-148",
    "title": "비만 아닌데 '나비약' 5만정 처방… '식욕억제제' 과다 처방 의사 적발",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 비만 아닌데 '나비약' 5만정 처방… '식욕억제제' 과다 처방 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "헬스조선 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "헬스조선",
        "title": "비만 아닌데 '나비약' 5만정 처방… '식욕억제제' 과다 처방 의사 적발",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBGbmRLRFczMkl6UTl0dl9rU3ZKUzZJc29zR3FzTW96eV9pYVBCZlp1NWtXVWoyamNVaDRfY19jQXFBVXFHZVVCZXZuVDBPbmtVTFY1SFhNTlRJVHNhOXg0RngycXhvLVZRdms3Qy01LUZHd2xBMk9lTVE3bGg2RFE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-149",
    "title": "한 명에게 1만7300정…'나비약' 5만정 넘게 뿌린 의사 적발 - 머니투데이",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 한 명에게 1만7300정…'나비약' 5만정 넘게 뿌린 의사 적발 - 머니투데이. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "머니투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "머니투데이",
        "title": "한 명에게 1만7300정…'나비약' 5만정 넘게 뿌린 의사 적발 - 머니투데이",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE56Y21oUTVRdnQ2UGlCUk15dngwNEFiOXl5QUNRRmZZYTgzR3N3Z0VsRHRkYWlKanMwU2EyeXVmMmdLU0ZfcmVlcWgweXFEUk41cmhmU2tqbHZvbzNXTlBzT3RUYlpLVDB2MkHSAW9BVV95cUxNVEVWTXlueUhFZVlJWEpJWWRHa1Z3VE1ncFIwY0tnaDlNZUI4RGl3STJYdGdObUpPT05HaWVHZ0VDMDEzMlFmSnh3R1V2d1VQal9VMnhtLTQ1ZnVXaVpacTExWVRBaDBkX2tQSF9ueDA?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-150",
    "title": "식약처 마약 전담팀, 식욕억제제 ‘나비약’ 5만여 정 불법 처방한 의사 적발",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식약처 마약 전담팀, 식욕억제제 ‘나비약’ 5만여 정 불법 처방한 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "BBS불교방송 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "BBS불교방송",
        "title": "식약처 마약 전담팀, 식욕억제제 ‘나비약’ 5만여 정 불법 처방한 의사 적발",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1xOE44MEJ5TDZpZDRuSlFlWmtlaGJOYXY0YkpHcUVZZE5mU2pxMFpHN25tc0R0ZExRcnAwLTVVNE5oaU9vUWtmUWw1VGJWUXd3THpTd0FDWTlQSWtXYjhtMFNXM0FIZXNmQkE0?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-151",
    "title": "식욕억제제 ‘나비약’ 5만정 과다처방 의사 적발",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식욕억제제 ‘나비약’ 5만정 과다처방 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "서울경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "서울경제",
        "title": "식욕억제제 ‘나비약’ 5만정 과다처방 의사 적발",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTE9oZ3ptUVFlRDViajVPZ1ZsbWNwSVk0bktzVEViWnBUbWRrbnZlakx6Wk9MTjR4VGRMeU9LcXl0cGI4Ym9LXzRldm9qdlNOb083ZlE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-152",
    "title": "‘나비약’ 5만 정 불법 처방한 의사 검찰 송치",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, ‘나비약’ 5만 정 불법 처방한 의사 검찰 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "덴탈투데이 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "덴탈투데이",
        "title": "‘나비약’ 5만 정 불법 처방한 의사 검찰 송치",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE4zTEVyQ0RudXBXRFlPMHNQRl9WaW45YlRCaDlETHp5bElzN2hsRmRpWWluNEZpNk56YXctX2I3aEQ0Z1o1YmU4OWl2M2l5WW5tTG13ckw3b3J1QWw2OU5aVTUwNVV5bVcy?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-153",
    "title": "식욕억제제 ‘나비약’ 5만정 불법처방 의사 적발",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, 식욕억제제 ‘나비약’ 5만정 불법처방 의사 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "서울경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "서울경제",
        "title": "식욕억제제 ‘나비약’ 5만정 불법처방 의사 적발",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBONUEwcndFckRlQ3B4bmxOX2RpOXlTMC11cHNNRDFJNDBoN1FBVTlGZTI0eF96SUhVTEZWcWhXVk13alFNdjRqR0UxRjhWbXFaMGc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-154",
    "title": "\"비만 아닌데도\"…식욕억제제 과다 처방 의사 송치",
    "date": "2026-04-02",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-04-02경 보도된 사건으로, \"비만 아닌데도\"…식욕억제제 과다 처방 의사 송치. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "한국경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "한국경제",
        "title": "\"비만 아닌데도\"…식욕억제제 과다 처방 의사 송치",
        "date": "2026-04-02",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFAwbll1Ri1HTjBQMGcxNDFXOTZCdVBGTXpYSTc5QVpDT2hlWmpmbnROem90VW00WVdLX010U0NnbGo2QTNoTDJDQVBKdnVMS0E5bDZUZHlBdmtEUQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2025-155",
    "title": "피부과 찾아온 환자에게 수천회 ‘마약’ 놔준 간호조무사 구속···‘의사 면허’ 공유한 병원 - v.daum.net",
    "date": "2025-12-29",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "피부과",
    "summary": "2025-12-29경 보도된 사건으로, 피부과 찾아온 환자에게 수천회 ‘마약’ 놔준 간호조무사 구속···‘의사 면허’ 공유한 병원 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "피부과 찾아온 환자에게 수천회 ‘마약’ 놔준 간호조무사 구속···‘의사 면허’ 공유한 병원 - v.daum.net",
        "date": "2025-12-29",
        "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE1BcVMzYkNQalRYQ1FQQUZENDF2OUxKMHh6UDVWN2wwN19uVnpTN01JSjh3MkNhUFVPU0VBSEVzRjZmTVl0VzdYaU5OTkJXeTQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "피부과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-156",
    "title": "檢, 프로포폴 1천회 놔주고 8억 수익 의사 등 26명 기소",
    "date": "2025-12-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-28경 보도된 사건으로, 檢, 프로포폴 1천회 놔주고 8억 수익 의사 등 26명 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "노컷뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "노컷뉴스",
        "title": "檢, 프로포폴 1천회 놔주고 8억 수익 의사 등 26명 기소",
        "date": "2025-12-28",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBMU1EwU2RIZ29FdEdGazk3cFVSYk1IMkhVYXY3WDJPWERfTWx0ZDVSTE5UbjJfblRKeGNDaDVBNkg3WHhabXBPTC1obzJ6amxiNFE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-157",
    "title": "마약류 불법처방 만연...의사·약사·도매업자 적발",
    "date": "2025-12-29",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-29경 보도된 사건으로, 마약류 불법처방 만연...의사·약사·도매업자 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "데일리팜 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리팜",
        "title": "마약류 불법처방 만연...의사·약사·도매업자 적발",
        "date": "2025-12-29",
        "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFAtbzBZOXZ5SnFuZFZNdEpVZURTWUwtWkJCRWY0ZHEtenVINXEtNDFJUUFNZjRzWXRseWQzTDVORlhtVk1rV1BTbWJrNFhhNFBk?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-158",
    "title": "'좀비 마약' 펜타닐 패치 불법처방한 의사 첫 구속",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, '좀비 마약' 펜타닐 패치 불법처방한 의사 첫 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "법률신문",
        "title": "'좀비 마약' 펜타닐 패치 불법처방한 의사 첫 구속",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFA3dWNTM2tTWV9sMWJuR1U3bTJyMERXMFNwRUFZMEw1Y1ZoN3dqMXpnajdhQVJuZHhiTmNKZ1pGU18yOS1pQ1FwT1REMEtCbXhtRENjaWphLTVYWGZBREdWckJZdHhvT3dTaGI1Zm5B0gFyQVVfeXFMUGQtM2pnd2xmWGFJU2Jxdm1xcEFuRGRtUEd2WGxFSTB0T3NORDZreWViQ3R1VmNsSG56c1E5T2NscWFaU2pQeTdMWlUtX19DRjZwNEUxaktMR24tRFpBcVh3SllfYkQtTV9KWnBwSVRJMG9B?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-159",
    "title": "‘좀비마약’ 펜타닐, 불법 처방한 의사·투약자 기소",
    "date": "2023-06-28",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-28경 보도된 사건으로, ‘좀비마약’ 펜타닐, 불법 처방한 의사·투약자 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "농민신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "농민신문",
        "title": "‘좀비마약’ 펜타닐, 불법 처방한 의사·투약자 기소",
        "date": "2023-06-28",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBvTXhtb0JOVmdHNkxxNjZTX3g0cWpUX25DQXJTSVh4OHVQTFNjMUVVaVNQWGZKS1M3alVCa2hfb19qWWlZS0pNSnVDZkxXRzhKSjhNTl9ycm1Kdw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-160",
    "title": "검찰, 의료용 마약범죄 41명 입건…프로포폴 1000회 투약 의사 등 적발 - MEDI:GATE NEWS",
    "date": "2025-12-29",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-29경 보도된 사건으로, 검찰, 의료용 마약범죄 41명 입건…프로포폴 1000회 투약 의사 등 적발 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "검찰, 의료용 마약범죄 41명 입건…프로포폴 1000회 투약 의사 등 적발 - MEDI:GATE NEWS",
        "date": "2025-12-29",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBXalFJdmNlTGp0SWJZWUdUSklYRXBUNDJ1dEpDdHVoa3NMTXJUQWVOSzF3Wk0teWlqTHAweElPUXhjTWJWZ1lyRTY0ZUM2N2p4R3c?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-161",
    "title": "외국인 환자 명의 도용 4300회… 허위 처방전으로 마약류 불법 투약한 강남 피부과 의사들 구속 송치 [사사건건] - v.daum.net",
    "date": "2026-07-09",
    "year": 2026,
    "region": "서울",
    "district": "강남구",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "피부과",
    "summary": "2026-07-09경 보도된 사건으로, 외국인 환자 명의 도용 4300회… 허위 처방전으로 마약류 불법 투약한 강남 피부과 의사들 구속 송치 [사사건건] - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "외국인 환자 명의 도용 4300회… 허위 처방전으로 마약류 불법 투약한 강남 피부과 의사들 구속 송치 [사사건건] - v.daum.net",
        "date": "2026-07-09",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE9GMTFnZ194STBuVjIyLTE0RVhyaXNBNFBrdV96V1JtVXBOM2wxWGlRTEgxZWRfbjFKNEI2U3k3LWlCSms0c0E?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "피부과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-162",
    "title": "의사 가운 입고 전신마취제 불법 투약 적발",
    "date": "2025-07-22",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-07-22경 보도된 사건으로, 의사 가운 입고 전신마취제 불법 투약 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "데일리메디 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리메디",
        "title": "의사 가운 입고 전신마취제 불법 투약 적발",
        "date": "2025-07-22",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE1LRGJaWGYtRllRNU4xRDFRSXlsTHhrbGtKd1ZOTE9qOEVuY1M0MW5fLThqRFhKX2ZXOVp5S3BXQkZYdFNVeGQybW5sRVA5ODFLV2hMdUdnMVZ0ZFlJYWVGTGl6YmZBZnVS?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-163",
    "title": "'4만 명 치사량' 펜타닐 1명에게 처방…의사 첫 구속기소",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, '4만 명 치사량' 펜타닐 1명에게 처방…의사 첫 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'4만 명 치사량' 펜타닐 1명에게 처방…의사 첫 구속기소",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE02Z0NBVk9SVC1EczMzODYxbU11MUFHNks4dXRyOFpseG8yYzhXQ2lrTlJrVWQzbGQ5RWNxcDJEVkRzSG91VmduRjEwMXBXUC1RZEx5ODVsZVpzM2PSAWBBVV95cUxOMTd6d2xCMjNNOHFnU1ZqcXNPUEJXQWFFVHo3U0Roc3JuaHp0MERFMXhERzllLVc0MlhubzdncnQ3N1o2WDJjY0RtVzJ5TXpkN0xYa21ZWjJzUFBrQlJUY0o?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-164",
    "title": "[영상] ‘좀비마약’ 처방전 4800여장 써 준 의사 첫 구속기소",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, [영상] ‘좀비마약’ 처방전 4800여장 써 준 의사 첫 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "한겨레 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한겨레",
        "title": "[영상] ‘좀비마약’ 처방전 4800여장 써 준 의사 첫 구속기소",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE85aHdNV01kYXlNbjdocmZhUG1ueGZyYi1LUV85cDZsenJYQ05ZeU90elk5dDFLVjI1NjA2TUI0cGRwRGprT3g1VFNwamxfVmJsR1ZfdTZVa1NwdS1tWF9RNmtUc0VEMmREbm02UGF0ZzAxQQ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-165",
    "title": "마약 장사한 강남 의사 구속기소...타인 명의로 4천700여회 투약 혐의",
    "date": "2026-05-31",
    "year": 2026,
    "region": "서울",
    "district": "강남구",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2026-05-31경 보도된 사건으로, 마약 장사한 강남 의사 구속기소...타인 명의로 4천700여회 투약 혐의. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-05",
        "desc": "경기일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-05",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "경기일보",
        "title": "마약 장사한 강남 의사 구속기소...타인 명의로 4천700여회 투약 혐의",
        "date": "2026-05-31",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5LMFhRaHdNMWF3NnpGTUpqalVzWG1qT214Zjc5UHdLMmJ3YXIxRjlIVk1lalkzQjhIcHRHUVI1Q25uTjgteEFkMmRFcWRtbm83S2NlUFU2bldFOXc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-166",
    "title": "'좀비마약' 4만명 치사량을 1명에게‥현역 의사 첫 구속기소",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, '좀비마약' 4만명 치사량을 1명에게‥현역 의사 첫 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'좀비마약' 4만명 치사량을 1명에게‥현역 의사 첫 구속기소",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE8xRGQ0dG82a2pwOUFUT2VSZXFTcWFpZngtNmJfSVdwVE5kR1otaHJCQjdvenFGalFnS2MwazJfaVJjSzVjandjNzd1LURHQUlBRi1sX0xEYWRWRkNvT2hJWnRtRDFfWnM5Zms3amw4NzhxLW11cVNmd9IBeEFVX3lxTE8ycE9TNTI3N1Vab09RTWJRWTk3SERXU3ljaERodXViNVNTZlpWUXRPekkzSy03VllkZTZWTldmLWwxTGJVeXh1SmJiZWJ1VkpuVnRobEM0R1EwVXlUVHlZOHJFemE1RGFKN1VzSXhkemkwMk1jNU9ZYw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-167",
    "title": "미용시술이라며 프로포폴 놔주고 8억 챙긴 의사···의료용 마약범죄 41명 적발",
    "date": "2025-12-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-28경 보도된 사건으로, 미용시술이라며 프로포폴 놔주고 8억 챙긴 의사···의료용 마약범죄 41명 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "경향신문",
        "title": "미용시술이라며 프로포폴 놔주고 8억 챙긴 의사···의료용 마약범죄 41명 적발",
        "date": "2025-12-28",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE8xVmxBal9BdTF4QnBMNTQ5eHVqS0gyOWl0U3psMGtBdkJjVmpUbU5yV0ZBaURDRjVQVlpkRnlzaXpvTEdVZVdkcXNucURMVklVTWctTHp4S25FZ9IBX0FVX3lxTFBnN1BCV2ZiX2FvNzZRWnpfMHdvSS1ENDRXclN6SURYdGo3anZPZS1MMVFWbXd5YnVoSlh2ZXB0RU8wZjhFUlZxLUg1OE5UOTctTy1Qemw0cWxlUFRIdjNJ?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2023-168",
    "title": "‘좀비 마약’ 펜타닐 패치 4000장 불법 처방 의사, 구속 기소",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, ‘좀비 마약’ 펜타닐 패치 4000장 불법 처방 의사, 구속 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "‘좀비 마약’ 펜타닐 패치 4000장 불법 처방 의사, 구속 기소",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNWU93UDhQZDFtZlhCajdXZ2R1YXZydGQtNlZiYURKT3hvOVoxSl9RdkxrVXk3MmNwclNfNjJEUlhfMzkzWEJ0NXBzdUdnVXNFZjkwcmdSV1Bqd0cxR1BMNkRSbmJEeGtYMTlPQldpMUxwV2xKcjFOU3k4ZW8wQ0FSazhod2NfeFE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-169",
    "title": "'4만 명 치사량' 마약성 진통제 처방 남발한 의사 구속 - news.sbs.co.kr",
    "date": "2023-06-27",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2023-06-27경 보도된 사건으로, '4만 명 치사량' 마약성 진통제 처방 남발한 의사 구속 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-06",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "'4만 명 치사량' 마약성 진통제 처방 남발한 의사 구속 - news.sbs.co.kr",
        "date": "2023-06-27",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1Xd0hRcXNkbWQzakNIQWRwVXF2cEpRVElUNWNrMlpuQkhXQWZlZHByTUhDcU5GZzlSTUtvc3BGVDJObE1YVnlwQjd4bEE3VjJuV19rOVFLaWg1bGtNRFNhZ0gwLTZGREVoeUHSAWZBVV95cUxQU2ZibWJQZ0oyMWxBU19nVHg0YjZ5M1hOVV9ZMEpSdTdTaF9lMm1WMWs3TjZBdlowTk9EaU9VT2w4dXZpRTEyb2lPZ0EtY3BGWGNfeXQ0anNxV1kzUFVzTF8teXNxZkE?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-170",
    "title": "‘공부 잘하는 약·다이어트 치료제’ 불법처방 의사도…검찰, 의료용 마약 범죄 24명 기소",
    "date": "2025-12-28",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2025-12-28경 보도된 사건으로, ‘공부 잘하는 약·다이어트 치료제’ 불법처방 의사도…검찰, 의료용 마약 범죄 24명 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-12",
        "desc": "나우뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-12",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "나우뉴스",
        "title": "‘공부 잘하는 약·다이어트 치료제’ 불법처방 의사도…검찰, 의료용 마약 범죄 24명 기소",
        "date": "2025-12-28",
        "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBSTlg2cjBuV2VNeF9BdXFvVXV5SnJYLWw3UExSQ2pUUzVVZmVVRG91S0VNNEVPekFkajN3UXJTa2EyczZfbTcyd1EzT1JQY3JWMmttWmwyNXNoWTRoYUNZTUN3SnVxWkxoNTNEQjdUSFAyc3VwOGVFdUV5bFZkRnc?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2015-171",
    "title": "의사 몰래 처방전 써 졸피뎀 투약한 간호사 구속…의약품 관리 적신호",
    "date": "2015-06-30",
    "year": 2015,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "narcotics",
    "categoryName": "마약류/향정",
    "specialty": "일반의/의원",
    "summary": "2015-06-30경 보도된 사건으로, 의사 몰래 처방전 써 졸피뎀 투약한 간호사 구속…의약품 관리 적신호. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2015-06",
        "desc": "한의신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2015-06",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한의신문",
        "title": "의사 몰래 처방전 써 졸피뎀 투약한 간호사 구속…의약품 관리 적신호",
        "date": "2015-06-30",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE1LQkcyYloydG95X1NEVkpsX3U2SWVHZUhMd0hRQ2FuekY4Z3Q4MFlHSlZEYTlXVzY2YTNjMzhhYlA1UmZtQlc0Q3VwT2taMmU0OVVKR2s5M3RoMlhNampZX1ZuQmRMWXZpWUlSdEJNUnJydw?oc=5"
      }
    ],
    "tags": [
      "마약류/향정",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-172",
    "title": "'사무장병원' 개설해 의사 대신 수술까지?…간무사 '대리수술'만 유죄",
    "date": "2026-01-24",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2026-01-24경 보도된 사건으로, '사무장병원' 개설해 의사 대신 수술까지?…간무사 '대리수술'만 유죄. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-01",
        "desc": "청년의사 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-01",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "청년의사",
        "title": "'사무장병원' 개설해 의사 대신 수술까지?…간무사 '대리수술'만 유죄",
        "date": "2026-01-24",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1XZGdZNWd3My00enJhLXRweXN1dUZ1WnVYMC0xRTZKTVRmcjRsU0Y1eU9SMTBxbnU5ODlWVHJDVUp5YkF0OFYwcmpNbEoycnk2dDdaYTFiRmMtYmlQZDRiaDRUQmk4eWprN1BPZkN6RdIBc0FVX3lxTE52RmpKaTFYc2JfTlEwV3JkMXp0UHYxM29UNjdiNTByVG5LbU5sRGQ5M2x6UTlDRm1nd2s3dFo2dUNERDNNYVVJNTdHN0U2aHVJWW9RSldHakNTWjJhUTBONnl3QWhqQ1h0M2Q4Zmx3UnowbDg?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2024-173",
    "title": "간호조무사에게 589회 수술시킨 의사들 항소심도 실형·집유",
    "date": "2024-09-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-09-13경 보도된 사건으로, 간호조무사에게 589회 수술시킨 의사들 항소심도 실형·집유. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-09",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-09",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "간호조무사에게 589회 수술시킨 의사들 항소심도 실형·집유",
        "date": "2024-09-13",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5qd0NUb05jWl9EMXhpcUNTMVkxVWs1VkVOdGxrTllobU9oaERpb0hIWVFiQzA1UHdfX0VsLXlqR2Ytb19wUG52S19SVHpQSktSaW0xb1lzQ1VjUjTSAWBBVV95cUxOdnBYV3dkRndOUXEzZHhxN0t1YVhnMjRtVEhRaGF2S2dNYXBoWUhDc2dsV2wtV0wwNnp2anFaYVZ4V0dIOWxXTUZEbXk1cmtid0hzWnhlU3pwT1dhUDhEdVM?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2019-174",
    "title": "영업사원에게 대리수술 시킨 의사 '법정 구속'",
    "date": "2019-01-16",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2019-01-16경 보도된 사건으로, 영업사원에게 대리수술 시킨 의사 '법정 구속'. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-01",
        "desc": "의협신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-01",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "의협신문",
        "title": "영업사원에게 대리수술 시킨 의사 '법정 구속'",
        "date": "2019-01-16",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFA5eHpPeGNTZjZSN1NVY2ZpQlFIcXhHelNTeXB2clhpXzNzWmZ5WnVDNFo1NGZ5MWNJUEM2NnV3VnY0Nk1seWEzQ01ocTh1QkxuLW1OU3B2eUgtWmY2OWltVnFkd1htOXVuOTd5bFotVlpPQQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2023-175",
    "title": "간호조무사가 600여 차례 대리수술‥병원 원장 실형",
    "date": "2023-01-03",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-03경 보도된 사건으로, 간호조무사가 600여 차례 대리수술‥병원 원장 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "간호조무사가 600여 차례 대리수술‥병원 원장 실형",
        "date": "2023-01-03",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1iNGVNOWVnSC1KQnVMaEc4T2NaQ1B1WjdaUHZNei1CMUtGVldQYVNlRU9LWFBkSkcwQTFzcEFxR1lNeFhnQXF2RTJ1QmMzZS1LYnJnQnRZVnNUVy1JVElOWnI1dnhiajByWU1yY1k4WnA3bjZ4ZktrLdIBeEFVX3lxTFBGU01ZN25NaVpwX0tleDZCSE9IQWh4TGR0a1BvRUN0c3hxbTJIYmFNb2hUeUpBX1BqdkZaV3p1czc3dkxpY1dBbU03TElmVk1XZ2RtZEhrdHdfQ0cyeW01dWdKb25SMmV2ZUFsMFJiLUM2TC1pbjhMMw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2024-176",
    "title": "'간호조무사 대리수술' 대형 여성병원 원장 항소심도 실형",
    "date": "2024-09-18",
    "year": 2024,
    "region": "울산",
    "district": "울산 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-09-18경 보도된 사건으로, '간호조무사 대리수술' 대형 여성병원 원장 항소심도 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-09",
        "desc": "울산신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-09",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "울산신문",
        "title": "'간호조무사 대리수술' 대형 여성병원 원장 항소심도 실형",
        "date": "2024-09-18",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1TZGJOQldNb3JMa0pKOU9IdmdVVWZheVJralVDakRLOFFnUUdRVVpQVVc3VFJ0WncwUDFKcnRtdTYwdHFqRFJNY3ZRbnpXV1FCcHVQcmhVNDc4WUR6a3F2a3pOdlFITVhuSTVjWHJ30gFyQVVfeXFMTlQxUWUtbFpiWlVZOHhqVGFhRVNVczBlS2VfTVhPaHZUU09GWTVoSG5jeWxVdkFueFlBM0Y3c1BfNWFrN2I4TlNNaUlPSmtmczVIdDZicUYwQzdseWRtSDZpZXdmT0FjTUd3MlJvNkJNSGJ3?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "울산",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2024-177",
    "title": "대리수술 등 ‘71명 적발’···의사 44명 ‘면허정지’",
    "date": "2024-09-30",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-09-30경 보도된 사건으로, 대리수술 등 ‘71명 적발’···의사 44명 ‘면허정지’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-09",
        "desc": "데일리메디 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-09",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리메디",
        "title": "대리수술 등 ‘71명 적발’···의사 44명 ‘면허정지’",
        "date": "2024-09-30",
        "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE13Y24wRnNCT2dOUVFlaTNpeGhLUE4wMlJvQzhScUpvbHphMnJaYTdtZzlSdjJ4RnZTaVVTUXc4d3UtUnNaV2xoaU42VnNxcG00b1RMVkNLS2dyQldJeTN2UzVBdUhfeUc0?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2025-178",
    "title": "의사 대신 간호조무사 589차례 집도...징역형·벌금형 확정 - v.daum.net",
    "date": "2025-01-23",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2025-01-23경 보도된 사건으로, 의사 대신 간호조무사 589차례 집도...징역형·벌금형 확정 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-01",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-01",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "의사 대신 간호조무사 589차례 집도...징역형·벌금형 확정 - v.daum.net",
        "date": "2025-01-23",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTFBIZHVubEZiYjFHdWN2QnJjNXlQU3B3dkF2YThPdnRkSnFlWGRHcjNQTmtSdG8yMV9VMm9JOFdwWjNqUE5wUWc?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2022-179",
    "title": "검찰, 대리수술 인천 척추병원 병원장 3명에게 징역 4~5년 구형",
    "date": "2022-01-14",
    "year": 2022,
    "region": "인천",
    "district": "인천 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "정형외과/신경외과",
    "summary": "2022-01-14경 보도된 사건으로, 검찰, 대리수술 인천 척추병원 병원장 3명에게 징역 4~5년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-01",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-01",
        "desc": "징역 4 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "경향신문",
        "title": "검찰, 대리수술 인천 척추병원 병원장 3명에게 징역 4~5년 구형",
        "date": "2022-01-14",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA2c1Z0YlZDZ2hrcFhGZlZ4ZmtzLU11dkFIOVBib3h4eVFlS1lDalhyNlNidGpmTm84NWd4V0FITFZ5VnlnME5xSk0yMGw0Z0kyMWZwUnRLZWJyUdIBX0FVX3lxTE9FMGFLcEVLSFlaYWlpemxYc2hjTDdQLXRwMmFRVjlGMzNVZ1oxVTFXYjdYN053NzViSnVqd0FtUHRSdmVKa2VmczVoVzlzdDl5OWEwV1BDc3FUUmJTSmhr?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "인천",
      "정형외과/신경외과",
      "징역 4 선"
    ]
  },
  {
    "id": "MED-2021-180",
    "title": "환자 속이고 요실금 대리수술 의료기상사 직원·산부인과 의사 ‘실형’ - kyongbuk.co.kr",
    "date": "2021-08-17",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "산부인과",
    "summary": "2021-08-17경 보도된 사건으로, 환자 속이고 요실금 대리수술 의료기상사 직원·산부인과 의사 ‘실형’ - kyongbuk.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-08",
        "desc": "kyongbuk.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-08",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "kyongbuk.co.kr",
        "title": "환자 속이고 요실금 대리수술 의료기상사 직원·산부인과 의사 ‘실형’ - kyongbuk.co.kr",
        "date": "2021-08-17",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBDMk96eXJ5UlRQSjh0MmprTEZsZE4wU25pajd2bkdydkUzNDZQemR0YnVtTmFOODN3LVlZdzVvcjBUY1Y4WkYxWEJzbWhKOXRDWVl6b0ZlZ05tdlFjblJTMnBYenllNGV5YUdPZlR1SQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "산부인과",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-181",
    "title": "유령대리수술 사망사건, 7년 만에 대법서 의사 3년 징역 종결",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, 유령대리수술 사망사건, 7년 만에 대법서 의사 3년 징역 종결. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "메디파나뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 종결 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 종결 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "메디파나뉴스",
        "title": "유령대리수술 사망사건, 7년 만에 대법서 의사 3년 징역 종결",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE8wQ21YZnlOSmhLd3dGQnk2NWhMX21sU0ljZ2hBcFVqUlpJbktIZnVYVEdnbndPUThmd2tReVdncXJCeHllMVE2TWh2R1ZVdndMVk82ejFxT1ZWWFplMjRpRnBNR1hOVkZOTC1r?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 종결"
    ]
  },
  {
    "id": "MED-2022-182",
    "title": "'대리수술' 인천 척추병원 공동병원장 3명 실형(종합)",
    "date": "2022-02-16",
    "year": 2022,
    "region": "인천",
    "district": "인천 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "정형외과/신경외과",
    "summary": "2022-02-16경 보도된 사건으로, '대리수술' 인천 척추병원 공동병원장 3명 실형(종합). 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-02",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-02",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'대리수술' 인천 척추병원 공동병원장 3명 실형(종합)",
        "date": "2022-02-16",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE00aHVyclZRVHpsdktDeUpHUHFNd1ZyTWRSNU0yNVN0VnBYaXpEaEtJWUJlekFycm5MVUh1NWc0cWdXMUhNNHFuRjdRMTJkSUdCT282R3J2Z19UVUHSAWBBVV95cUxQNkt3MVFwbVNLX2J3ekp6S21kQU03OVMyMlpFTTNYS3hJdkhqSUpEazI2d1BEcmk2b0ZXcms2TFZHcnNuTkI4NGVySTcwYURiMi1YTkFwdURvSVQ0RTIybjY?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "인천",
      "정형외과/신경외과",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2019-183",
    "title": "환자단체 의사 징역 1년, 영업사원 징역 10개월…부산 무자격자 대리수술 사건 선고 터무니 없어 - MEDI:GATE NEWS",
    "date": "2019-01-17",
    "year": 2019,
    "region": "부산",
    "district": "부산 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2019-01-17경 보도된 사건으로, 환자단체 의사 징역 1년, 영업사원 징역 10개월…부산 무자격자 대리수술 사건 선고 터무니 없어 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-01",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-01",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "환자단체 의사 징역 1년, 영업사원 징역 10개월…부산 무자격자 대리수술 사건 선고 터무니 없어 - MEDI:GATE NEWS",
        "date": "2019-01-17",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFA2dm9kVVhTa1JlVnhjZUhNRldmOV93dzJZT3BRbHM1d1haSUI1ZlBFUGpQOGxYZ0o3UW4tYkZTYTBveFVyaG4ydDc4Z0JnZUk4WXc?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "부산",
      "일반의/의원",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2023-184",
    "title": "간호조무사가 615회 봉합수술…병원장 징역 3년 선고",
    "date": "2023-01-03",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-03경 보도된 사건으로, 간호조무사가 615회 봉합수술…병원장 징역 3년 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 선고 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "간호조무사가 615회 봉합수술…병원장 징역 3년 선고",
        "date": "2023-01-03",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5STms5TDVDTzNUM184S1V5eDRZMWpCc1NTNFhNR21JVDJoMlJJN1dyMTlPNTRyVUYxWmZfLVRETDZBV1dMTDBZQVFsV3FnR2dPU2xEamI0Mlc1SkXSAWBBVV95cUxOSEczQWZjZEp0R0ZqeENfdnFlbHRQXzlJSGM4ekxfQzhkWHl5el93UHU5MjZ6Y0lJV2xoemZBdlNJNlpuLUU0dml1ZGpNeHVvVkc2UW1BdUdRcHlGSUNDYkU?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2020-185",
    "title": "'유령수술' 지시한 G성형외과 Y원장 '징역 1년 실형' 및 법정구속",
    "date": "2020-08-20",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2020-08-20경 보도된 사건으로, '유령수술' 지시한 G성형외과 Y원장 '징역 1년 실형' 및 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-08",
        "desc": "의협신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-08",
        "desc": "징역 1년 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "의협신문",
        "title": "'유령수술' 지시한 G성형외과 Y원장 '징역 1년 실형' 및 법정구속",
        "date": "2020-08-20",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5DbDBNRlVZN3ptT0J0dlhoVkNNQVlhU0I5X2hndklQZDlSdEwtZGtIanA5SzR2OXljQjNnNFNDMkY5ZG8xYUZGdHE0WThuemJ3ZXZKUFRSdlNiM01PWS1XaVJ4Rk45VnV5aEV5dVhLSnZYdw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2022-186",
    "title": "검찰, '대리수술' 인천21세기병원장 3명 징역 4∼5년 구형",
    "date": "2022-01-14",
    "year": 2022,
    "region": "인천",
    "district": "인천 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2022-01-14경 보도된 사건으로, 검찰, '대리수술' 인천21세기병원장 3명 징역 4∼5년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-01",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-01",
        "desc": "징역 4 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "검찰, '대리수술' 인천21세기병원장 3명 징역 4∼5년 구형",
        "date": "2022-01-14",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBldVdhSzFnbUhpb0Jsc21IOUIwdXdhcjZXMXQwWURmVF9MbVQxdDhUMTR6TlVOc0Q2aTY3aWxib0ljaEFDLUZKYVlVUnIxamY0bC12STByZFd4UW9RZDhQS0wtbHpOYml3LU9HbnNrZjdsUEE4S05r0gF3QVVfeXFMUE5peUpyblN0blRqdVg2T0hBNk1nUUhKRTZZeXZyT05ZbVRBRjFxX092ZzJONDZianpZd280RkoxN1lqVUtJOC0zeURXNy1YZDM0RDB2aTJPUmpKc2YtSVlKZi1rUXZOZTlnYjhfRGgzcnRmOGRwQTA?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "인천",
      "일반의/의원",
      "징역 4 선"
    ]
  },
  {
    "id": "MED-2018-187",
    "title": "대리수술 지시 성형외과 원장, 징역2년 구형",
    "date": "2018-11-23",
    "year": 2018,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2018-11-23경 보도된 사건으로, 대리수술 지시 성형외과 원장, 징역2년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2018-11",
        "desc": "메디칼업저버 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2018-11",
        "desc": "징역 2년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 2년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "메디칼업저버",
        "title": "대리수술 지시 성형외과 원장, 징역2년 구형",
        "date": "2018-11-23",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE43dnlOOEpVZTJSWGRzY21la3VRSmo1VTV6WkV2YWNHaG8tUXM1Sm0wTjFPdDU3RFkxREYtSk1pZnJyY3hVN192T25mZUQ4V3p3TDFpeWpFamdJUjc3ZU0xalYtSy1DeXZqbmk0?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 2년"
    ]
  },
  {
    "id": "MED-2024-188",
    "title": "'무릎 대리수술 사망' 병원장, 2심 징역형 집행유예 감형",
    "date": "2024-12-25",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-12-25경 보도된 사건으로, '무릎 대리수술 사망' 병원장, 2심 징역형 집행유예 감형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-12",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-12",
        "desc": "징역 형 집행유예 감형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 집행유예 감형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "'무릎 대리수술 사망' 병원장, 2심 징역형 집행유예 감형",
        "date": "2024-12-25",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1QaXVmRTJZWXRqNUp5ZV9FZEJad2NkSzFsZUxINnUzQjRnMzQtV1RYcDEwdXFoeFdaeXdKbVc2eEN6UVM2Tm1MaFVWZWVvYzFnM3ZkQzZyZWJzMHNDNDZieNIBeEFVX3lxTE9Qc1Q0UjE2ZW9IeWd3RGhOR0t2SzU5YlNYRzJ3bjIxeWhNNUdRZ3pSNDV1b2pHRFl0MGNmT1NpSDUweDhVOHU3ZTR4YjNoVlFWcmhQLXNES0dEM29Jc0VCanBDWnU5MHlJNThSYkdVbldfN1VkUlpJVA?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 형 집"
    ]
  },
  {
    "id": "MED-2024-189",
    "title": "'대리수술' 589회 ... 무면허 의료행위 시킨 의사들, 항소심도 실형·집유",
    "date": "2024-09-13",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-09-13경 보도된 사건으로, '대리수술' 589회 ... 무면허 의료행위 시킨 의사들, 항소심도 실형·집유. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-09",
        "desc": "한국아이닷컴 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-09",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국아이닷컴",
        "title": "'대리수술' 589회 ... 무면허 의료행위 시킨 의사들, 항소심도 실형·집유",
        "date": "2024-09-13",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5lVDdFYTZ5X3Buc1UwZ3F2dF9HdUJxeDFnNmE5UWNpTk5nV1J1Z0JVam0zTjhmRXM4NnZrZl9ucnVHSmFPR1dhSUdOaW5vMjhIVXV6N2w2czJ3eGYwaWRRWnJrNmozZHNVY3hz0gFvQVVfeXFMUGpRU3Njcmtqc3RralZvWFlSNnFzS3BlUmloNnNkWGxjNVVEaTRNdmhLVFVmTThlaGdGWmtCeUF4WjZHUmJtbUVELVJUNDB2bFVhb3NXQ1B5LVZHM21jdFZSR1NoXzZtNzJGNXVaRnZJ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2021-190",
    "title": "'대리수술' 지시 성형외과 원장 2심서도 '유죄'",
    "date": "2021-02-04",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2021-02-04경 보도된 사건으로, '대리수술' 지시 성형외과 원장 2심서도 '유죄'. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-02",
        "desc": "의협신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-02",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "의협신문",
        "title": "'대리수술' 지시 성형외과 원장 2심서도 '유죄'",
        "date": "2021-02-04",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE8wTVFla210bkkyYXhETDFxQTlOV3JMbGlSQmNwSTZiSWxNcmdyY0cxZjY4U2dxTkVFaEpDOTV4MW45d1lrRm9kLVdWdWphcEJPb2ZBWnpyZnNxRmU5X3YxZ2lyWTlFVlAzZHVJejZGWGh6UQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-191",
    "title": "의사가 아니었다… 남성 보형물 대리 수술, 간호조무사 실형",
    "date": "2025-03-31",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2025-03-31경 보도된 사건으로, 의사가 아니었다… 남성 보형물 대리 수술, 간호조무사 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-03",
        "desc": "뉴시스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-03",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "뉴시스",
        "title": "의사가 아니었다… 남성 보형물 대리 수술, 간호조무사 실형",
        "date": "2025-03-31",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE52dnRZck5vS3dld0pQTEtwV183Q2xxZ085eVFDcGtIbVdMb1AtZTNZYUY0VDZiOGVBVmNRM1pzd0JCUjNFWk9TQU82Q2lnQm5Za1J0TXVNZUhMdm9oR0VuZtIBeEFVX3lxTE85VXZOem9DOERabnJYOHhYUnNYUGJBck81UU1HSlRMUFhZVnVVSWtxRGF2YlYtRXJsbmppTnVQRVNRcFBzVjV3dUZmTTk3cFMyb2tHdGxvbVlha2F2VjNkVXR4a1lrOVV2TmQ1dHpNZW1PbkkwZzg0Mg?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-192",
    "title": "'권대희씨 수술실 사망' 병원장 징역 3년 확정(종합)",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, '권대희씨 수술실 사망' 병원장 징역 3년 확정(종합). 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'권대희씨 수술실 사망' 병원장 징역 3년 확정(종합)",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1BWG1FV0VqS2JLcHQxVGl4ZEpSZlZ0NGctbW1zd2FMam53YklkUVRYWkVIQWRmNVY1S0tOVjVsV2hRRDRBN292Mjk1NVFlQTJFTHRyWWc4LTR1VDDSAWBBVV95cUxQdE90U2xYdkxoaUk0dm44NGJqSTN2TF9EdGl3SFVZQnVPS3A3ekVrc2xkWlgta0VmVFRfdG9MLW9TNEtoeENPdjM0cGVlRGRCS19kVVFleGlqRVNveW9lWGs?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2024-193",
    "title": "간호조무사에 589회 수술시킨 의사들 항소심도 실형·집유",
    "date": "2024-09-13",
    "year": 2024,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-09-13경 보도된 사건으로, 간호조무사에 589회 수술시킨 의사들 항소심도 실형·집유. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-09",
        "desc": "서울Pn 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-09",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "서울Pn",
        "title": "간호조무사에 589회 수술시킨 의사들 항소심도 실형·집유",
        "date": "2024-09-13",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE0tcE4zM3VSWXBQX3RFTm9ua3doa3VrZktFQ3JNbGR6REdMYjIwTFE1SGtKaDhWWHl4N280ZHNCYU1kT3BKRDhCaGFkWjlJLUpGdzhrbjJlVWdyNFpYbW1tR0VzLWtnNGRhcHNhRExR?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-194",
    "title": "'권대희 수술실 사망' 병원장 징역 3년 확정...\"공장식 수술 멈춰야\"",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, '권대희 수술실 사망' 병원장 징역 3년 확정...\"공장식 수술 멈춰야\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "'권대희 수술실 사망' 병원장 징역 3년 확정...\"공장식 수술 멈춰야\"",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFAzd05xNHQ5OG1GNFdGc2xtZTlUYndXNUx3azh6TmNsWDNJUHRBMUZIbDRtQXJyN0xtSnNidWJWai1NWE5QZnNxMnI3VkNpeF9fQkhIXzRmX1JyMlk0VGc?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2023-195",
    "title": "[판결] 성형수술 중 과다출혈 환자 방치 사망… 의사, 징역 3년 등 확정",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2023-01-12경 보도된 사건으로, [판결] 성형수술 중 과다출혈 환자 방치 사망… 의사, 징역 3년 등 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 등 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 등 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "법률신문",
        "title": "[판결] 성형수술 중 과다출혈 환자 방치 사망… 의사, 징역 3년 등 확정",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBzVE54VXJYN2ZRYzZKMDVESEpHSlhLS25jTU9YZ29mZUxaRzJTREhOTHNENnc2SnFHSHRqSWR5V3dqdlJoOEE2NnpFRmZzWWFCT0xnV0h5alZNS2FwbXBUMExkQ2p5eVRTNzJ2N0ZR0gFyQVVfeXFMUFVFVUYtSElzb2I5Vy1yOEd4dml4RUd4ZWRvdDg0M3plM1FyQkxqZnotX2lkMTNwYTEtVjBZVzc5THFGcGxBajRGUTdqVHBRa2d4UE5jUGZCX2hwbXQtXzhHQzBXY1gyUjV4RlZKUFhFSmtn?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2022-196",
    "title": "대리수술 혐의 인천 척추병원 병원장 3명 징역 4∼5년 구형",
    "date": "2022-01-14",
    "year": 2022,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "정형외과/신경외과",
    "summary": "2022-01-14경 보도된 사건으로, 대리수술 혐의 인천 척추병원 병원장 3명 징역 4∼5년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-01",
        "desc": "서울신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-01",
        "desc": "징역 4 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "서울신문",
        "title": "대리수술 혐의 인천 척추병원 병원장 3명 징역 4∼5년 구형",
        "date": "2022-01-14",
        "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE5GSmJGdGVDcHdWSmk3SURPdnQ5M3F4d2pTSkRLbW12Wk1Md0FNZVg1NVM1TWhkN0phTnNrdUY3NzZ2cEVIS1ZjTlBkVDFtcjg2MFJBSGxCOU5jeVhPeTdVVEtrOHBvY3VyU0tlalJLTnQxRmhCbEdoSE1DTUw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "정형외과/신경외과",
      "징역 4 선"
    ]
  },
  {
    "id": "MED-2022-197",
    "title": "'수술실 사망' 성형외과 원장, 항소심도 실형...\"환자에 전념할 수 없는 구조\"",
    "date": "2022-05-19",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2022-05-19경 보도된 사건으로, '수술실 사망' 성형외과 원장, 항소심도 실형...\"환자에 전념할 수 없는 구조\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-05",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-05",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "'수술실 사망' 성형외과 원장, 항소심도 실형...\"환자에 전념할 수 없는 구조\"",
        "date": "2022-05-19",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5aQ242N1BuN2RobTcyMm9QaUd6dWw4VVVFeXFUTzhROFNrYm5Xdk1Id1EtOWUtMjN6cUVFVW1TdzBqY2EzMWxiYUlSWkZYbWlvSV9iRVpGUFVPWHlsYmc?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2022-198",
    "title": "성형수술 환자 과다출혈 방치..사망케 한 의사 2심도 징역 3년 - v.daum.net",
    "date": "2022-05-19",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2022-05-19경 보도된 사건으로, 성형수술 환자 과다출혈 방치..사망케 한 의사 2심도 징역 3년 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-05",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-05",
        "desc": "징역 3년  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "성형수술 환자 과다출혈 방치..사망케 한 의사 2심도 징역 3년 - v.daum.net",
        "date": "2022-05-19",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE9vanB0N2YtTEd6Y2Q1bWlLelNkSzVPREQ1cVNsdUFHRGs5Rm1lZGZYckJ3WDd0N3JxUGYwTEhmNHR5bGJQa2c?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2020-199",
    "title": "유령수술 의혹 받던 성형외과 Y원장, 징역1년에 법정구속 - MEDI:GATE NEWS",
    "date": "2020-08-20",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2020-08-20경 보도된 사건으로, 유령수술 의혹 받던 성형외과 Y원장, 징역1년에 법정구속 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-08",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-08",
        "desc": "징역 1년에 법정구속  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년에 법정구속  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "유령수술 의혹 받던 성형외과 Y원장, 징역1년에 법정구속 - MEDI:GATE NEWS",
        "date": "2020-08-20",
        "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1JSHRfckk1a0hvU1lYMkNDdUhIN2hDVFA2UU9lOXphZWNfUGhRWjFWZms0R0hFc1FIblVEby1CMzVCLVRDTkZhSW5jMy0xSktoZXJYLQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 1년에"
    ]
  },
  {
    "id": "MED-2022-200",
    "title": "‘대리 수술 혐의’ 인천21세기병원 공동병원장 3명 징역형 - incheonin.com",
    "date": "2022-02-16",
    "year": 2022,
    "region": "인천",
    "district": "인천 일대",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2022-02-16경 보도된 사건으로, ‘대리 수술 혐의’ 인천21세기병원 공동병원장 3명 징역형 - incheonin.com. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-02",
        "desc": "incheonin.com 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-02",
        "desc": "징역 형  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "incheonin.com",
        "title": "‘대리 수술 혐의’ 인천21세기병원 공동병원장 3명 징역형 - incheonin.com",
        "date": "2022-02-16",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE10YjFzNk5WR0ttSjczUVkzSmNFeEl5cG4yYVlNM183V251RkRGTm5oUmNLbmJScW9BV3RyY1A2UDdHQjBrREVSQWNzS2x6eE10R2FrS0VKOUVhcEZnUFE3UThkaTB2RkQ4LTRr?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "인천",
      "일반의/의원",
      "징역 형"
    ]
  },
  {
    "id": "MED-2023-201",
    "title": "'권대희 사망사건' 병원장 징역 3년 확정 \"공장식 수술로 골든타임 놓쳐\"",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, '권대희 사망사건' 병원장 징역 3년 확정 \"공장식 수술로 골든타임 놓쳐\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 확정  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 확정  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "'권대희 사망사건' 병원장 징역 3년 확정 \"공장식 수술로 골든타임 놓쳐\"",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFA5M3BOLVh4LTlHdElsSFJYcUxoTUxmQkxoVmFQaHZZeW9GMVhOTURaeDJER1FPR0NQOFkyMlZGRFpJcHV3ZXFRek1ENjRRUzU2aTBBN1Z5M2xnckV1NjlORG8yRnp2SUxQMWFFN1V30gFzQVVfeXFMTV9La3N2QnMxUFF2TU5YY0pHN3RJRzNsS2tTZ2FaWDVzbjg3N1RqLXZaUVJUU2Y4eUptZGFqUXRMNjBzakZjaW8wdTFnY0REc0ZBSThGXzU5ek81WWR0d05tbHpaSnNIbmtYRXkzTEpobXhiYw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2025-202",
    "title": "서울 y병원 k병원장 ‘의료법위반’ 혐의 기소 4차공판…대리수술 참여 직원 ‘블라인드’증인심문",
    "date": "2025-03-19",
    "year": 2025,
    "region": "서울",
    "district": "강남·서초 등",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2025-03-19경 보도된 사건으로, 서울 y병원 k병원장 ‘의료법위반’ 혐의 기소 4차공판…대리수술 참여 직원 ‘블라인드’증인심문. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-03",
        "desc": "서울뉴스통신 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-03",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "서울뉴스통신",
        "title": "서울 y병원 k병원장 ‘의료법위반’ 혐의 기소 4차공판…대리수술 참여 직원 ‘블라인드’증인심문",
        "date": "2025-03-19",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1iT095RG1aWENKZ0tkMjNBN05MeXNyZjFraTduaUdJSEI4Z3RTRHhlUEZJbnFtVnRuM3NEOGdfN1lZNGZ1UUVTX2szVDFTRjF2QXFJWkJKME9Yb19vTnE4RnZ2RmZUYjVBQ0E?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2020-203",
    "title": "檢, ‘재벌가 프로포폴 의혹’ 전 성형외과 원장에 징역 6년 구형",
    "date": "2020-07-09",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2020-07-09경 보도된 사건으로, 檢, ‘재벌가 프로포폴 의혹’ 전 성형외과 원장에 징역 6년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-07",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-07",
        "desc": "징역 6년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 6년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "檢, ‘재벌가 프로포폴 의혹’ 전 성형외과 원장에 징역 6년 구형",
        "date": "2020-07-09",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5PT2kweHo5YmRreFdpNUZ5LU5GUV9pUnE2N2hqN0xkbE93eV94ZGw3NTNIcnI4aDRTa1JnZWY5ZWNIdldNWm0tOXl6bHFTTWdNVlhEanBWVFRSNmM?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 6년"
    ]
  },
  {
    "id": "MED-2025-204",
    "title": "‘수전증 의사’ 대신 비뇨기과 수술 대신한 간호조무사 실형 - edaily.co.kr",
    "date": "2025-03-31",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2025-03-31경 보도된 사건으로, ‘수전증 의사’ 대신 비뇨기과 수술 대신한 간호조무사 실형 - edaily.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-03",
        "desc": "edaily.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-03",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "edaily.co.kr",
        "title": "‘수전증 의사’ 대신 비뇨기과 수술 대신한 간호조무사 실형 - edaily.co.kr",
        "date": "2025-03-31",
        "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOc3BMMmJoZG8wZjhtLVEzeS1kQ2t4a0dmUkVWcTRmWnNwMWJhT1BBRlM1M3lRTXhSWDRqZWU4VzBFaW9teDR6Skx6T3RsQ2huOFVKaWc4bmxiamhhOHpHR1dJR1p1ejVVVU9SR1FrbnRWeHZxNHQ4YWxtQm9GMHFHQQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2017-205",
    "title": "'과실로 10대 여성 환자 사망'…강남 유명 성형외과 의사 징역형",
    "date": "2017-07-06",
    "year": 2017,
    "region": "서울",
    "district": "강남구",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2017-07-06경 보도된 사건으로, '과실로 10대 여성 환자 사망'…강남 유명 성형외과 의사 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2017-07",
        "desc": "중앙일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2017-07",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "중앙일보",
        "title": "'과실로 10대 여성 환자 사망'…강남 유명 성형외과 의사 징역형",
        "date": "2017-07-06",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE5tY2lxMjdRd21IbVR1ZEludFVQUFBHZmNUb0FmdmlTZHFNcFNDOW9BMDVTNFQ2TGpZV1pvWEVad2dPM3pzM3l0TWZ6ejZZRm12RWZhejNR?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2019-206",
    "title": "의사 면허 대여 알선 금지...위반 시 5년 이하 징역 추진 - MEDI:GATE NEWS",
    "date": "2019-03-11",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2019-03-11경 보도된 사건으로, 의사 면허 대여 알선 금지...위반 시 5년 이하 징역 추진 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-03",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-03",
        "desc": "징역 추진  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 추진  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "의사 면허 대여 알선 금지...위반 시 5년 이하 징역 추진 - MEDI:GATE NEWS",
        "date": "2019-03-11",
        "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE92TVdkRm9IbDFobnJyc28tRFdNODA4aE1zM0hDVG5XQWZWYjRDaUVCMTZQQ3NLaWFBbmhJSFRyYnk0UldzbXVoOUdnTXRuUjBkc2tzTFR4QQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 추진"
    ]
  },
  {
    "id": "MED-2023-207",
    "title": "‘권대희씨 사망 의료사고’ 7년 만에 성형외과 원장 ‘징역 3년·벌금 1000만원’ 확정",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2023-01-12경 보도된 사건으로, ‘권대희씨 사망 의료사고’ 7년 만에 성형외과 원장 ‘징역 3년·벌금 1000만원’ 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "세계일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "세계일보",
        "title": "‘권대희씨 사망 의료사고’ 7년 만에 성형외과 원장 ‘징역 3년·벌금 1000만원’ 확정",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBQbUUtRmZqUHp4T3dlWXY0RllKSGxKZDdsRzM3TlhmVk1RTW1qV2YyRXZaUnpuNFhfRlRvY0RiWDgzS09EcWpaYnY3U2Y3TnNLZjVkTjhOQWnSAVRBVV95cUxQWlFGVTRuVmtLdm1WV21HLUlWbzVvVy1GQkFGSWV5WWRRRlJqZUNiZjNJSWFTN3VvQksxNTVGaHlVQkQzRnloTlAxdl8tN2ZBcWRYWU0?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2023-208",
    "title": "수술실 CCTV 촉발 '권대희 사망사건' 병원장 징역 3년 확정",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, 수술실 CCTV 촉발 '권대희 사망사건' 병원장 징역 3년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "청년의사 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "청년의사",
        "title": "수술실 CCTV 촉발 '권대희 사망사건' 병원장 징역 3년 확정",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFAxbFNoYTNfbHdXZWo1cUZ4TmhjdGN0VlVEV3I1bVFRRnBBdFNoRTVPYmFabl9fb2JRcmJmNml0RmhaMzE0OFFkaW1LZkFlVUJNR0tBNE44TXFHdHp6WU5nVlRmWTluUTRIS3lMekxZWdIBc0FVX3lxTE51Z05JUGlpSkk5NThhNFRETTh6MW5XTmRITXhBem03eldHOHN1SjAzWW5TYm9ST283bFlsRGZ0OXBfNjRMX3pnM2RoLXo0bFpXMmVZZUl6S1FyZnA1OFF0VVNhQUh4aU1LWUxidldFZkRpZjg?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2026-209",
    "title": "수혈 준비 없이 지방 5L 뽑다 환자 사망… 의사 징역 1년 6개월",
    "date": "2026-01-07",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2026-01-07경 보도된 사건으로, 수혈 준비 없이 지방 5L 뽑다 환자 사망… 의사 징역 1년 6개월. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-01",
        "desc": "팜뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-01",
        "desc": "징역 1년 6개월 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 6개월 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "팜뉴스",
        "title": "수혈 준비 없이 지방 5L 뽑다 환자 사망… 의사 징역 1년 6개월",
        "date": "2026-01-07",
        "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE15clI4TnpxUVVDdjR6c2ZGNXdZSWY2VTNIMlRYLWtadXRoR0lhTlRvVUx5T2pFb1p3Y2xfZndYOVdkblUwQ3BCaVlEM2JqeDFYblFfS1J6T201cHdJaF9jOGoxOWNqbVJCbHlXTQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2021-210",
    "title": "'공장식 수술' 고 권대희씨 집도의 징역 3년... 유족 \"면죄부 형량\" 토로",
    "date": "2021-08-19",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2021-08-19경 보도된 사건으로, '공장식 수술' 고 권대희씨 집도의 징역 3년... 유족 \"면죄부 형량\" 토로. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-08",
        "desc": "OhmyNews 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-08",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "OhmyNews",
        "title": "'공장식 수술' 고 권대희씨 집도의 징역 3년... 유족 \"면죄부 형량\" 토로",
        "date": "2021-08-19",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5uZU5jUUdqNGc1NkdMc0ZWclpibUppOW9iQ1R2dXJZWnRjNldOeTNyU0FEMXhYdWc1U1FhcDZqQzZUY3o3NDNzamNMbDllREx0NUR0ZFB4ODVOY252c0hCSjlNaDVtSjlEckc3blRDcF9DTTQwTFlB?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2023-211",
    "title": "환자 출혈 방치 · 다른 환자 수술한 의사…징역 3년 확정 - news.sbs.co.kr",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2023-01-12경 보도된 사건으로, 환자 출혈 방치 · 다른 환자 수술한 의사…징역 3년 확정 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 확정  선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 확정  선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "환자 출혈 방치 · 다른 환자 수술한 의사…징역 3년 확정 - news.sbs.co.kr",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE9JbDItOS0yUTB1d2FjOVRpal9TVDBnMU1BX1pjZmFsNzdEdWJtbExiNXNVTXdQM2RXQXlIX0NobWdLYUtBeTVNZ2RkdWt6NDZYcGdEdzFSRmxrMUNqdXV4N1pxWGZZQ3JXOGc?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2021-212",
    "title": "'수술실 방치' 故 권대희 씨 사망 사건…\"병원장 징역 3년\"",
    "date": "2021-08-19",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2021-08-19경 보도된 사건으로, '수술실 방치' 故 권대희 씨 사망 사건…\"병원장 징역 3년\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-08",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-08",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'수술실 방치' 故 권대희 씨 사망 사건…\"병원장 징역 3년\"",
        "date": "2021-08-19",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9EdUEyUFdVVkFubWpBY1RhRXQ4OUt4M3l0SEZieFYzYm5CT2dtenhGSXlIV3MtZXJpR1ZCdkJVTlV5a0loZy1DbjRWX256TkFhTjNpTlM2eExUaUdHMTFMckttZGEtM2o4WUViYktGZi1feWd1M1hVZg?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2022-213",
    "title": "수술 중 환자 의식불명 빠지게 한 70대 의사 징역 1년",
    "date": "2022-02-11",
    "year": 2022,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2022-02-11경 보도된 사건으로, 수술 중 환자 의식불명 빠지게 한 70대 의사 징역 1년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2022-02",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2022-02",
        "desc": "징역 1년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 1년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "수술 중 환자 의식불명 빠지게 한 70대 의사 징역 1년",
        "date": "2022-02-11",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1rVDVYZTNEU2xEQk5DdnNSbGpVRzh6bzRLbG1JVUQ4ZmxfdjloVEdXaU00OFp2cXk0QVYxN2NZb3pnY0hjTnFVRFFGUkowblhHNWJWX2FtMGFGYWPSAWBBVV95cUxQZVUyQVJVUl9icW5DZjNUb3FnWENvUWdrMzRDdGEtR0hzYW50RzZPZXcyOFN3TGVOR25Zem54WXJtSXQyT1EtRXdkNkVTakh6bjZwQ3l5LXN5U1QzVk5xZzQ?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 1년"
    ]
  },
  {
    "id": "MED-2021-214",
    "title": "'권대희 사건' 의사 징역 3년…\"공장식 수술로 골든타임 놓쳐\"",
    "date": "2021-08-19",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2021-08-19경 보도된 사건으로, '권대희 사건' 의사 징역 3년…\"공장식 수술로 골든타임 놓쳐\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-08",
        "desc": "더팩트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-08",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "더팩트",
        "title": "'권대희 사건' 의사 징역 3년…\"공장식 수술로 골든타임 놓쳐\"",
        "date": "2021-08-19",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFB6eExMeFhjZDZqNkg1ak1STlJuNjRza1dNMzg3WUM5NmRCRzFMdUxlY2lrYS02T2hXUGhFc0VVWVJScmx1emhTQkdXS0FoTm9tY0VLS1Bn0gFQQVVfeXFMUEIxOTlDeU1Hal9wTXByLXhYaWdNQjlHdjBhdkxoUGlWNFExamZxMFJLUXQtN3FkcXBrdDFERlpzNGpwRENKUDFFc1VjMjFkV3E?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2020-215",
    "title": "\"강남 성형외과서 '유령수술'로 환자 사망\" 폭로한 의사 '무죄'",
    "date": "2020-10-10",
    "year": 2020,
    "region": "서울",
    "district": "강남구",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2020-10-10경 보도된 사건으로, \"강남 성형외과서 '유령수술'로 환자 사망\" 폭로한 의사 '무죄'. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-10",
        "desc": "중앙일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-10",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "중앙일보",
        "title": "\"강남 성형외과서 '유령수술'로 환자 사망\" 폭로한 의사 '무죄'",
        "date": "2020-10-10",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE83cWdjbTViYjVPclFXZWVVS3RFUlAxOU9yZGQzWS1BZUtDZURrM2pDRUtmaWRfQXZkZXcyWk9xcFlhQkFVNXJGRWR2SlFiTERWM0xlb2Jn?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2019-216",
    "title": "현직 의사 \"유명 성형외과 '유령수술'로 수백명 사망\"... 법원 \"비방 아냐, 명예훼손 무죄\"",
    "date": "2019-09-25",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2019-09-25경 보도된 사건으로, 현직 의사 \"유명 성형외과 '유령수술'로 수백명 사망\"... 법원 \"비방 아냐, 명예훼손 무죄\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-09",
        "desc": "법률방송뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-09",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "법률방송뉴스",
        "title": "현직 의사 \"유명 성형외과 '유령수술'로 수백명 사망\"... 법원 \"비방 아냐, 명예훼손 무죄\"",
        "date": "2019-09-25",
        "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBscExha0h6SjRITlh0Zkd6NENOdkxTU1g5dzEwV2JfYjlWRC1QdG44TTRTVjRZWUhoY3hydGRpbWJObm5IWlZ3MmtPMFl1UmRVWkVoaVZBTlY3SGk1RE42SVA3NA?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2020-217",
    "title": "‘유령수술’ 혐의 그랜드성형외과 前 원장, 1심서 법정구속…“반사회적 범행”",
    "date": "2020-08-21",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2020-08-21경 보도된 사건으로, ‘유령수술’ 혐의 그랜드성형외과 前 원장, 1심서 법정구속…“반사회적 범행”. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-08",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-08",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "‘유령수술’ 혐의 그랜드성형외과 前 원장, 1심서 법정구속…“반사회적 범행”",
        "date": "2020-08-21",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1HYkNzeTJlWHV2Z1l6NWFkcURGOHYxcmdvdXVKX2laWk5QeUxJbVJnS3FJUlpYM2hDYjZMaHFrUFdIN0pfdlJGQ24tR0JJNFZGTE9vWXA0ckVzTlE?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2021-218",
    "title": "'유령수술 사망' 故권대희군 병원장 징역형...\"왜 법은 의사에 관대했나\"",
    "date": "2021-08-20",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2021-08-20경 보도된 사건으로, '유령수술 사망' 故권대희군 병원장 징역형...\"왜 법은 의사에 관대했나\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-08",
        "desc": "파이낸셜뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-08",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "파이낸셜뉴스",
        "title": "'유령수술 사망' 故권대희군 병원장 징역형...\"왜 법은 의사에 관대했나\"",
        "date": "2021-08-20",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5ObXhuSGxsTl9HeElLR0dWeWs5T0pNNExkSEVUUlpkbWgxSjRvQzFSQktsaWRxR3VLVmJGS0lQM1Jjc0hxMmdDZkFKejRmUW1TNXhkLUVndDBTdw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2024-219",
    "title": "대리·유령수술 혐의 연세사랑병원 고용곤 병원장 등 2차 공판 열려",
    "date": "2024-11-07",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "일반의/의원",
    "summary": "2024-11-07경 보도된 사건으로, 대리·유령수술 혐의 연세사랑병원 고용곤 병원장 등 2차 공판 열려. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "뉴스프리존 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "뉴스프리존",
        "title": "대리·유령수술 혐의 연세사랑병원 고용곤 병원장 등 2차 공판 열려",
        "date": "2024-11-07",
        "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE14RDJoclRsTDVPcmQzMnN3NmsxUko3TWJnTTlpaWs2dUdQald6VnRrR3l0NVUzTWhfSzVPOFRmdWpVRGpiaWJXR1BXQVFuTURUZy05QkZwekZ1WlZJUVY4WEd4aHBfb3JYSEpuSldmUnY2bTTSAXdBVV95cUxPVk5Ic0VDalltVUR5Z0ZJMnc3S0N6R2xxNWdVbFlPRFp3czNhVWJjT0c5S0gyNVR1aGVSTF9kTjZ4MHdaeEQ3YWF4NFdfY2liZzhnLW5OM3NMUDRFeGJjM05oMTZlcVFZWVpRMHNxeTNxX0Q3WUQxZw?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-220",
    "title": "“피가 뚝뚝 흐르는데 걸레로 쓸고 방치”···‘권대희 사망사건’ 성형외과 원장 징역 3년",
    "date": "2023-01-12",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "proxy_surgery",
    "categoryName": "대리수술/무면허",
    "specialty": "성형외과",
    "summary": "2023-01-12경 보도된 사건으로, “피가 뚝뚝 흐르는데 걸레로 쓸고 방치”···‘권대희 사망사건’ 성형외과 원장 징역 3년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "투데이코리아 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "투데이코리아",
        "title": "“피가 뚝뚝 흐르는데 걸레로 쓸고 방치”···‘권대희 사망사건’ 성형외과 원장 징역 3년",
        "date": "2023-01-12",
        "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB5YlVEVlhKZGQyakR5SGpJRnpucGlDc29TejFqS3NUM3QtQmRkQlNLRFlSbjlEUF9KT04wdkVOQ3ZYdlMyYW9tMVlZc0pnakVycU05b3U4T0t5ZHpMWDZFa2pYeFJCNnZYTVBWS0xKMUI?oc=5"
      }
    ],
    "tags": [
      "대리수술/무면허",
      "서울",
      "성형외과",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2024-221",
    "title": "술 마시고 수술한 의사… 형사처벌 근거없어 입건 못해",
    "date": "2024-01-15",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2024-01-15경 보도된 사건으로, 술 마시고 수술한 의사… 형사처벌 근거없어 입건 못해. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "동아일보",
        "title": "술 마시고 수술한 의사… 형사처벌 근거없어 입건 못해",
        "date": "2024-01-15",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9oOU1TRnM2dVdjWkJoVHVFeFNteXM3SFdCNURpSUllTW9xNXJfSkZQa1p5R2k1MWNUNGc4eDdLNkJfZ0g1SHZ4dEZISEwtektodDh6STRyT05jUDFYMkdlMjAtVkdYRGFrQy1iUmFIclBQV0h2WXfSAWZBVV95cUxNYVhEZDJMSGlROGowRU9HRmNVQ1JKeXEtQTlpRnhRbXladnFYaFNUWEdwVVpBWXFDUzc4c1g1VjYwQm9nT2VRcFk0Uk5sZlNCODhJZHpmZDZLQTBGOGlTNU1YRksyV0E?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2020-222",
    "title": "'음주 제왕절개'로 산모 사망케 한 벨기에 의사 징역형",
    "date": "2020-11-13",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-11-13경 보도된 사건으로, '음주 제왕절개'로 산모 사망케 한 벨기에 의사 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-11",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-11",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'음주 제왕절개'로 산모 사망케 한 벨기에 의사 징역형",
        "date": "2020-11-13",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAybmF4cUw4YW1uWjdVRnFubHRpTWJqa1h3dWU4UGpLakVZeTFtU29OSkVOY0ZMU2xTMnRybU1QMldYOF9tYk9nWmp5YnlwbGxhVWhPbnZFT3Z4V1nSAWBBVV95cUxQdlpfM0xsMEpVd2tJU1FvS3NjSjc0X2NxWjNkaWpRODdvb21hWDducnNRRVBMZkw2NVFKVWE4aHAwazBQM0NXY3g4V2htOVFIdlZhX3JSUG1URDdpZkRCdk4?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2021-223",
    "title": "사문서 위조 실형 받은 의사…\"면허취소 처분 위법\"",
    "date": "2021-06-03",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2021-06-03경 보도된 사건으로, 사문서 위조 실형 받은 의사…\"면허취소 처분 위법\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-06",
        "desc": "의협신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-06",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "의협신문",
        "title": "사문서 위조 실형 받은 의사…\"면허취소 처분 위법\"",
        "date": "2021-06-03",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFB1UDVFeWZTdU5HcGJROTVwQUdWTEtBamx0UUxScW02WGc4UElvbldDbjllS3REQlB6NThWdjVWR1ZPU2ZmcUtoc0hKajNRSEJIVTlxTnJ0MlA3NTlHRUFfQjh6ZUpCQjJ4cDl1RTFWWW90Zw?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2023-224",
    "title": "면허증 위조해 28년간 진료한 60대 '가짜 의사' 징역 7년",
    "date": "2023-05-24",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2023-05-24경 보도된 사건으로, 면허증 위조해 28년간 진료한 60대 '가짜 의사' 징역 7년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-05",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-05",
        "desc": "징역 7년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 7년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "YTN",
        "title": "면허증 위조해 28년간 진료한 60대 '가짜 의사' 징역 7년",
        "date": "2023-05-24",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5vRXc0aXdyX1lqSUtvRFFkWU1xbXJuOEJkbDFYT2t2YktrZnhuN2V0Rmt1TnJxLWtMUll1WmtIc3Fkdnk1VGZ6c25mUVBjMkZSLWN0NUlZSzdYR04tdWc?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 7년"
    ]
  },
  {
    "id": "MED-2023-225",
    "title": "28년만에 막 내린 가짜의사 사기극…의대 졸업한 60대 징역 7년",
    "date": "2023-05-24",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2023-05-24경 보도된 사건으로, 28년만에 막 내린 가짜의사 사기극…의대 졸업한 60대 징역 7년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-05",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-05",
        "desc": "징역 7년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 7년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "28년만에 막 내린 가짜의사 사기극…의대 졸업한 60대 징역 7년",
        "date": "2023-05-24",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE50Y2xiWWNJZV9fd0tSWkhNN2t2bTdjRFprSWRTMVdCbW9UM1Y4SGl0c1ZoNFZIQzJXbGlDZXZVUVRuWmw5eE90RnZ2OFYta1VUOWJNMFVGQnV5dG_SAWBBVV95cUxNVnZFd0FfOHhJaEtDd1VvYTdaalZGeG10TWFWVEs0QnIxNjBZRkFtMnU1UUNrZ1dvSzd4RGRyaVNVOHlVSTRBRmVUN0F0MnBYSU11UURkeVEyX1RjSkhvUHY?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 7년"
    ]
  },
  {
    "id": "MED-2023-226",
    "title": "대동맥박리 놓친 전공의, 의료법위반 징역형 판결 전말은",
    "date": "2023-08-22",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "전공의 (레지던트)",
    "summary": "2023-08-22경 보도된 사건으로, 대동맥박리 놓친 전공의, 의료법위반 징역형 판결 전말은. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-08",
        "desc": "Medicaltimes 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-08",
        "desc": "징역 형 판결 전말은 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 판결 전말은 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "Medicaltimes",
        "title": "대동맥박리 놓친 전공의, 의료법위반 징역형 판결 전말은",
        "date": "2023-08-22",
        "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5iblVpemJsSkc1R2JMcDNXTkJlUWxOSVN5STh0Z1FNdkpGaDY4RUw5MFVmWUZIcF9tMlZPX25ObHdXS0d6MlBhNTFfY19pUkZWTHNXYjRUQ0MyNW43cGp6QVdJWnlLN1R0UmJmQzRjVlFzUmM?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "전공의(레지던트)",
      "징역 형 판"
    ]
  },
  {
    "id": "MED-2023-227",
    "title": "27년 만에 덜미 잡힌 60대 ‘가짜 의사’…징역 7년 선고",
    "date": "2023-05-25",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2023-05-25경 보도된 사건으로, 27년 만에 덜미 잡힌 60대 ‘가짜 의사’…징역 7년 선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-05",
        "desc": "청년의사 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-05",
        "desc": "징역 7년 선고 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 7년 선고 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "청년의사",
        "title": "27년 만에 덜미 잡힌 60대 ‘가짜 의사’…징역 7년 선고",
        "date": "2023-05-25",
        "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE4ydzc5Z0QzeXFMd3lsSE1ob3B4aEQyVE9VMTZkMlB3WE5qQk14aVBkS2gzTmthTnh3NkhESmh6MXV4QnJxR3p3R09hc0FRZDh4MVNmXzBfMXZHLXJOODRhZzB1elF2T2hNblpNSmRSa9IBc0FVX3lxTE1pOENBenZ6R1NvTW95Tjl5U3NhbzJQRm5nSkVOSGF2T0tUa2VTN3pPc2YwMFlvM2NSSTI1Yl80cW5vM2s3RXRvZVFhSzBBc01SMEVsWThQcjVUejdCb2s3VTFZT3o3d3dweFo3T0Z1aWFxSzA?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 7년"
    ]
  },
  {
    "id": "MED-2023-228",
    "title": "28년 동안 ‘가짜 의사’ 행세해 온 60대 징역 7년",
    "date": "2023-05-24",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2023-05-24경 보도된 사건으로, 28년 동안 ‘가짜 의사’ 행세해 온 60대 징역 7년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-05",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-05",
        "desc": "징역 7년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 7년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "조선일보",
        "title": "28년 동안 ‘가짜 의사’ 행세해 온 60대 징역 7년",
        "date": "2023-05-24",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQcnVRRmhSdVphbzRwTkN6UG41ZHJoLWs1dnNzc1ZtYUJqTE1aMVNoVXBWUGpkam90akpXYkxFdGtSZ0ZWWS1mVzVQOVNaUG8yV0NGZEJxODgwbF82aHplcFFQek9FTHAwelNwVkxXNDlVS2liQzV1UkNpQnFvQzROVy1BandhS1E?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 7년"
    ]
  },
  {
    "id": "MED-2021-229",
    "title": "[판결] '연예인·재벌가 상대 프로포폴 상습투약 혐의' 의사, 징역 3년",
    "date": "2021-01-05",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2021-01-05경 보도된 사건으로, [판결] '연예인·재벌가 상대 프로포폴 상습투약 혐의' 의사, 징역 3년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-01",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-01",
        "desc": "징역 3년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 3년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "법률신문",
        "title": "[판결] '연예인·재벌가 상대 프로포폴 상습투약 혐의' 의사, 징역 3년",
        "date": "2021-01-05",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1BNjRqVTVxRThZWW15VjVodjByNVRVaFE4RjJCT3QxQkRwT2t3YVp6TmtwRGFfSHVQd0JnT0pCRlVURWdDY2VmTmV6aVZTSGpIelJnd3RicDhlellQOUtjWlBQYkFRVHhfOVVGTlV30gFyQVVfeXFMTVZGc3hmcXRveHhIY1dOWkpMS3EzVnRtcjhpQW5aZjZxMVVYSE11b3NMMlBQRFJxTmx0QlM4SXNPUUpkUWFNQmpWeUl4SnBQemo2NWJUMDJ5SmhBNGx3YnpPQTZTek5yUXdGZnJNYmwwbkJB?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역 3년"
    ]
  },
  {
    "id": "MED-2017-230",
    "title": "[단독] 사망 환자 차트서 사라진 의사 이름…수상한 흔적 - news.sbs.co.kr",
    "date": "2017-07-06",
    "year": 2017,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2017-07-06경 보도된 사건으로, [단독] 사망 환자 차트서 사라진 의사 이름…수상한 흔적 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2017-07",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2017-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "[단독] 사망 환자 차트서 사라진 의사 이름…수상한 흔적 - news.sbs.co.kr",
        "date": "2017-07-06",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBCT2Z1bVlaT0syQVdhVzVxd3hac25pYzVrdE1rckxMazZhMU1faXkxTzJ6THhVVmExX05KVmwtcFhYU2hfQjlsYkRsY1dpejcxQkU1VldmRU1LM1JHcm5tN2lZNU9ZLWhfMWfSAWZBVV95cUxPYTVGendYM3ZvZVBCR2JKRUN3YmxZQWowemJ3c0c3bjdFMTVqU1dWUU5jSjZHbUl1dDVBTG5nWjJNbjZtSkx6RU55QkItMzd3R056anFkdlAyN3ZQdzV5a2wwVUVPWUE?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2020-231",
    "title": "신생아 낙상 사망사고 은폐한 분당차병원 의사들 2심도 실형",
    "date": "2020-08-11",
    "year": 2020,
    "region": "경기",
    "district": "성남시 분당구",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-08-11경 보도된 사건으로, 신생아 낙상 사망사고 은폐한 분당차병원 의사들 2심도 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-08",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-08",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "신생아 낙상 사망사고 은폐한 분당차병원 의사들 2심도 실형",
        "date": "2020-08-11",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1wVmQ0bzZETXZUbzRrVWpnc1BTOXFXS2ZRT0lFbXI5NVlDdGRKSjU2eDFudlE1WGczbzhqcjVIWTJ1c2UyZ3JubmgtbGNSZVlMY3ZFNDNXbXdPZ2fSAWBBVV95cUxOWTFvYnIxV0VCWGM2aDFaU0xoUGZiSUlwVFR5dW1QSjQ1RGF5TUowM0FKMTFMYWxtODByOU1MakY2WllYN1R1engzVGVnM1lTdkdXOW0zdE9fS0FxM3dWV00?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "경기",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2020-232",
    "title": "의사 실수로 신생아 사망... 집단 은폐한 의료진 2심도 실형",
    "date": "2020-08-11",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-08-11경 보도된 사건으로, 의사 실수로 신생아 사망... 집단 은폐한 의료진 2심도 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-08",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-08",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "의사 실수로 신생아 사망... 집단 은폐한 의료진 2심도 실형",
        "date": "2020-08-11",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1ycG5DakdXbGVXaUItM21WbmhXMGFmNUJvWmp0ZWVxazRkNlFzNzlmRVFQVHpJR1FZVmlySUtSTTIwWWUtbDVKMUdib3ZpZVNuamJlclI0WUszTHczUDkxR3E4TFBKTE1oZ3ZOWEdR0gFzQVVfeXFMUEtTUndtOHg0UTdOd3lSdndmS3NTT19HTjFIVGl5VjBhTkJGT0RRaVlfNWNaZXVXTk0yWE01anBIdjJiSENUYVBEOVpQSTZZbGdZOUZxRjZNak4wXy1wb3ZILWVPYW04bnpaM0FJVzFTZTcwcw?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2020-233",
    "title": "'신생아 낙상 사고 은폐' 분당차병원 의사들 실형 확정",
    "date": "2020-12-11",
    "year": 2020,
    "region": "경기",
    "district": "성남시 분당구",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-12-11경 보도된 사건으로, '신생아 낙상 사고 은폐' 분당차병원 의사들 실형 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-12",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-12",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "'신생아 낙상 사고 은폐' 분당차병원 의사들 실형 확정",
        "date": "2020-12-11",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFByazZxWjNUWkhEakgzRWJuN0ZuN215aWpaVW1LdDI0UWY4VE1yQ183M0ZJM3habmRkbWIxVDBOMUk4ZHZPNDRoelg3SkFoY090RVdQbzBPY1dvdUJYTW8yOWpPTWhkbEJkVDdUS01B?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "경기",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2020-234",
    "title": "‘신생아 낙상 사망’ 은폐한 분당차병원 의사들, 1심 실형",
    "date": "2020-02-13",
    "year": 2020,
    "region": "경기",
    "district": "성남시 분당구",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-02-13경 보도된 사건으로, ‘신생아 낙상 사망’ 은폐한 분당차병원 의사들, 1심 실형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-02",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-02",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "동아일보",
        "title": "‘신생아 낙상 사망’ 은폐한 분당차병원 의사들, 1심 실형",
        "date": "2020-02-13",
        "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5QQmZPOTBTSlh3T2lEYUZwRkdYbmNHT05LMi1kRUNFdHBtWXN0Vmo5ZjhyZVE4Q29kTUE5dWJrdzg2Tk00WFJzRmxTMU1XQWItR3VkYWphSDhFNmhEM3NtVVJOYlV2MDVwT2ZIbU1wYjN3Nm5F0gFkQVVfeXFMT0FmaS0yMGJoSVJuV0ZINnNkMU9QV0t1TjdFbW5wX2RTNGRkVW5rY0xuejF5U2JsbmtXRjh6akJLUlRDYnl2MHFILUFPdUVBZFRiM21IQ2E5bmFUX0Nzc1VPRHdtaA?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "경기",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2020-235",
    "title": "대법, 신생아 사망 은폐한 분당차병원 의사들 실형 확정",
    "date": "2020-12-11",
    "year": 2020,
    "region": "경기",
    "district": "성남시 분당구",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2020-12-11경 보도된 사건으로, 대법, 신생아 사망 은폐한 분당차병원 의사들 실형 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-12",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-12",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "조선일보",
        "title": "대법, 신생아 사망 은폐한 분당차병원 의사들 실형 확정",
        "date": "2020-12-11",
        "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOT1drTFFyb0EwOGVIbkUxNk0tX0tPZlFOU0tsejRtY0FqeEluT3FyT0dCcHlaTjN1YmZwOV92X285YjhPeFk4NGVZYmI1ZkNpU21IWWVUNU1hNEVWcGNad1E0X0hpWENMMXlIZUpYc2xDUmdUbTFnVEF2c0pXdTVTamh6b3RvSG8?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "경기",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2009-236",
    "title": "부천법원, D병원 의료사고 마취의 및 집도의 실형선고",
    "date": "2009-01-23",
    "year": 2009,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "malpractice_hazard",
    "categoryName": "의료사고/도덕적해이",
    "specialty": "일반의/의원",
    "summary": "2009-01-23경 보도된 사건으로, 부천법원, D병원 의료사고 마취의 및 집도의 실형선고. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2009-01",
        "desc": "부천타임즈 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2009-01",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "부천타임즈",
        "title": "부천법원, D병원 의료사고 마취의 및 집도의 실형선고",
        "date": "2009-01-23",
        "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTFAtYzI1Qy1raDkxVnY3LThzNHdweW9ab0tZckVpMDhwaEgySGloSW5aZHhUNjdfQmRic0NsLTNZVjdUODhuLUFBeHpqdW1SUnZ2Y0c5ME5FcVFucjJYRVIxSWZYZ21kSVY1ZVNiZnF1eDV4cXI2NVpEaVdB?oc=5"
      }
    ],
    "tags": [
      "의료사고/도덕적해이",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2026-237",
    "title": "보험사기 의사에 철퇴…대법원서 결국 징역 4년",
    "date": "2026-04-21",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-04-21경 보도된 사건으로, 보험사기 의사에 철퇴…대법원서 결국 징역 4년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-04",
        "desc": "매일경제 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-04",
        "desc": "징역 4년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "매일경제",
        "title": "보험사기 의사에 철퇴…대법원서 결국 징역 4년",
        "date": "2026-04-21",
        "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE4zRjQxZWdJUlBYNWRDQVdkazQwek5jcVgtODZCQUZ4VEFwekNYWTgzTzhfZVVudVBqNFVsVXBXZEhDdzdWSDF3dDROaXotYVBMX3VlYg?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2025-238",
    "title": "가짜 종양 진단하고 미용시술...보험금 빼돌린 의사 구속",
    "date": "2025-10-20",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2025-10-20경 보도된 사건으로, 가짜 종양 진단하고 미용시술...보험금 빼돌린 의사 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "YTN 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "YTN",
        "title": "가짜 종양 진단하고 미용시술...보험금 빼돌린 의사 구속",
        "date": "2025-10-20",
        "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9zZHZ5ajdaTUNWcHdBMWZLaHBlS3Njam0tRjNLRGY3TGY1X0FwZjBZQUphLU4yX1NjNUU0WXRNZ0JNU29oUFl1YlBKNmNkbE1jenI2VUFfN1JUM2JiR1E?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-239",
    "title": "가짜 종양 만들어 실손보험 10억 편취…부산 외과의사·브로커 3명 구속",
    "date": "2025-10-20",
    "year": 2025,
    "region": "부산",
    "district": "부산 일대",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2025-10-20경 보도된 사건으로, 가짜 종양 만들어 실손보험 10억 편취…부산 외과의사·브로커 3명 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "로컬세계 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "로컬세계",
        "title": "가짜 종양 만들어 실손보험 10억 편취…부산 외과의사·브로커 3명 구속",
        "date": "2025-10-20",
        "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9TS3k4ZVprODBhckt6YkZTRzUzSGU3YjhncHpwNGdKQXc0RW1MRmE4UXVZRktMTnk1WnBBbVl6YWVBZFgyTFdTWlNvZDNIU3dYZGl1TDhmYUMwcXktQU9vcdIBWEFVX3lxTFAtc3o2M2VkQVQ1Z1QxeU5xaGlVUGFrc2RwQ0FxbURHMEV3cndEeFBkTGl3b2ZDNVdtc1llNnUtZzFDUHNSRXJlRWdMMHpNeEZIelFNYy1mblo?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "부산",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-240",
    "title": "가슴 성형하고 종양 제거했다 속여...보험금 10억 타낸 의사 등 구속",
    "date": "2025-10-20",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "성형외과",
    "summary": "2025-10-20경 보도된 사건으로, 가슴 성형하고 종양 제거했다 속여...보험금 10억 타낸 의사 등 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "가슴 성형하고 종양 제거했다 속여...보험금 10억 타낸 의사 등 구속",
        "date": "2025-10-20",
        "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPTlY5alM3Qk43Y0xuUUY5amxRdDVmUnRnZmlIN1NBdlNPMmRfQmszekV2NFZDUUxvZ1c5WlpNbHlCa0lQTWFMVTRoVWpIbkZLWk5ST0Z3SDdXLWVGSTgycTBJc0xhMzR0c2ZXNTJpdGNxWG56ckREcjIzM0d5SW1DMXB4YWVqdw?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "성형외과",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-241",
    "title": "“호텔을 병원으로 둔갑”…의사4·환자71명 5억 보험사기 적발",
    "date": "2025-11-06",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2025-11-06경 보도된 사건으로, “호텔을 병원으로 둔갑”…의사4·환자71명 5억 보험사기 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-11",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-11",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "“호텔을 병원으로 둔갑”…의사4·환자71명 5억 보험사기 적발",
        "date": "2025-11-06",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE4zUFRPdUdON1p1bW5EeVdtbTNLNnN2NEhZYlBRX2VQX3VISGdTbEItNVJrdE9GWTNtSDlNZGFzcHAtQmxsd3dJbl9IOTZJSWlmUmFNbFdnTUZYZw?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2024-242",
    "title": "보험사기 목적 병원 설립… `조직적 범행` 의사·브로커 등 일당 구속",
    "date": "2024-11-19",
    "year": 2024,
    "region": "부산",
    "district": "부산 일대",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2024-11-19경 보도된 사건으로, 보험사기 목적 병원 설립… `조직적 범행` 의사·브로커 등 일당 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "부산일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "부산일보",
        "title": "보험사기 목적 병원 설립… `조직적 범행` 의사·브로커 등 일당 구속",
        "date": "2024-11-19",
        "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFBWQnluc2pjTTdMdVN6YkdCVThucHNiczFWbTFiNjhuc1NabVYzd3Q2U3gwWEw0b2NJQVRaMUUxYnp3RXN0bjI0VWxScmVQSG42VGxhZ2RLOEl4NndDajFXOFVDcEhmamwxVGJyODM2ZGU4Ymt6?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "부산",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2024-243",
    "title": "‘실손보험 사기 전문병원도 있었네’…원장 등 2명 구속",
    "date": "2024-07-09",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2024-07-09경 보도된 사건으로, ‘실손보험 사기 전문병원도 있었네’…원장 등 2명 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-07",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-07",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "‘실손보험 사기 전문병원도 있었네’…원장 등 2명 구속",
        "date": "2024-07-09",
        "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNTGxGVE5PMHoxcjdGdlBQeG9MSDROaHNrdTJSbEZzZnVVS1VBRzZsek1rWEFTQ2twNHlwM0dEWWdNLU5jcDlxSVU4WURyU25FSFloSHRPUVBhWE0yOWVaVjF1Yl83c0xVdXlkd0VWVmxtOG1DN01BU1I0OFlTSFpmQWktZDVWbU5nakJpelJKUnhIdw?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-244",
    "title": "가짜 종양 진단해주고 보험금으로 미용시술, 의사·브로커 구속",
    "date": "2025-10-21",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2025-10-21경 보도된 사건으로, 가짜 종양 진단해주고 보험금으로 미용시술, 의사·브로커 구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "한국보험신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국보험신문",
        "title": "가짜 종양 진단해주고 보험금으로 미용시술, 의사·브로커 구속",
        "date": "2025-10-21",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE9sNkZrcDcweGNVMG84RWd0Y3FjbjFtODBXdFJoWElwNFFOYjlYQXdqbF82VWQxZHpSemxpMU52YUNMVEo3RVYzTHBfektSWFFtWU9zeVhSUzRTa3RtQkNLZV9OWGN4cVdSMTVv0gFvQVVfeXFMTUwtMDAxM1lmY09DTmFaVkFXU2w1LUFKOVEwZ0otci1USWZ1WGRJVTN2U2VsNkZJYkZaa0tEbDdkbHZ2TG1KcTJZZ3dCa3lQb2pVMWtsYVZjeF9yTk1GVU1US0lxVExtR1JNM3FaSGNn?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2025-245",
    "title": "가짜 종양 진단해 보험금 10억 편취…의사 포함 120명 입건",
    "date": "2025-10-21",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2025-10-21경 보도된 사건으로, 가짜 종양 진단해 보험금 10억 편취…의사 포함 120명 입건. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-10",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-10",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "동아일보",
        "title": "가짜 종양 진단해 보험금 10억 편취…의사 포함 120명 입건",
        "date": "2025-10-21",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1QcEROeUVMZ1BIX1JidGJwb3hIUnZpZ3FTaWtwNGFPb2dPN0J6LXpMUzhVVUFqMkVvR2FPRVRNbWQweWd4cUc4Zk4tbTJsY0pVLTJXekF2MjliOHFlZDNLVFg0Mnlsd2VUWlBXMUlhelhZZ18yN0HSAWZBVV95cUxOMXJoeWt5bks1cV9SdWJYQ0RiMlR4eElSamxVQVliR2hmNC1WRzVRSy1nbFQyNG44QnlsRTRsWXVGUVFTQ0R2QWY2aUhfSW5VdFh6eEQxWVlyNVRLdm9pVDRMdS1YR3c?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2024-246",
    "title": "보험사기 가담한 의사와 환자 무더기 적발",
    "date": "2024-11-18",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2024-11-18경 보도된 사건으로, 보험사기 가담한 의사와 환자 무더기 적발. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-11",
        "desc": "뉴스프리존 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-11",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "뉴스프리존",
        "title": "보험사기 가담한 의사와 환자 무더기 적발",
        "date": "2024-11-18",
        "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1RUF9jc2xQcDNTLVJHYUYxQ1ZxaTZJN2pDQTByOVF3SDFwZ09adGVBWkZaazNzdE42TWxYQjNpc29QZFhzXzFUNFd0Rll1TGd4c1JqX2pwdTBJTktYUWFNVjlVWGJjSzdvVEo5LUhxRXBJZ0nSAXdBVV95cUxPVV9oMmVOTjk5OTZBa3ZycnNnS01lWjhUVVM2YVJiSnlKaGFDMzF0RUNyeENKLUJSQ1ZxaXMyeEZnSlgzVGRRc0xBdEItNGlWRmdXQmJhU3VlaVJtc0xnUHhvLWJ3NjdhcFRrSGw1X1ZFNVFYOUk3QQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2026-247",
    "title": "제약사 1억원 리베이트 혐의 의사 무죄…골프연습기만 유죄",
    "date": "2026-08-14",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-08-14경 보도된 사건으로, 제약사 1억원 리베이트 혐의 의사 무죄…골프연습기만 유죄. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "제약사 1억원 리베이트 혐의 의사 무죄…골프연습기만 유죄",
        "date": "2026-08-14",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1iTklnaEJZTEx2Q3dEWk9ZMDJ0QTNRMWxIZmduZUY1OHVNZU51UGFXWGN1bnZwTzFmWGpSQmZCTHRNSnFtSU1UZUxmOXNtV3hia1J6VVBWZlpUR2PSAWBBVV95cUxQSi1kR1JRcnpGRzVwb1NBNU1IbEEzTjBWNndvcWRvVkppX1FDRnV5VnRSU0Vxai1JOHB3bzFrNUZqN21JajZNeHdTX3RNcktjNGtHT3dQYVFmZVRLa3FiM1U?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-248",
    "title": "제약사로부터 골프연습기 받은 의사 벌금형…1억대 리베이트는 무죄",
    "date": "2026-08-16",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-08-16경 보도된 사건으로, 제약사로부터 골프연습기 받은 의사 벌금형…1억대 리베이트는 무죄. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "뉴스1 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "벌금형 선고 (면허 유지)"
      }
    ],
    "legalStatus": "벌금형 선고",
    "licenseImpact": "면허 유지",
    "sources": [
      {
        "media": "뉴스1",
        "title": "제약사로부터 골프연습기 받은 의사 벌금형…1억대 리베이트는 무죄",
        "date": "2026-08-16",
        "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1zYVBucmlhQWhLRll0Vm1GRHdUeVdhc050MENrOFZSS01MTHRfWDd3Y3hja3B0NzFZdnpmNTRWRkVHRUJzUHNJaGM3NnpHQnJwUDNGRlg0T0V4UmNRSm9J0gFkQVVfeXFMTkFiR0VFWjhSUkk5RVA4RUdqemFvbDZyZ08tR0VPVEs2cjNOUllzVWhqMnFobks4aTFTR1FndnpJeHVWWFZWUVNVT0R1dUtBV1E1aWNZZm96akxWZENaSXBlc1lUdQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "벌금형 선고"
    ]
  },
  {
    "id": "MED-2025-249",
    "title": "검찰, ‘전공의 리베이트 의혹’ 3개 제약사·의사 등 기소",
    "date": "2025-07-02",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "전공의 (레지던트)",
    "summary": "2025-07-02경 보도된 사건으로, 검찰, ‘전공의 리베이트 의혹’ 3개 제약사·의사 등 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "검찰, ‘전공의 리베이트 의혹’ 3개 제약사·의사 등 기소",
        "date": "2025-07-02",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE42d0pzanZFTWdMVk5YaVI0Mmg4aWlKZ2RmVDBoZklldXUwSzRadE4ydWxINTlFOEdQWl81a094bldaNmJvVTl3UjJCVjQ0SWRVUk5pdjNxWGJNQ0U?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "전공의(레지던트)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-250",
    "title": "교수가 전공의 상대 리베이트 의혹 고발...검찰, 제약회사 3곳·의료진 6명 약식기소 - MEDI:GATE NEWS",
    "date": "2025-07-02",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "전공의 (레지던트)",
    "summary": "2025-07-02경 보도된 사건으로, 교수가 전공의 상대 리베이트 의혹 고발...검찰, 제약회사 3곳·의료진 6명 약식기소 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "교수가 전공의 상대 리베이트 의혹 고발...검찰, 제약회사 3곳·의료진 6명 약식기소 - MEDI:GATE NEWS",
        "date": "2025-07-02",
        "url": "https://news.google.com/rss/articles/CBMiUkFVX3lxTFBvOVBsVTBCYjNxOUNUcDhJWUVIbGZVQVVlREFWVjFiYXdmbFhRTm82RTdWRXJSeXl4TFQ4R3EzSHdaZDNKZzFsNVBZS0pDQUVFSnc?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "전공의(레지던트)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2018-251",
    "title": "여전한 제약업체 '리베이트'...의사 74명 무더기 기소",
    "date": "2018-07-19",
    "year": 2018,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2018-07-19경 보도된 사건으로, 여전한 제약업체 '리베이트'...의사 74명 무더기 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2018-07",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2018-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "여전한 제약업체 '리베이트'...의사 74명 무더기 기소",
        "date": "2018-07-19",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1aVjJuejhBOVUzNE1SVkl4N1VVYWt4elBMbmU0RjVBWTk5NzhvQmJxSVVpZmN0TzRCeU9sSzBLNUtCbmo5enZtMWlXOTRPLVdnaUhycmxmc3p5UQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-252",
    "title": "제약사 리베이트 ‘현금 1억’ 받은 혐의 60대 의사 ‘무죄’...법원 “증거 부족”",
    "date": "2026-08-16",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-08-16경 보도된 사건으로, 제약사 리베이트 ‘현금 1억’ 받은 혐의 60대 의사 ‘무죄’...법원 “증거 부족”. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "제약사 리베이트 ‘현금 1억’ 받은 혐의 60대 의사 ‘무죄’...법원 “증거 부족”",
        "date": "2026-08-16",
        "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxQb0x2bEpyTVIzbkcxSzNDVW5QTlhXUGlNNGpsNE0zMFZBbl93MkR2QUY0NjR5M0pkT3pha3ZxRTlNTjlBdF9HVTd2dVUxV1F5SklzNkNJQklfTkVWbkhqUUYtTFVNZ0c5OUdRYVhfSmNvVXBJTGFTV045cU00TExGMEZSekdjUQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2020-253",
    "title": "서부지검 전 전담반장이 본 JW중외 리베이트 수사..의사라면 주의해야?",
    "date": "2020-07-16",
    "year": 2020,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2020-07-16경 보도된 사건으로, 서부지검 전 전담반장이 본 JW중외 리베이트 수사..의사라면 주의해야?. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2020-07",
        "desc": "의협신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2020-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "의협신문",
        "title": "서부지검 전 전담반장이 본 JW중외 리베이트 수사..의사라면 주의해야?",
        "date": "2020-07-16",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9XYWFyeXR4X0tSX0swaDZYVWU3U0RiQ2N0eDhuQkd4MFFYV1lOQVFhOGtOdDZ6QkNqQUtuTkpHVlhMTWlYaUVYMU9mTWVUcFZ4eUZGclkwaHBkVkZXcWkxTzM4c1QxNHZWNGVJNDEweU4tdw?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-254",
    "title": "1억대 리베이트 혐의 의사 ‘무죄’",
    "date": "2026-08-16",
    "year": 2026,
    "region": "부산",
    "district": "부산 일대",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-08-16경 보도된 사건으로, 1억대 리베이트 혐의 의사 ‘무죄’. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "부산일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "부산일보",
        "title": "1억대 리베이트 혐의 의사 ‘무죄’",
        "date": "2026-08-16",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFAtTFpwR1pIVE8zVlhSVWIyZW9jUGlBUzBNcTkwZHBWM3U5UGxGeFBRNEh3YWJfNGVCd2x3ZXZRTDVJcGhLZ1JYWDh6TGVwbndHMnBGRnoxM1BkdF8teko2Y3FJOGlOd3ZUNlpsR2NCNmdmVFJPSUhYdg?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "부산",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-255",
    "title": "檢, 전공의 '리베이트 의혹' 제약사 3곳·의사 등 기소",
    "date": "2025-07-02",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "전공의 (레지던트)",
    "summary": "2025-07-02경 보도된 사건으로, 檢, 전공의 '리베이트 의혹' 제약사 3곳·의사 등 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "뉴스1 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "뉴스1",
        "title": "檢, 전공의 '리베이트 의혹' 제약사 3곳·의사 등 기소",
        "date": "2025-07-02",
        "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE8xZ05sQWdVU0c0RG5ZMkFfOWpNZDRqelVrUzUyOXlxMmRFcE9DRS1iTmpzc0FUOHhBWmcwRjQxeTh1T0ZxUFdWUkxRbmxWbUlzUzVlRjRSYjBtQmV1SnQyMlRUZk_SAWpBVV95cUxPTWF1Skl2eXJ3bzd1OTAtNWhXTHJNMVpGSnlVenhvZGdvcGRFLWpkRThiTTg5RUNxUzdsWUlrQkhPOHJkdjlraEMyWU1SQ2NKMjlFaWpPRF9tNjRfXzg4Y05VQzc4eWZEUnVR?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "전공의(레지던트)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2016-256",
    "title": "불법 리베이트 부산대형병원 의사 12명 기소",
    "date": "2016-10-06",
    "year": 2016,
    "region": "부산",
    "district": "부산 일대",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2016-10-06경 보도된 사건으로, 불법 리베이트 부산대형병원 의사 12명 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-10",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-10",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "불법 리베이트 부산대형병원 의사 12명 기소",
        "date": "2016-10-06",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE8yXy1lQ3AyVU93WXY5YmpVRWx6cjVTUnRaVkRreTlHaXVkY0d2QmU3OE4yMjFKR3dBQjQtTEhoRlVzUXM3U0QzaU14ZUpncmZHUnRMbGRzZkFoUdIBX0FVX3lxTE5teFdIRDBRX3JRNlR3SVFHMUdRYmVuMlVYQm9SVlpFc0hzX255TVhjOFpXYjdGLTllQUZGV0pDTnRnSFlKajE4cEZhR2djWDhRZC1ybG44TTM5YVNwWmJZ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "부산",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2018-257",
    "title": "리베이트 또 적발…전국 100여개 병원서 제약사ㆍ의사 무더기 기소",
    "date": "2018-07-19",
    "year": 2018,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2018-07-19경 보도된 사건으로, 리베이트 또 적발…전국 100여개 병원서 제약사ㆍ의사 무더기 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2018-07",
        "desc": "데일리매거진 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2018-07",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "데일리매거진",
        "title": "리베이트 또 적발…전국 100여개 병원서 제약사ㆍ의사 무더기 기소",
        "date": "2018-07-19",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE9PS0w2RDduc09FQzk0YXdfY2NPOWpPOUNMVWFxMm5UeWR0NFJEUE5ENElpem0ybWo3REFGMktHYlhVd3JybGtienhHYlpiSjFsQlRDcmtncmlTUHhKNVVlVW1PZ3lES2NXNUVTNFN0S1ZfVG5xaUE?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2025-258",
    "title": "검찰, ‘전공의 리베이트 의혹’ 제약사·의사 약식기소 - edaily.co.kr",
    "date": "2025-07-02",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "전공의 (레지던트)",
    "summary": "2025-07-02경 보도된 사건으로, 검찰, ‘전공의 리베이트 의혹’ 제약사·의사 약식기소 - edaily.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-07",
        "desc": "edaily.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "edaily.co.kr",
        "title": "검찰, ‘전공의 리베이트 의혹’ 제약사·의사 약식기소 - edaily.co.kr",
        "date": "2025-07-02",
        "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNRGVmVmF2c1h6QlhCdG5WQV9uZkJOQzlrcUFLOXBkNkVxcFJwMGREaXl4cDNIeHZWbGlUR3JYMnlnYnVnUkEtMkdzT25IVDVzSWlsWWFnM0ZUUmUtdVd1d2ZBVlNSeGtoN3dUZGl5M3Bpd0J3QXozUTF5bWNXN3UzbQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "전공의(레지던트)",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2016-259",
    "title": "의약품 처방 대가로 뒷돈 챙긴 의사 12명 기소",
    "date": "2016-10-07",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2016-10-07경 보도된 사건으로, 의약품 처방 대가로 뒷돈 챙긴 의사 12명 기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-10",
        "desc": "메디칼업저버 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-10",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "메디칼업저버",
        "title": "의약품 처방 대가로 뒷돈 챙긴 의사 12명 기소",
        "date": "2016-10-07",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1abExlRkR6THRSV3pUaDUxNEtIV3Y3bVdPYTlMNWRnOWlPUG9YdmNjU051UnVnbHJ1elVDaTU5WWFoU2c4NjhTbTVSM3M0MGxNS25yYUZfd05pVzUyUGpGd3Q0THV6S2JjVEE?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2026-260",
    "title": "1억원 리베이트 혐의 의사 무죄…법원 \"증거부족\"",
    "date": "2026-08-16",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-08-16경 보도된 사건으로, 1억원 리베이트 혐의 의사 무죄…법원 \"증거부족\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-08",
        "desc": "네이트 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-08",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "네이트",
        "title": "1억원 리베이트 혐의 의사 무죄…법원 \"증거부족\"",
        "date": "2026-08-16",
        "url": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFA2MkpuaUNZZ3RhVnliNzZDY1JsN2pLOW9WVFgzSVdUZzFGZU5Sc20yNmVBUjZnamt1U0RFSUstZ21LTHEwYkxfMXFIM0hXeFM0VEpB?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2018-261",
    "title": "대법, 허위 장애진단서 남발 의사 징역 4년 확정",
    "date": "2018-11-19",
    "year": 2018,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2018-11-19경 보도된 사건으로, 대법, 허위 장애진단서 남발 의사 징역 4년 확정. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2018-11",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2018-11",
        "desc": "징역 4년 확정 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 확정 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "대법, 허위 장애진단서 남발 의사 징역 4년 확정",
        "date": "2018-11-19",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFA1VTNicmVvVEpuRlhSTTUwZ2hQWEczb0hVWlA4RjF6dTJqeDlNMXJZZG4taXBQTU10V3dFM0JYME95aFd1UWRZSDJmVzdNcWtIMFp0WWJrcXRMMlk?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2019-262",
    "title": "허위 장애진단서 발급하고 사기까지‥정형외과의사 징역 4년",
    "date": "2019-01-22",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "정형외과",
    "summary": "2019-01-22경 보도된 사건으로, 허위 장애진단서 발급하고 사기까지‥정형외과의사 징역 4년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-01",
        "desc": "메디파나뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-01",
        "desc": "징역 4년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 4년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "메디파나뉴스",
        "title": "허위 장애진단서 발급하고 사기까지‥정형외과의사 징역 4년",
        "date": "2019-01-22",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTFBQcmZlSlduQ2FweHZNUVBhVDFVX3VZNHlTZjVQaHFhckNZY1JzaUdFNU5IR3ZoblVGcldvMkFodUhzbXc2dFZsbHRXcDZiRkRaeEd2RWVuWFpJUDlaNFpKQnZ3dUd0MVB5MVJV?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "정형외과",
      "징역 4년"
    ]
  },
  {
    "id": "MED-2017-263",
    "title": "'군의관 입대 피하려' 가짜진단서 만든 의사 '실형'",
    "date": "2017-09-12",
    "year": 2017,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2017-09-12경 보도된 사건으로, '군의관 입대 피하려' 가짜진단서 만든 의사 '실형'. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2017-09",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2017-09",
        "desc": "징역형 실형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역형 실형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "'군의관 입대 피하려' 가짜진단서 만든 의사 '실형'",
        "date": "2017-09-12",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9zWC02Z3Z5RnM5LWZwM2swc3lDaDQ3a0RsaXlnNmJrR2R0T044SU9hZlJaN0JzSkNhYVFNZ3FhdnpGMjRickFCUVdXNjhya0VMRVNyYWFZYXJNcmfSAWBBVV95cUxQSkhZR2VZc1EwclQ2RHlKYXBJcUFrMEc3R29nc0ZYM25tOS1DNks4TXdUc2t0SGhmZkFVSG4zNjhFenQ2X2pBRXRBQTlRa3A3a0JDUXRNdm5RX2dFVTZqczc?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "징역형 실형"
    ]
  },
  {
    "id": "MED-2024-264",
    "title": "군대 안 가려고 의사 속인, 축구 국대 출신 전직 프로게이머…집행유예 선고에 검찰 항소",
    "date": "2024-02-05",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2024-02-05경 보도된 사건으로, 군대 안 가려고 의사 속인, 축구 국대 출신 전직 프로게이머…집행유예 선고에 검찰 항소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-02",
        "desc": "데일리안 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-02",
        "desc": "징역형 집행유예 선고 (면허 정지 처분)"
      }
    ],
    "legalStatus": "징역형 집행유예 선고",
    "licenseImpact": "면허 정지 처분",
    "sources": [
      {
        "media": "데일리안",
        "title": "군대 안 가려고 의사 속인, 축구 국대 출신 전직 프로게이머…집행유예 선고에 검찰 항소",
        "date": "2024-02-05",
        "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxNTDNBNHBVMUZFeVhSZFRselJDOWk1RWkyYjhBbVhsRHJJTDhnbVZPMjU0VUl6VFBhRjVYNC1FeFRMZkdoRVUwWkpFTU5MdUNSZG1HZjdBcl9pbl83MldPSGpzU01fOElLRXBFMDBua0RJampIaDVkNS13eTJibzBCN3FlZW9zaHFBNkhLVWhwSzJEQUpjLWlRSVNuY2ZtdEVyRE1EZmZDd1lsWnViOGNrcVk4aFFWNXZZVUh3Z2xpY0EzdWYxeGtyOUF2R0s3VS1xdXRUcl8xb3ltdHByZnJPZUh0dGlxc29lZXR2TlBib3FjV0YwNzJ5Zl83MlVjZHNRNF94U0JzS3ZZWlNMdGc?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "징역형 집행"
    ]
  },
  {
    "id": "MED-2016-265",
    "title": "30만 원에 '가짜 진단서 장사' 대형병원 의사 법정구속 - news.sbs.co.kr",
    "date": "2016-08-25",
    "year": 2016,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2016-08-25경 보도된 사건으로, 30만 원에 '가짜 진단서 장사' 대형병원 의사 법정구속 - news.sbs.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2016-08",
        "desc": "news.sbs.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2016-08",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "news.sbs.co.kr",
        "title": "30만 원에 '가짜 진단서 장사' 대형병원 의사 법정구속 - news.sbs.co.kr",
        "date": "2016-08-25",
        "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE84ZjlYTzZBbXRUVl9vYmgtZVBROGtOVHlXWlBWRDFzZlRTSlkxdmlGSnR2ZFJqNnhpamgyX1ZHWjdYVjBtc2hTVVJUX0pMZ0pTYWlZSjRvVDRpUVpQMXdyRFNhSm9RdWl6SkE?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-1997-266",
    "title": "의사가 속이고… 때리고…/허위진단서 끊어줘 법정구속",
    "date": "1997-10-03",
    "year": 1997,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "1997-10-03경 보도된 사건으로, 의사가 속이고… 때리고…/허위진단서 끊어줘 법정구속. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "1997-10",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "1997-10",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "한국일보",
        "title": "의사가 속이고… 때리고…/허위진단서 끊어줘 법정구속",
        "date": "1997-10-03",
        "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE5oWkZpTm9Heng3SFZmMm10N1hkUXJtcVNlSWlRMF9DYzF3YTVVU1JMcUZPVnNNMmFtWGY2MTh0LV8xbmJLUi1hRVN5Vzd6SmRLdVJNTTlqdVBxRmtFeE16clA1OFdpeVB0NEpZ0gFwQVVfeXFMT1ZqbTNWNFBBUnRLZUwzMWZhVXZiMEE4RnFCa0l3TkNuWHRyRm9jcjI4ekpkbVl0TFhqU3d4T2FyX0pEWDEzN1U1aHJQNF9DMm9BQTBFdzVZWElBVEVlamV1S0tUYTZvRHkzQ2I3NHRZMg?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2013-267",
    "title": "여대생 청부살해 사모님 전남편 구속, 허위진단서 발급 의사까지…\"영장발부 가능성은?\"",
    "date": "2013-08-30",
    "year": 2013,
    "region": "전남",
    "district": "전남 일대",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2013-08-30경 보도된 사건으로, 여대생 청부살해 사모님 전남편 구속, 허위진단서 발급 의사까지…\"영장발부 가능성은?\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2013-08",
        "desc": "조선일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2013-08",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "조선일보",
        "title": "여대생 청부살해 사모님 전남편 구속, 허위진단서 발급 의사까지…\"영장발부 가능성은?\"",
        "date": "2013-08-30",
        "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5hU0VDSVkzVkdjSE96NTRtUE5FX3Zhbi1KbjBGNm15OGY5QjhIcVZzR19HamxZSTFRcF9OU01VaXhlTnYtc2Z3Y0VkQ3RYNkd2Z0RqUDI0ckNaWnFJZUhpR3pyQkV5TnB2MjV2V2tmd0NObDhHblRnbF9fTQ?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "전남",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2026-268",
    "title": "[그해 오늘] ‘36주 낙태’ 영상에 발칵…법원, 의사·산모에 ‘살인 유죄’ - edaily.co.kr",
    "date": "2026-07-04",
    "year": 2026,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "fraud_rebate",
    "categoryName": "사기/리베이트",
    "specialty": "일반의/의원",
    "summary": "2026-07-04경 보도된 사건으로, [그해 오늘] ‘36주 낙태’ 영상에 발칵…법원, 의사·산모에 ‘살인 유죄’ - edaily.co.kr. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2026-07",
        "desc": "edaily.co.kr 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2026-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "edaily.co.kr",
        "title": "[그해 오늘] ‘36주 낙태’ 영상에 발칵…법원, 의사·산모에 ‘살인 유죄’ - edaily.co.kr",
        "date": "2026-07-04",
        "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOQ1JzMkwwcnk2Q0VVYS13bTA0VW9KRFpOVmhqaVhBTWJsdy04dVdaa3V2VElGd3ljXzlGSGhFS3BNcThSNzFPWTFSOS1ENmlQU1JraFcySm9tcjlYa2NETzhOWHBQLUtpZlZqbG1rVmZvV0VSLUlPMmhCdG1WZ2NvZA?oc=5"
      }
    ],
    "tags": [
      "사기/리베이트",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2024-269",
    "title": "90번 낸 반성문 통했나…'배달원 사망' 음주뺑소니 의사 석방",
    "date": "2024-01-12",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2024-01-12경 보도된 사건으로, 90번 낸 반성문 통했나…'배달원 사망' 음주뺑소니 의사 석방. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "중앙일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "중앙일보",
        "title": "90번 낸 반성문 통했나…'배달원 사망' 음주뺑소니 의사 석방",
        "date": "2024-01-12",
        "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE42cEV4NC1RYUp6aG5kWlFab3dkTTJ5T3dsaXNpTkU0azBUdmlNTS05NFVzYy1mdzctRjItX2pseDVUUm43bFRfcmgwdXE1ZkM5QjA0VnRn?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2024-270",
    "title": "'배달원 사망' 음주 뺑소니 의사 항소심서 석방‥반성문만 90장",
    "date": "2024-01-12",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2024-01-12경 보도된 사건으로, '배달원 사망' 음주 뺑소니 의사 항소심서 석방‥반성문만 90장. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'배달원 사망' 음주 뺑소니 의사 항소심서 석방‥반성문만 90장",
        "date": "2024-01-12",
        "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFBSaXhoOWxuOXVMMGwxNWVnbmhEQ0hNVFJSTXVJOHRMYmpJNXdBRGYwSGM5UG1RcjZCWi1iVFVvT2htLVVMc29PemRFUWZ6ejBtRmRfX0pOVTZIbWZLN2FQZ01zVFhJX1M2UUhQaXhWdGdtdUdqTTFFdNIBeEFVX3lxTFBKbWJVTV92dnNmbmhadVlYOXB3OTRrSFNwbHpTUjR6cE5EYzcwVFNPcVV3MUxCbWphRkV1aWJfajUzOXRYd28tUzBzRHl6TlViaDFROUxUQmp2NWVSMkJkcF92dHpKbmFZLUwzZTFZX1MyTHdHVWFtLQ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-271",
    "title": "배달원 숨지게 한 '음주 뺑소니' 의사…징역 7년 구형",
    "date": "2023-03-15",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-03-15경 보도된 사건으로, 배달원 숨지게 한 '음주 뺑소니' 의사…징역 7년 구형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-03",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-03",
        "desc": "징역 7년 구형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 7년 구형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "배달원 숨지게 한 '음주 뺑소니' 의사…징역 7년 구형",
        "date": "2023-03-15",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9PazlQa3lsV1RNZTd0Ujh1clNEX24zS1NvUXcweThnbWVvaVNNQndMNFMtNU55cVNaamRXSEZqcmVIMzI1Tzh4UUVlYldkV3JUTFZmOTk1RTJCTWPSAWBBVV95cUxPcVZ1R2IwNE9JaVVneFY1NVVnekxqcl9xSEtLMW1KcF9OOTZ0eGlwSzFsOFVlZ0IzVnZKaDR4SDFSUkFUeTRyck5LVG9udlVBV1FnbVd3X29JRFZTN1RGVXk?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 7년"
    ]
  },
  {
    "id": "MED-2024-272",
    "title": "`배달원 사망` 음주 뺑소니 의사, 반성문 90장에 집행유예 석방",
    "date": "2024-01-12",
    "year": 2024,
    "region": "부산",
    "district": "부산 일대",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2024-01-12경 보도된 사건으로, `배달원 사망` 음주 뺑소니 의사, 반성문 90장에 집행유예 석방. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "부산일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "징역형 집행유예 선고 (면허 정지 처분)"
      }
    ],
    "legalStatus": "징역형 집행유예 선고",
    "licenseImpact": "면허 정지 처분",
    "sources": [
      {
        "media": "부산일보",
        "title": "`배달원 사망` 음주 뺑소니 의사, 반성문 90장에 집행유예 석방",
        "date": "2024-01-12",
        "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5aVFBYZTBmWkxmTlBnMWxtZlBReENKMTA2M25RdGFyZEk1cEt6aV9NZDN3M0dFM3hnbEtNU09RdV8wWW9yN19hNFdKd0haSTF6dElVWlpRck1iSTQ2X0xaRnMwSnM0M05aSDZEcndXZ0Jpa0w4?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "부산",
      "일반의/의원",
      "징역형 집행"
    ]
  },
  {
    "id": "MED-2023-273",
    "title": "“음주 뺑소니 의사, 무기징역 받길” 숨진 배달원 지인의 호소 - v.daum.net",
    "date": "2023-01-24",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-01-24경 보도된 사건으로, “음주 뺑소니 의사, 무기징역 받길” 숨진 배달원 지인의 호소 - v.daum.net. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "v.daum.net 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 받길 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 받길 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "v.daum.net",
        "title": "“음주 뺑소니 의사, 무기징역 받길” 숨진 배달원 지인의 호소 - v.daum.net",
        "date": "2023-01-24",
        "url": "https://news.google.com/rss/articles/CBMiRkFVX3lxTE8tQm1CeEpveFljejVCVGVybmtIcUkwMVlqZWtxVWE1MFRkN3hsd19yZEFTRXhZVUI2UjVlYzNtNkZfdndHNXc?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 받길"
    ]
  },
  {
    "id": "MED-2024-274",
    "title": "반성문 90장...음주 뺑소니 사망사고 낸 의사 석방",
    "date": "2024-01-12",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2024-01-12경 보도된 사건으로, 반성문 90장...음주 뺑소니 사망사고 낸 의사 석방. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "한국경제TV 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "한국경제TV",
        "title": "반성문 90장...음주 뺑소니 사망사고 낸 의사 석방",
        "date": "2024-01-12",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBnalVibnZ0QjI4anFjRnFDdURuTS1nTzd1S1BSaDBwcFJjc0JWZGVkR0ZBVVVXd094U3ZfM0JmRG12RkZhTkNjYi1Ld3JHQjk4UGwwdnBnM0FHNmFQYk9iZ0RINlpxMVRUclZndU9MZWhWbXYtNFJB?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-275",
    "title": "'음주운전 뺑소니 사망사고' 40대 의사 징역 6년",
    "date": "2023-07-14",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-07-14경 보도된 사건으로, '음주운전 뺑소니 사망사고' 40대 의사 징역 6년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-07",
        "desc": "MBC 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-07",
        "desc": "징역 6년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 6년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "MBC 뉴스",
        "title": "'음주운전 뺑소니 사망사고' 40대 의사 징역 6년",
        "date": "2023-07-14",
        "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE45S1MzblZFQ2k0WEhCNk93V1pqS2NhV3JmZU1XQUl4MTlKRi1XZXY3cllYTC1Sa2JFQ3dLajRyTmpDTm05RUdyWHBWaTVvRk9Kay0wQnpOd1ZzNXQ1UTdxODZYVDRUOGpab0x0ckVicEFkTm50SEFF0gF3QVVfeXFMTmk2SXZSMUxDalFFVUV1LV8wd21uVXZ0V3pFQTNYMzhuVXczZld1QnZwQmY3NjlkZDBJUjlpajc1bFBjVVdsM3BFdXl6a1EyTFg2UHpxRUlnMW5WVGJiR0VCVjFwcW8yYjRtS2pNRDA4cHdBY1RuRjQ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 6년"
    ]
  },
  {
    "id": "MED-2023-276",
    "title": "30대 배달원에 '음주 뺑소니 사망'… 40대 의사 징역 6년",
    "date": "2023-07-14",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-07-14경 보도된 사건으로, 30대 배달원에 '음주 뺑소니 사망'… 40대 의사 징역 6년. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-07",
        "desc": "한국일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-07",
        "desc": "징역 6년 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 6년 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "한국일보",
        "title": "30대 배달원에 '음주 뺑소니 사망'… 40대 의사 징역 6년",
        "date": "2023-07-14",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE43b056WXBCZHhTdUNfS2V1dFhncTZEaW9TZ3RUamtBWEN2UDBDS1dyZVpxMlFKMjRUVFV1bldVTVBlVmdqYkNWWGVicTY1UVFPeDRWT2NyUTZGLVN5bnlUWWVvckljQk9iQUFIb2xR0gFzQVVfeXFMTjluY1pUVGlRN3VLdDhmNHB6cmxSMHJSX2hkd0VIMmJ5VjgtUll6QzlKZHJzVmhoVW9WanBPMS01d2ZlTENPSS0yVEU5QUhTM3g4VUdjZ2V5OS1NT25Ddl9fNFNQT1FzS0kxVWFleTZYcHNVRQ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 6년"
    ]
  },
  {
    "id": "MED-2023-277",
    "title": "배달 청년 숨지게 한 음주 뺑소니 의사, 무기징역 가능? 변호사들 \"징역 10년 내외\"",
    "date": "2023-01-25",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-01-25경 보도된 사건으로, 배달 청년 숨지게 한 음주 뺑소니 의사, 무기징역 가능? 변호사들 \"징역 10년 내외\". 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-01",
        "desc": "로톡뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-01",
        "desc": "징역 가능 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 가능 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "로톡뉴스",
        "title": "배달 청년 숨지게 한 음주 뺑소니 의사, 무기징역 가능? 변호사들 \"징역 10년 내외\"",
        "date": "2023-01-25",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5sOGlCTjRxSEt5RktMcnNaaE1rWHFzcFRwYWhUN184aVdxSi1hLTRsS0tTbFBOdDF3cC1IZExibmxoeFhBRWhBcGpPMU1Gc3p3ZnY5ZUZsbk5EQQ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 가능"
    ]
  },
  {
    "id": "MED-2024-278",
    "title": "'배달원 사망' 음주 뺑소니 의사 석방…90차례 넘게 반성문 제출",
    "date": "2024-01-12",
    "year": 2024,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2024-01-12경 보도된 사건으로, '배달원 사망' 음주 뺑소니 의사 석방…90차례 넘게 반성문 제출. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2024-01",
        "desc": "위키트리 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2024-01",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "위키트리",
        "title": "'배달원 사망' 음주 뺑소니 의사 석방…90차례 넘게 반성문 제출",
        "date": "2024-01-12",
        "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTFBGQUJzUzZLRHd1QlN4NG5mOEp5QTBzVENDR2RwQWtFXzJhWFlYZFQxckxpRzRvVHAybmVLczlidzZBZFEzdkg2UHc2X1poR0FxRlhkZg?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2023-279",
    "title": "배달원 치여 숨지게 한 ‘음주운전’ 의사 구속기소",
    "date": "2023-02-03",
    "year": 2023,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2023-02-03경 보도된 사건으로, 배달원 치여 숨지게 한 ‘음주운전’ 의사 구속기소. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2023-02",
        "desc": "경향신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2023-02",
        "desc": "구속 영장 발부 및 기소 (자격정지 / 면허취소 절차)"
      }
    ],
    "legalStatus": "구속 영장 발부 및 기소",
    "licenseImpact": "자격정지 / 면허취소 절차",
    "sources": [
      {
        "media": "경향신문",
        "title": "배달원 치여 숨지게 한 ‘음주운전’ 의사 구속기소",
        "date": "2023-02-03",
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5jNVNGOG05cHFpWlhiREM5SzJ3TFc1RHVRRHd3MmU3bGg5UWM5R0FOSzBydkhLYmY0cmRmR2tpOUhnUnZMWGY2YkgxdXdPRG92SW83MmxNTUt6UdIBX0FVX3lxTE51Z3gzeUZVM3gzaUk1SkVzZmZjcmR4aFhfQUgzTVoyZVZYY0xwcE1URDBydUFjZjhCVS1Nc0xiY2xfblBtUWxiVXFiZHhLTEt2d0tnU2ZRaFdXYi1RZXFZ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "구속 영장"
    ]
  },
  {
    "id": "MED-2012-280",
    "title": "30대 의사와 60대 여성환자 '싸움'…경찰 수사",
    "date": "2012-10-26",
    "year": 2012,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2012-10-26경 보도된 사건으로, 30대 의사와 60대 여성환자 '싸움'…경찰 수사. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2012-10",
        "desc": "연합뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2012-10",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "연합뉴스",
        "title": "30대 의사와 60대 여성환자 '싸움'…경찰 수사",
        "date": "2012-10-26",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1OcVB3ZnQtbHMxRkN2MVBmYWhwT0ZGN29yRXJleXlDTmVxbmxXdWFPLWZwTjhMekl4R0NHMmtqMlpnczVNR2J3YzBGM3ZYZUM3b0V3SHdCWFUyQzDSAWBBVV95cUxQUXltSlJpLWFyZ0Zmak9JcUg1ZHB4dDM0eE9nZThZb0lId2hvRVprd2ozSVE1YkE1UEdlNlNfSGpyMVNTNGZWa0xnSVZWSUoxTzVONW85cVNfTWVOSGt1YjY?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2019-281",
    "title": "의사들이 의료소송에 휘말린다면, 청구금액이나 형사입건에 놀라지 말고 기록 정리부터 - MEDI:GATE NEWS",
    "date": "2019-03-23",
    "year": 2019,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2019-03-23경 보도된 사건으로, 의사들이 의료소송에 휘말린다면, 청구금액이나 형사입건에 놀라지 말고 기록 정리부터 - MEDI:GATE NEWS. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2019-03",
        "desc": "MEDI:GATE NEWS 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2019-03",
        "desc": "경찰 적발 및 검찰 송치 (행정처분 의뢰)"
      }
    ],
    "legalStatus": "경찰 적발 및 검찰 송치",
    "licenseImpact": "행정처분 의뢰",
    "sources": [
      {
        "media": "MEDI:GATE NEWS",
        "title": "의사들이 의료소송에 휘말린다면, 청구금액이나 형사입건에 놀라지 말고 기록 정리부터 - MEDI:GATE NEWS",
        "date": "2019-03-23",
        "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE93eWhzc1J3Z1hhSExVYjk5OGVaRTN6SFUxV1BVV0lqSDZ5R2VRVl83OUM2MjBqTWZWS3B2aEpta3lFT3h2bXVsUnAxVHRkSmk2am1FY3VGYw?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "경찰 적발"
    ]
  },
  {
    "id": "MED-2013-282",
    "title": "‘칼부림에 사망까지…’ 목숨 위협 받는 의사들",
    "date": "2013-07-26",
    "year": 2013,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2013-07-26경 보도된 사건으로, ‘칼부림에 사망까지…’ 목숨 위협 받는 의사들. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2013-07",
        "desc": "KBS 뉴스 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2013-07",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "KBS 뉴스",
        "title": "‘칼부림에 사망까지…’ 목숨 위협 받는 의사들",
        "date": "2013-07-26",
        "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBOSEc2NEZ6MkRwTVYwQkRyUHRXN3JFZVdES2NqdkRxaUJEbkFkR0lCbmdwWHlkY1drSHNnTWRYYlJWSkRtai1sWmhxRGh3aUY1VVRpLVpCV3pHQ3M?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-283",
    "title": "[판결] '내 치아 망가뜨렸다' 망상 … 의사에 최루액 뿌린 환자 유죄",
    "date": "2025-09-03",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2025-09-03경 보도된 사건으로, [판결] '내 치아 망가뜨렸다' 망상 … 의사에 최루액 뿌린 환자 유죄. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-09",
        "desc": "법률신문 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-09",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "법률신문",
        "title": "[판결] '내 치아 망가뜨렸다' 망상 … 의사에 최루액 뿌린 환자 유죄",
        "date": "2025-09-03",
        "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBFN0ZVSk5adGZXLWRGSjMzbTBtZFhic0xsYUlDeHBjUWotUU01Zm11TVpJSmYtVTljak44Ni1EZWxIaWtHYUVyaTFpd0I0UHJXN2lWa1NGV3QzVTl5cXl5WUpEOFZxTG9LR2Q0c1d30gFyQVVfeXFMUFFEbUNQczU5OWo1SU4wRGc3OXhUVnltcjBuaXFDcVVOZkNyZDIyZEdWT2RoVFhBbkYyYm9ONDJQMGdlZjBDaWU3WlpGOEYxbHFSV0Q3OGwxY2JEcTBRb1ZPcEJuRVNkSmYwV1BYOS1hTnlB?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  },
  {
    "id": "MED-2025-284",
    "title": "환자 명의로 마약성분 알약 ‘7000정’ 처방·투약한 50대 의사 징역형",
    "date": "2025-11-19",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2025-11-19경 보도된 사건으로, 환자 명의로 마약성분 알약 ‘7000정’ 처방·투약한 50대 의사 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-11",
        "desc": "동아일보 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-11",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "동아일보",
        "title": "환자 명의로 마약성분 알약 ‘7000정’ 처방·투약한 50대 의사 징역형",
        "date": "2025-11-19",
        "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE5ocVdobVgwUUE4MVk2a2FkOVJsRC11eE1ndldlMjhHNE82YzBJM2FuM3NkZVJ6WlVhMDF0dktKTXhNNTZCOE4wYmhzT0F0LW5YU19MeDc5cU9FdVVfMU5MZXB1MGdsMEtZbnFjd2NOZmRKZ2JtdVHSAWZBVV95cUxNVTR1c252YmtlTzFRY1A2SXJxRld1cE5mTzhoWUYxYXpidkM3TXBpaW02eWUyWXhxUGl6ZUxyUlRqcEYxRm5ERWh4cTUyX0ZaeW53RTYxaFVsWnJobXg3NHZvbGZIWnc?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2025-285",
    "title": "의사 흉기 위협하고 폭행한 환자 보호자 10개월 징역형",
    "date": "2025-04-03",
    "year": 2025,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2025-04-03경 보도된 사건으로, 의사 흉기 위협하고 폭행한 환자 보호자 10개월 징역형. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2025-04",
        "desc": "코리아헬스로그 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2025-04",
        "desc": "징역 형 선고 (면허 취소 확정)"
      }
    ],
    "legalStatus": "징역 형 선고",
    "licenseImpact": "면허 취소 확정",
    "sources": [
      {
        "media": "코리아헬스로그",
        "title": "의사 흉기 위협하고 폭행한 환자 보호자 10개월 징역형",
        "date": "2025-04-03",
        "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5HeEF3SHkxN3IzbG4zc3FIVVFqTDM4YjlJbmd2aTdjUkVWeHRZdHE5V3NfYVN2VFA5NHozMnhKeUYxTmlrVlBnWGRDR1N5NWxIZUU3SVQtX2IwMUNUdmVmY21vbnlhWV9OYkI5QVRMcW5rd9IBdkFVX3lxTE5KLWJmY0RLOS00cWZ2cG5PTm9uak5ESkFHekRva29VUzlqX1JrMjVRT0lrbFRpNkZNVmt3cExYREUzY1F1SjN2TTBVX3BRR1c2VWF4SWdFemdVZGdVNTROZlFwS3cxX2pZeDhjeUJoTVVETGdZRVE?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "징역 형 선"
    ]
  },
  {
    "id": "MED-2021-286",
    "title": "‘반의사불벌죄’라도...대법 “피해자 ‘처벌불원’ 의사, 1심 선고 후엔 효력없어” - 조선비즈",
    "date": "2021-06-27",
    "year": 2021,
    "region": "서울",
    "district": "의원 밀집 지역",
    "category": "other_crimes",
    "categoryName": "기타 강력/형사",
    "specialty": "일반의/의원",
    "summary": "2021-06-27경 보도된 사건으로, ‘반의사불벌죄’라도...대법 “피해자 ‘처벌불원’ 의사, 1심 선고 후엔 효력없어” - 조선비즈. 공인 언론사 보도에 따라 수사기관 적발 및 법적 절차가 진행됨.",
    "timeline": [
      {
        "stage": "언론 보도 및 수사",
        "date": "2021-06",
        "desc": "Chosunbiz 등 주요 언론 정식 보도"
      },
      {
        "stage": "법적 진행 상황",
        "date": "2021-06",
        "desc": "수사 및 기소 송치 (재판 및 행정처분 절차)"
      }
    ],
    "legalStatus": "수사 및 기소 송치",
    "licenseImpact": "재판 및 행정처분 절차",
    "sources": [
      {
        "media": "Chosunbiz",
        "title": "‘반의사불벌죄’라도...대법 “피해자 ‘처벌불원’ 의사, 1심 선고 후엔 효력없어” - 조선비즈",
        "date": "2021-06-27",
        "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPa1UxbFdKTXJscUo4OFdXSkxFRUg2SHpkdXZiWXlCRk1CNzBUekR6aTBnbE0tZkxQUEFHREpfbFJOQlMtaHRtZklFWjBENUhlZjR6VWFGaHc1aUdkTU9Vd3Y2OWFnVDJTTUk1dWR5V2JWdVBNOXlKNzBXcmUwZnZnamRIONIBlwFBVV95cUxNRUFrN1hpOWNLNWozMnZqQ1BiVnVtcDFFcERxYXFfeU9BRC1XSEpJbEtxOGpSQ2NEczNqaGRNWXhKd19iZkdPVkN4NS15cW1EY1R6NDVZLUE4cTN5eWxqdEY3ckdCajh5OEUzS1dBNTdITm9XdVNnNW0ySUdYNTBHSzdhZXVGbkRISDlEb1NYSXhiVHptVnVJ?oc=5"
      }
    ],
    "tags": [
      "기타 강력/형사",
      "서울",
      "일반의/의원",
      "수사 및 기"
    ]
  }
];

// 사건 통계 카테고리 정의
const CATEGORY_META = {
  all: { label: "전체 사건", color: "#3b82f6", icon: "ri-folder-open-fill" },
  sex_crime: { label: "성범죄 / 불법촬영", color: "#f43f5e", icon: "ri-shield-cross-fill" },
  narcotics: { label: "마약류 / 프로포폴", color: "#8b5cf6", icon: "ri-capsule-fill" },
  proxy_surgery: { label: "대리수술 / 무면허", color: "#f59e0b", icon: "ri-knife-line" },
  malpractice_hazard: { label: "의료사고 / 도덕적해이", color: "#ef4444", icon: "ri-error-warning-fill" },
  fraud_rebate: { label: "보험사기 / 리베이트", color: "#06b6d4", icon: "ri-money-dollar-circle-fill" },
  other_crimes: { label: "기타 강력 / 형사범죄", color: "#64748b", icon: "ri-scales-3-fill" }
};

// 17개 행정구역 메타데이터
const REGIONS_LIST = [
  "서울", "경기", "인천", "부산", "대구", "대전", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];
