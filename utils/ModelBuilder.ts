import "@babylonjs/loaders/glTF";
import {
    Engine,
    Scene,
    SceneLoader,
    FreeCamera,
    HemisphericLight,
    Vector3,
    Color3
} from '@babylonjs/core';
import * as fs from "fs";
import { resolve } from 'path'

export class ModelBuilder {
    protected canvas: any;
    protected engine: any;
    protected scene: any;
    protected camera: any;

    constructor(canvas:any) {
        this.canvas = canvas;
    }

    async init() {
        this.engine = new Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true })
        this.scene = new Scene(this.engine)
        this.scene.clearColor = new Color3(0.5, 0.4, 0.4)
        this.camera = new FreeCamera('cam1', new Vector3(100, 150, -200), this.scene)
        this.camera.setTarget(Vector3.Zero())
        const light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene)
        light.intensity = 0.4

        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }


    async loadModel(rootURL, fileName) {
        const isGltfPlugInAvailable = SceneLoader.IsPluginForExtensionAvailable(".gltf")
        console.log('Plugin Availability For GLTF ====>', isGltfPlugInAvailable);

        return new Promise((resolve, reject) => {

            SceneLoader.ImportMesh('', rootURL, fileName, this.scene, (meshes:any, particleSystems:any, skeletons:any, animationGroups:any, transformNodes:any, geometries:any, lights:any) => {
                setTimeout(() => {
                    resolve({
                        meshes, particleSystems, skeletons, animationGroups, transformNodes, geometries, lights
                    })
                }, 15000)
            })
        })
    }

    async loadModelFromBase64() {
        const rootURL = resolve(__dirname, '../../../../asset')
        const glbRawContent = fs.readFileSync(`${rootURL}/box.gltf`)
        const base64Content = Buffer.from(glbRawContent).toString('base64')
        const base64ModelString = `data:base64,${base64Content}`

        const { meshes, skeletons } = await SceneLoader.ImportMeshAsync('', '', base64ModelString, this.scene)
    }

}
