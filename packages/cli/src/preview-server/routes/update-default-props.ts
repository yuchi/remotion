import {readFileSync, writeFileSync} from 'fs';
import {updateDefaultProps} from '../../codemods/update-default-props';
import {deserializeJSONWithDate} from '../../editor/components/RenderModal/SchemaEditor/date-serialization';
import type {ApiHandler} from '../api-types';
import {getProjectInfo} from '../project-info';
import type {
	UpdateDefaultPropsRequest,
	UpdateDefaultPropsResponse,
} from '../render-queue/job';
import {checkIfTypeScriptFile} from './can-update-default-props';

export const updateDefaultPropsHandler: ApiHandler<
	UpdateDefaultPropsRequest,
	UpdateDefaultPropsResponse
> = async ({input: {compositionId, defaultProps}, remotionRoot}) => {
	const projectInfo = await getProjectInfo(remotionRoot);
	// TODO: What happens if this error is thrown? Handle in frontend
	if (!projectInfo.videoFile) {
		throw new Error('Cannot find root file in project');
	}

	checkIfTypeScriptFile(projectInfo.videoFile);

	// TODO: Pass error to frontend
	const updated = await updateDefaultProps({
		compositionId,
		input: readFileSync(projectInfo.videoFile, 'utf-8'),
		newDefaultProps: deserializeJSONWithDate(defaultProps),
	});

	writeFileSync(projectInfo.videoFile, updated);

	return {status: 'success'};
};
