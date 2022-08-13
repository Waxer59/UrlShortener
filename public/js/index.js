// References

const createUrlSubmit = document.querySelector("#create-url-submit");
const createUrlInput = document.querySelector('#create-url');
const url = document.querySelector('#url');

// Functions

const createUrl = async (url) => {
  const body = {
    url,
  };

  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const resp = (await fetch("/api/createUrl", req));

  return {
    data: await resp.json(),
    info: await resp
  };
};

// Listeners

createUrlSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  const {info, data} = await createUrl(createUrlInput.value);
  if (info.ok) {
    alert("Url created");
    url.value = data.url;
  } else {
    alert(data.msg);
  }
});
