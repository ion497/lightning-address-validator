import {
	BoxGeometry,
	DirectionalLight,
	HemisphereLight,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshLambertMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	Vector3,
	Color,
	TextureLoader,
	MTLLoader
} from 'three';
import { OBJLoader } from '$lib/threejs/OBJLoader.js';
import { MTLLoader } from '$lib/threejs/MTLLoader.js';

// const lightningMtl: string = '$lib/models/LightningSymbol_OBJ/LightningSymbol.mtl';
// console.log(lightningMtl);

const scene = new Scene();
//const loader = new OBJLoader();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// const geometry = new BoxGeometry();

const material = new MeshStandardMaterial({
	color: 0xffff00,
	metalness: 0.03
});

//const cube = new Mesh(geometry, material);
//scene.add(cube);
let lightningBolt = null;

/*
const OBJFile: string = '/src/lib/models/LightningSymbol_OBJ/LightningSymbol.obj';
const MTLFile: string = '/src/lib/models/LightningSymbol_OBJ/LightningSymbol.mtl';
const PNGFile: string = '/src/lib/models/LightningSymbol_OBJ/LightningSymbol_BaseColor.png';

new MTLLoader().load(MTLFile, function (materials) {
	materials.preload();
	new OBJLoader().setMaterials(materials).load(OBJFile, function (object) {
		object.scale.set(0.1, 0.1, 0.1);
		object.position.x = 0;
		object.position.y = 0;
		object.position.z = 0;
		let texture = new TextureLoader().load(PNGFile);

		object.traverse(function (child) {
			// aka setTexture
			if (child instanceof Mesh) {
				child.material.map = texture;
			}
		});
		scene.add(object);
		lightningBolt = object;
	});
});
*/
/*
loader.load(
	// resource URL
	lightningBoltModel,
	// called when resource is loaded
	function (lightningBolt) {
		lightningBolt.scale.set(0.1, 0.1, 0.1);
		lightningBolt.position.x = 0;
		lightningBolt.position.y = 0;
		lightningBolt.position.z = 0;

		const textureLoader = new TextureLoader();
		textureLoader.load(
			// resource URL
			'/src/lib/models/LightningSymbol_OBJ/LightningSymbol_BaseColor.png',
			// onLoad callback
			function (texture) {
				let material = new MeshLambertMaterial({ map: texture });
				// lightningBolt.traverse(function (child) {
				// 	if (child.isMesh) {
				// 		child.material.map = texture;
				// 		child.geometry.computeVertexNormals();
				// 	}
				// });
				let mesh = new Mesh(lightningBolt, material);
				scene.add(mesh);
			},
			// onProgress callback currently not supported
			undefined,
			// onError callback
			function (err) {
				console.error('An error happened: ' + err);
			}
		);
	},
	// called when loading is in progresses
	function (xhr) {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened: ' + error);
	}
);
*/

const directionalLight = new DirectionalLight(0xffdd00);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new HemisphereLight(0xffff00, 0x222222);
hemisphereLight.position.set(3, 3, 3);
scene.add(hemisphereLight);

let renderer: WebGLRenderer;

const animate = () => {
	requestAnimationFrame(animate);
	if (lightningBolt) {
		//lightningBolt.rotation.x += 0.01;
		lightningBolt.rotation.y += 0.01;
	}

	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, 300);
	camera.aspect = window.innerWidth / 300;
	camera.updateProjectionMatrix();
};

export const createScene = (el: HTMLCanvasElement) => {
	renderer = new WebGLRenderer({ antialias: true, alpha: true, canvas: el });
	resize();
	animate();
};

window.addEventListener('resize', resize);
