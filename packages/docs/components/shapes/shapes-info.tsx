import {
  makeCircle,
  makeEllipse,
  makeRect,
  makeTriangle,
} from "@remotion/shapes";
import React from "react";
import { RectEdgeRoundness } from "./rect-edge-roundness";

type Param = {
  name: string;
  type: string;
  description: React.ReactNode;
};

type ShapeComponent = {
  shape: string;
  fn: (options: unknown) => unknown;
  params: Param[];
};

export const shapeComponents: ShapeComponent[] = [
  {
    shape: "Rect",
    fn: makeRect,
    params: [
      {
        name: "width",
        type: "number",
        description: "The width of the rectangle.",
      },
      {
        name: "height",
        type: "number",
        description: "The height of the rectangle.",
      },
    ],
  },
  {
    shape: "Circle",
    fn: makeCircle,
    params: [
      {
        name: "radius",
        type: "number",
        description: "The radius of the circle.",
      },
    ],
  },
  {
    shape: "Ellipse",
    fn: makeEllipse,
    params: [
      {
        name: "rx",
        type: "number",
        description: "The radius of the ellipse on the X axis.",
      },
      {
        name: "ry",
        type: "number",
        description: "The radius of the ellipse on the Y axis.",
      },
    ],
  },
  {
    shape: "Triangle",
    fn: makeTriangle,
    params: [
      {
        name: "length",
        type: "number",
        description: "The length of one triangle side.",
      },
      {
        name: "direction",
        type: '"left" | "right" | "up" | "down"',
        description: "The direction of the triangle.",
      },
    ],
  },
];

const globalParams: Param[] = [
  {
    name: "fill",
    type: "string",
    description: "The color of the shape.",
  },
  {
    name: "stroke",
    type: "string",
    description: (
      <>
        The color of the stroke. Should be used together with{" "}
        <code>strokeWidth</code>.
      </>
    ),
  },
  {
    name: "strokeWidth",
    type: "string",
    description: (
      <>
        The width of the stroke. Should be used together with{" "}
        <code>stroke</code>.
      </>
    ),
  },
  {
    name: "style",
    type: "string",
    description: (
      <>
        CSS properties that will be applied to the <code>{"<svg>"}</code> tag.
        Default style: <code>{"overflow: 'visible'"}</code>
      </>
    ),
  },
  {
    name: "pathStyle",
    type: "string",
    description: (
      <>
        CSS properties that will be applied to the <code>{"<path>"}</code> tag.
        Default style: <code>{"transform-box: 'fill-box'"}</code> and a
        dynamically calculated <code>{"transform-origin"}</code> which is the
        center of the shape, so that the shape rotates around its center by
        default.
      </>
    ),
  },

  {
    name: "strokeDasharray",
    type: "string",
    description: (
      <>
        Allows to animate a path. See{" "}
        <a href="/docs/paths/evolve-path">evolvePath()</a> for an example.
      </>
    ),
  },
  {
    name: "strokeDashoffset",
    type: "string",
    description: (
      <>
        Allows to animate a path. See{" "}
        <a href="/docs/paths/evolve-path">evolvePath()</a> for an example.
      </>
    ),
  },
];

export const ShapeOptions: React.FC<{
  shape: string;
  all: boolean;
}> = ({ shape, all }) => {
  const shapeComponent = shapeComponents.find(
    (c) => c.shape.toLowerCase() === shape.toLowerCase()
  );

  return (
    <React.Fragment>
      {(all
        ? [...shapeComponent.params, ...globalParams]
        : shapeComponent.params
      ).map((p) => {
        return (
          <React.Fragment key={p.name}>
            <h3>
              <code>{p.name}</code>
            </h3>
            <p>
              <em>{p.type}</em>
            </p>
            <p>{p.description}</p>
          </React.Fragment>
        );
      })}
      <RectEdgeRoundness />
      {all ? (
        <>
          <h3>Other props</h3>{" "}
          <p>
            All other props that can be passed to a <code>{"<path>"}</code> are
            accepted and will be forwarded.
          </p>
        </>
      ) : null}
    </React.Fragment>
  );
};

export const MakeShapeReturnType: React.FC<{
  shape: string;
}> = ({ shape }) => {
  const shapeComponent = shapeComponents.find(
    (c) => c.shape.toLowerCase() === shape.toLowerCase()
  );

  return (
    <div>
      <h3>
        <code>path</code>
      </h3>
      <p>
        A string that is suitable as an argument for <code>d</code> in a{" "}
        <code>{"<path>"}</code> element.
      </p>
      <h3>
        <code>width</code>
      </h3>
      <p>
        The width of the {shapeComponent.shape.toLowerCase()}. Suitable for
        defining the <code>viewBox</code> of an <code>{"<svg>"}</code> tag.
      </p>
      <h3>
        <code>height</code>
      </h3>
      <p>
        The height of the {shapeComponent.shape.toLowerCase()}. Suitable for
        defining the <code>viewBox</code> of an <code>{"<svg>"}</code> tag.
      </p>
      <h3>
        <code>transformOrigin</code>
      </h3>
      <p>
        A string representing the point of origin if a shape should be rotated
        around itself.
      </p>
      <p>
        If you want to rotate the shape around its center, use the{" "}
        <code>transform-origin</code> CSS property and pass this value, and also
        add <code>transform-box: fill-box</code>. This is the default for{" "}
        <a href={`/docs/shapes/${shapeComponent.shape.toLowerCase()}`}>
          <code>{`<${shapeComponent.shape} />`}</code>
        </a>
        .
      </p>
    </div>
  );
};

export const MakeShapeSeeAlso: React.FC<{
  shape: string;
}> = ({ shape }) => {
  const shapeComponent = shapeComponents.find(
    (c) => c.shape.toLowerCase() === shape.toLowerCase()
  );

  return (
    <ul>
      <li>
        <a
          href={`/docs/shapes/${shapeComponent.shape.toLowerCase()}`}
        >{`<${shapeComponent.shape} />`}</a>
      </li>
      <li>
        <a href={`/docs/shapes`}>
          <code>@remotion/shapes</code>
        </a>
      </li>
      <li>
        <a
          href={`https://github.com/remotion-dev/remotion/blob/main/packages/shapes/src/utils/make-${shape.toLowerCase()}.ts`}
        >
          Source code for this function
        </a>
      </li>
    </ul>
  );
};

export const ShapeSeeAlso: React.FC<{
  shape: string;
}> = ({ shape }) => {
  const shapeComponent = shapeComponents.find(
    (c) => c.shape.toLowerCase() === shape.toLowerCase()
  );

  return (
    <ul>
      <li>
        <a
          href={`/docs/shapes/${shapeComponent.shape.toLowerCase()}`}
        >{`make${shapeComponent.shape}()`}</a>
      </li>
      <li>
        <a href={`/docs/shapes`}>
          <code>@remotion/shapes</code>
        </a>
      </li>
      <li>
        <a
          href={`https://github.com/remotion-dev/remotion/blob/main/packages/shapes/src/components/${shape.toLowerCase()}.tsx`}
        >
          Source code for this function
        </a>
      </li>
    </ul>
  );
};
