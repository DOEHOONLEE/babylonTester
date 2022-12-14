import { NextApiRequest, NextApiResponse } from 'next'
import { ModelBuilder } from "../../utils/ModelBuilder";
const { createCanvas } = require('node-canvas-webgl/lib')
require('browser-env')();

export default async function personHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { fileName } = req.query

    try {
        if (fileName) {
                // node webgl canvas
            const modelCanvas = createCanvas(700, 700)

                // asset url + filename
            const rootURL = 'https://playground.babylonjs.com/scenes/Dude/'
            const babylonModel = `${fileName}.babylon`

                // 3D model builder init
            const Babylon = new ModelBuilder(modelCanvas)
            await Babylon.init()

                // load model from project folder
            // await Babylon.loadModelFromBase64()
                // load model from remote
            await Babylon.loadModel(rootURL, babylonModel)

            res.setHeader("Content-Type", "text/html")
            res.write("<img src='" + modelCanvas.toDataURL() + "'>")
            res.end()
        }


    } catch (err) {
        console.log(err)
        return res.status(404).json({ message: `User with id: ${fileName} not found.` })
    }

}
