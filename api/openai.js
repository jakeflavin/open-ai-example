const { Configuration, OpenAIApi } = require("openai");

async function createImage (prompt, key) {
    const openai = new OpenAIApi(new Configuration({
        apiKey: key
    }));

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256", // this is the cheapest image size
        response_format: "b64_json"
    })

    return response.data.data[0].b64_json;
}

module.exports = {
    createImage
}

