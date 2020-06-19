import * as React from "react";
import importI18nResource from "./common/importI18nResource";
import LazyLoading from "./components/LazyLoading";

const I18nResource = React.lazy(() => importI18nResource("app", "app"));
const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<LazyLoading />}>
        <I18nResource />
        <Component />
      </React.Suspense>
    );
  }
}
