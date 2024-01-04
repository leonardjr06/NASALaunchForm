import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

animate();

// let scene, camera, renderer, cube;

// function init() {
//      scene = new THREE.Scene();

//      camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     );
    
//      renderer = new THREE.WebGL1Renderer({antialias: true});
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
    
//     document.body.appendChild(renderer.domElement);
    
//     const geometry = new THREE.BoxGeometry( 2, 2, 2 ); 
//     const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 

//     cube = new THREE.Mesh( geometry, material ); 
//     scene.add( cube );
    
//     camera.position.z= 5 //positions camera to view the object
// }



// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01; //rotates the cube on both x and y-axis

//     renderer.render(scene, camera);
// }

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     window.addEventListener('resize', onWindowResize, false);
// }



// animate(); //calls to start animation
// init(); //calls to start init after refactoring to get model to stay within layout when altered my users
// onWindowResize();