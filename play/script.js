const scene = {};
export default scene;

export const establishment = scene .establishment = function establishment () {

const { scenarist, participant } = this;

participant .on ( 'data', ( script ) => {

console .log ( 'script:', script );

scenarist .play ( JSON .parse ( script ) );

} );

};
