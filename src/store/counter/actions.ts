import getRandomInt from '../../helpers/getRandomInt';


export const incrementRandomInt = async (context: any) => {
    context.commit('setLoading', true);

    const randomInt = await getRandomInt();

    context.commit('incrementBy', randomInt)
    context.commit('setLoading', false);
}