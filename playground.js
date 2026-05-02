async function getQuote() {
  let data = {};
  try {
    let res = await fetch("https://dummyjson.com/quotes/randoms");

    if (!res.ok) {
      throw new Error("HTTPS" + " " + res.status);
    }

    data = await res.json();

    console.log(data.quote);
    console.log("--", data.author);
  } catch (error) {
    console.log("Could not fetch:", error.message);
    return null;
  } finally {
    // after try/catch
  }
}

getQuote();
