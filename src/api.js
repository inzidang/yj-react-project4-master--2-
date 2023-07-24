const BASE_PATH = "http://localhost:8080";

export async function rentalNotices() {
  return await fetch(`${BASE_PATH}/api/rental/notice`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
}

export async function rentalNoticeDetail(props) {
  const id = props.queryKey[1];
  return await fetch(`${BASE_PATH}/api/rental/notice-detail/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
}

export async function rentalNoticesWrite(props) {
// console.log(props);
return await fetch(`${BASE_PATH}/api/rental/notice-write`, {
    method: "POST",
    headers: {
    "Content-Type":"application/json",
},
    credentials: "include", 
    body: JSON.stringify(props),
}).then((res) => res.json());
}