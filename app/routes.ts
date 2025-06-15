import { type RouteConfig, layout, index, route } from "@react-router/dev/routes";

export default [
    layout('routes/root/layout.tsx', [
        index('routes/root/home.tsx'),
        route('/about', 'routes/root/about.tsx'),
        route('/projects', 'routes/root/projects.tsx'),
        route('/contact', 'routes/root/contact.tsx')

    ]),
] satisfies RouteConfig;
