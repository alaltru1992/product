import  path from 'path'
import  webpack from 'webpack'
import {buildPaths, buildEnv} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: buildEnv) =>{
    const paths: buildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        isDev,
        port: PORT,
    })
    return config
};