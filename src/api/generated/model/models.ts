// @ts-nocheck
import localVarRequest from 'request';

export * from './eventsourceCreateEventSourceRequest';
export * from './eventsourceEventSourceWatchEvent';
export * from './eventsourceLogEntry';
export * from './eventsourceUpdateEventSourceRequest';
export * from './googleProtobufAny';
export * from './grpcGatewayRuntimeError';
export * from './grpcGatewayRuntimeStreamError';
export * from './ioArgoprojEventsV1alpha1AMQPConsumeConfig';
export * from './ioArgoprojEventsV1alpha1AMQPEventSource';
export * from './ioArgoprojEventsV1alpha1AMQPExchangeDeclareConfig';
export * from './ioArgoprojEventsV1alpha1AMQPQueueBindConfig';
export * from './ioArgoprojEventsV1alpha1AMQPQueueDeclareConfig';
export * from './ioArgoprojEventsV1alpha1AWSLambdaTrigger';
export * from './ioArgoprojEventsV1alpha1Amount';
export * from './ioArgoprojEventsV1alpha1ArgoWorkflowTrigger';
export * from './ioArgoprojEventsV1alpha1ArtifactLocation';
export * from './ioArgoprojEventsV1alpha1AzureEventHubsTrigger';
export * from './ioArgoprojEventsV1alpha1AzureEventsHubEventSource';
export * from './ioArgoprojEventsV1alpha1Backoff';
export * from './ioArgoprojEventsV1alpha1BasicAuth';
export * from './ioArgoprojEventsV1alpha1BitbucketAuth';
export * from './ioArgoprojEventsV1alpha1BitbucketBasicAuth';
export * from './ioArgoprojEventsV1alpha1BitbucketEventSource';
export * from './ioArgoprojEventsV1alpha1BitbucketRepository';
export * from './ioArgoprojEventsV1alpha1BitbucketServerEventSource';
export * from './ioArgoprojEventsV1alpha1BitbucketServerRepository';
export * from './ioArgoprojEventsV1alpha1CalendarEventSource';
export * from './ioArgoprojEventsV1alpha1CatchupConfiguration';
export * from './ioArgoprojEventsV1alpha1Condition';
export * from './ioArgoprojEventsV1alpha1ConditionsResetByTime';
export * from './ioArgoprojEventsV1alpha1ConditionsResetCriteria';
export * from './ioArgoprojEventsV1alpha1ConfigMapPersistence';
export * from './ioArgoprojEventsV1alpha1CustomTrigger';
export * from './ioArgoprojEventsV1alpha1DataFilter';
export * from './ioArgoprojEventsV1alpha1EmitterEventSource';
export * from './ioArgoprojEventsV1alpha1EventContext';
export * from './ioArgoprojEventsV1alpha1EventDependency';
export * from './ioArgoprojEventsV1alpha1EventDependencyFilter';
export * from './ioArgoprojEventsV1alpha1EventDependencyTransformer';
export * from './ioArgoprojEventsV1alpha1EventPersistence';
export * from './ioArgoprojEventsV1alpha1EventSource';
export * from './ioArgoprojEventsV1alpha1EventSourceFilter';
export * from './ioArgoprojEventsV1alpha1EventSourceList';
export * from './ioArgoprojEventsV1alpha1EventSourceSpec';
export * from './ioArgoprojEventsV1alpha1EventSourceStatus';
export * from './ioArgoprojEventsV1alpha1ExprFilter';
export * from './ioArgoprojEventsV1alpha1FileArtifact';
export * from './ioArgoprojEventsV1alpha1FileEventSource';
export * from './ioArgoprojEventsV1alpha1GenericEventSource';
export * from './ioArgoprojEventsV1alpha1GitArtifact';
export * from './ioArgoprojEventsV1alpha1GitCreds';
export * from './ioArgoprojEventsV1alpha1GitRemoteConfig';
export * from './ioArgoprojEventsV1alpha1GithubAppCreds';
export * from './ioArgoprojEventsV1alpha1GithubEventSource';
export * from './ioArgoprojEventsV1alpha1GitlabEventSource';
export * from './ioArgoprojEventsV1alpha1HDFSEventSource';
export * from './ioArgoprojEventsV1alpha1HTTPTrigger';
export * from './ioArgoprojEventsV1alpha1Int64OrString';
export * from './ioArgoprojEventsV1alpha1K8SResourcePolicy';
export * from './ioArgoprojEventsV1alpha1KafkaConsumerGroup';
export * from './ioArgoprojEventsV1alpha1KafkaEventSource';
export * from './ioArgoprojEventsV1alpha1KafkaTrigger';
export * from './ioArgoprojEventsV1alpha1LogTrigger';
export * from './ioArgoprojEventsV1alpha1MQTTEventSource';
export * from './ioArgoprojEventsV1alpha1Metadata';
export * from './ioArgoprojEventsV1alpha1NATSAuth';
export * from './ioArgoprojEventsV1alpha1NATSEventsSource';
export * from './ioArgoprojEventsV1alpha1NATSTrigger';
export * from './ioArgoprojEventsV1alpha1NSQEventSource';
export * from './ioArgoprojEventsV1alpha1OpenWhiskTrigger';
export * from './ioArgoprojEventsV1alpha1OwnedRepositories';
export * from './ioArgoprojEventsV1alpha1PayloadField';
export * from './ioArgoprojEventsV1alpha1PubSubEventSource';
export * from './ioArgoprojEventsV1alpha1PulsarEventSource';
export * from './ioArgoprojEventsV1alpha1PulsarTrigger';
export * from './ioArgoprojEventsV1alpha1RateLimit';
export * from './ioArgoprojEventsV1alpha1RedisEventSource';
export * from './ioArgoprojEventsV1alpha1RedisStreamEventSource';
export * from './ioArgoprojEventsV1alpha1Resource';
export * from './ioArgoprojEventsV1alpha1ResourceEventSource';
export * from './ioArgoprojEventsV1alpha1ResourceFilter';
export * from './ioArgoprojEventsV1alpha1S3Artifact';
export * from './ioArgoprojEventsV1alpha1S3Bucket';
export * from './ioArgoprojEventsV1alpha1S3Filter';
export * from './ioArgoprojEventsV1alpha1SASLConfig';
export * from './ioArgoprojEventsV1alpha1SNSEventSource';
export * from './ioArgoprojEventsV1alpha1SQSEventSource';
export * from './ioArgoprojEventsV1alpha1SecureHeader';
export * from './ioArgoprojEventsV1alpha1Selector';
export * from './ioArgoprojEventsV1alpha1Sensor';
export * from './ioArgoprojEventsV1alpha1SensorList';
export * from './ioArgoprojEventsV1alpha1SensorSpec';
export * from './ioArgoprojEventsV1alpha1SensorStatus';
export * from './ioArgoprojEventsV1alpha1Service';
export * from './ioArgoprojEventsV1alpha1SlackEventSource';
export * from './ioArgoprojEventsV1alpha1SlackTrigger';
export * from './ioArgoprojEventsV1alpha1StandardK8STrigger';
export * from './ioArgoprojEventsV1alpha1Status';
export * from './ioArgoprojEventsV1alpha1StatusPolicy';
export * from './ioArgoprojEventsV1alpha1StorageGridEventSource';
export * from './ioArgoprojEventsV1alpha1StorageGridFilter';
export * from './ioArgoprojEventsV1alpha1StripeEventSource';
export * from './ioArgoprojEventsV1alpha1TLSConfig';
export * from './ioArgoprojEventsV1alpha1Template';
export * from './ioArgoprojEventsV1alpha1TimeFilter';
export * from './ioArgoprojEventsV1alpha1Trigger';
export * from './ioArgoprojEventsV1alpha1TriggerParameter';
export * from './ioArgoprojEventsV1alpha1TriggerParameterSource';
export * from './ioArgoprojEventsV1alpha1TriggerPolicy';
export * from './ioArgoprojEventsV1alpha1TriggerTemplate';
export * from './ioArgoprojEventsV1alpha1URLArtifact';
export * from './ioArgoprojEventsV1alpha1ValueFromSource';
export * from './ioArgoprojEventsV1alpha1WatchPathConfig';
export * from './ioArgoprojEventsV1alpha1WebhookContext';
export * from './ioArgoprojEventsV1alpha1WebhookEventSource';
export * from './ioArgoprojWorkflowV1alpha1ArchiveStrategy';
export * from './ioArgoprojWorkflowV1alpha1Arguments';
export * from './ioArgoprojWorkflowV1alpha1ArtGCStatus';
export * from './ioArgoprojWorkflowV1alpha1Artifact';
export * from './ioArgoprojWorkflowV1alpha1ArtifactGC';
export * from './ioArgoprojWorkflowV1alpha1ArtifactGCSpec';
export * from './ioArgoprojWorkflowV1alpha1ArtifactGCStatus';
export * from './ioArgoprojWorkflowV1alpha1ArtifactLocation';
export * from './ioArgoprojWorkflowV1alpha1ArtifactNodeSpec';
export * from './ioArgoprojWorkflowV1alpha1ArtifactPaths';
export * from './ioArgoprojWorkflowV1alpha1ArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1ArtifactRepositoryRef';
export * from './ioArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus';
export * from './ioArgoprojWorkflowV1alpha1ArtifactResult';
export * from './ioArgoprojWorkflowV1alpha1ArtifactResultNodeStatus';
export * from './ioArgoprojWorkflowV1alpha1ArtifactoryArtifact';
export * from './ioArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1AzureArtifact';
export * from './ioArgoprojWorkflowV1alpha1AzureArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1Backoff';
export * from './ioArgoprojWorkflowV1alpha1BasicAuth';
export * from './ioArgoprojWorkflowV1alpha1Cache';
export * from './ioArgoprojWorkflowV1alpha1ClientCertAuth';
export * from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplate';
export * from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest';
export * from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest';
export * from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList';
export * from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest';
export * from './ioArgoprojWorkflowV1alpha1CollectEventRequest';
export * from './ioArgoprojWorkflowV1alpha1Column';
export * from './ioArgoprojWorkflowV1alpha1Condition';
export * from './ioArgoprojWorkflowV1alpha1ContainerNode';
export * from './ioArgoprojWorkflowV1alpha1ContainerSetRetryStrategy';
export * from './ioArgoprojWorkflowV1alpha1ContainerSetTemplate';
export * from './ioArgoprojWorkflowV1alpha1ContinueOn';
export * from './ioArgoprojWorkflowV1alpha1Counter';
export * from './ioArgoprojWorkflowV1alpha1CreateCronWorkflowRequest';
export * from './ioArgoprojWorkflowV1alpha1CreateS3BucketOptions';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflow';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflowList';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflowResumeRequest';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflowSpec';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflowStatus';
export * from './ioArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest';
export * from './ioArgoprojWorkflowV1alpha1DAGTask';
export * from './ioArgoprojWorkflowV1alpha1DAGTemplate';
export * from './ioArgoprojWorkflowV1alpha1Data';
export * from './ioArgoprojWorkflowV1alpha1DataSource';
export * from './ioArgoprojWorkflowV1alpha1Event';
export * from './ioArgoprojWorkflowV1alpha1ExecutorConfig';
export * from './ioArgoprojWorkflowV1alpha1GCSArtifact';
export * from './ioArgoprojWorkflowV1alpha1GCSArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1Gauge';
export * from './ioArgoprojWorkflowV1alpha1GetUserInfoResponse';
export * from './ioArgoprojWorkflowV1alpha1GitArtifact';
export * from './ioArgoprojWorkflowV1alpha1HDFSArtifact';
export * from './ioArgoprojWorkflowV1alpha1HDFSArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1HTTP';
export * from './ioArgoprojWorkflowV1alpha1HTTPArtifact';
export * from './ioArgoprojWorkflowV1alpha1HTTPAuth';
export * from './ioArgoprojWorkflowV1alpha1HTTPBodySource';
export * from './ioArgoprojWorkflowV1alpha1HTTPHeader';
export * from './ioArgoprojWorkflowV1alpha1HTTPHeaderSource';
export * from './ioArgoprojWorkflowV1alpha1Header';
export * from './ioArgoprojWorkflowV1alpha1Histogram';
export * from './ioArgoprojWorkflowV1alpha1InfoResponse';
export * from './ioArgoprojWorkflowV1alpha1Inputs';
export * from './ioArgoprojWorkflowV1alpha1LabelKeys';
export * from './ioArgoprojWorkflowV1alpha1LabelValueFrom';
export * from './ioArgoprojWorkflowV1alpha1LabelValues';
export * from './ioArgoprojWorkflowV1alpha1LifecycleHook';
export * from './ioArgoprojWorkflowV1alpha1Link';
export * from './ioArgoprojWorkflowV1alpha1LintCronWorkflowRequest';
export * from './ioArgoprojWorkflowV1alpha1LogEntry';
export * from './ioArgoprojWorkflowV1alpha1ManifestFrom';
export * from './ioArgoprojWorkflowV1alpha1MemoizationStatus';
export * from './ioArgoprojWorkflowV1alpha1Memoize';
export * from './ioArgoprojWorkflowV1alpha1Metadata';
export * from './ioArgoprojWorkflowV1alpha1MetricLabel';
export * from './ioArgoprojWorkflowV1alpha1Metrics';
export * from './ioArgoprojWorkflowV1alpha1Mutex';
export * from './ioArgoprojWorkflowV1alpha1MutexHolding';
export * from './ioArgoprojWorkflowV1alpha1MutexStatus';
export * from './ioArgoprojWorkflowV1alpha1NodeResult';
export * from './ioArgoprojWorkflowV1alpha1NodeStatus';
export * from './ioArgoprojWorkflowV1alpha1NodeSynchronizationStatus';
export * from './ioArgoprojWorkflowV1alpha1OAuth2Auth';
export * from './ioArgoprojWorkflowV1alpha1OAuth2EndpointParam';
export * from './ioArgoprojWorkflowV1alpha1OSSArtifact';
export * from './ioArgoprojWorkflowV1alpha1OSSArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1OSSLifecycleRule';
export * from './ioArgoprojWorkflowV1alpha1Outputs';
export * from './ioArgoprojWorkflowV1alpha1Parameter';
export * from './ioArgoprojWorkflowV1alpha1PodGC';
export * from './ioArgoprojWorkflowV1alpha1Prometheus';
export * from './ioArgoprojWorkflowV1alpha1RawArtifact';
export * from './ioArgoprojWorkflowV1alpha1ResourceTemplate';
export * from './ioArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest';
export * from './ioArgoprojWorkflowV1alpha1RetryAffinity';
export * from './ioArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest';
export * from './ioArgoprojWorkflowV1alpha1RetryStrategy';
export * from './ioArgoprojWorkflowV1alpha1S3Artifact';
export * from './ioArgoprojWorkflowV1alpha1S3ArtifactRepository';
export * from './ioArgoprojWorkflowV1alpha1S3EncryptionOptions';
export * from './ioArgoprojWorkflowV1alpha1ScriptTemplate';
export * from './ioArgoprojWorkflowV1alpha1SemaphoreHolding';
export * from './ioArgoprojWorkflowV1alpha1SemaphoreRef';
export * from './ioArgoprojWorkflowV1alpha1SemaphoreStatus';
export * from './ioArgoprojWorkflowV1alpha1Sequence';
export * from './ioArgoprojWorkflowV1alpha1Submit';
export * from './ioArgoprojWorkflowV1alpha1SubmitOpts';
export * from './ioArgoprojWorkflowV1alpha1SuspendTemplate';
export * from './ioArgoprojWorkflowV1alpha1Synchronization';
export * from './ioArgoprojWorkflowV1alpha1SynchronizationStatus';
export * from './ioArgoprojWorkflowV1alpha1TTLStrategy';
export * from './ioArgoprojWorkflowV1alpha1TarStrategy';
export * from './ioArgoprojWorkflowV1alpha1Template';
export * from './ioArgoprojWorkflowV1alpha1TemplateRef';
export * from './ioArgoprojWorkflowV1alpha1TransformationStep';
export * from './ioArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest';
export * from './ioArgoprojWorkflowV1alpha1UserContainer';
export * from './ioArgoprojWorkflowV1alpha1ValueFrom';
export * from './ioArgoprojWorkflowV1alpha1Version';
export * from './ioArgoprojWorkflowV1alpha1VolumeClaimGC';
export * from './ioArgoprojWorkflowV1alpha1Workflow';
export * from './ioArgoprojWorkflowV1alpha1WorkflowCreateRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowEventBinding';
export * from './ioArgoprojWorkflowV1alpha1WorkflowEventBindingList';
export * from './ioArgoprojWorkflowV1alpha1WorkflowEventBindingSpec';
export * from './ioArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC';
export * from './ioArgoprojWorkflowV1alpha1WorkflowLintRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowList';
export * from './ioArgoprojWorkflowV1alpha1WorkflowMetadata';
export * from './ioArgoprojWorkflowV1alpha1WorkflowResubmitRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowResumeRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowRetryRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowSetRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowSpec';
export * from './ioArgoprojWorkflowV1alpha1WorkflowStatus';
export * from './ioArgoprojWorkflowV1alpha1WorkflowStep';
export * from './ioArgoprojWorkflowV1alpha1WorkflowStopRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowSubmitRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowSuspendRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTaskSetSpec';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTaskSetStatus';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplate';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplateList';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplateRef';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowTerminateRequest';
export * from './ioArgoprojWorkflowV1alpha1WorkflowWatchEvent';
export * from './ioK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
export * from './ioK8sApiCoreV1Affinity';
export * from './ioK8sApiCoreV1AzureDiskVolumeSource';
export * from './ioK8sApiCoreV1AzureFileVolumeSource';
export * from './ioK8sApiCoreV1CSIVolumeSource';
export * from './ioK8sApiCoreV1Capabilities';
export * from './ioK8sApiCoreV1CephFSVolumeSource';
export * from './ioK8sApiCoreV1CinderVolumeSource';
export * from './ioK8sApiCoreV1ConfigMapEnvSource';
export * from './ioK8sApiCoreV1ConfigMapKeySelector';
export * from './ioK8sApiCoreV1ConfigMapProjection';
export * from './ioK8sApiCoreV1ConfigMapVolumeSource';
export * from './ioK8sApiCoreV1Container';
export * from './ioK8sApiCoreV1ContainerPort';
export * from './ioK8sApiCoreV1DownwardAPIProjection';
export * from './ioK8sApiCoreV1DownwardAPIVolumeFile';
export * from './ioK8sApiCoreV1DownwardAPIVolumeSource';
export * from './ioK8sApiCoreV1EmptyDirVolumeSource';
export * from './ioK8sApiCoreV1EnvFromSource';
export * from './ioK8sApiCoreV1EnvVar';
export * from './ioK8sApiCoreV1EnvVarSource';
export * from './ioK8sApiCoreV1EphemeralVolumeSource';
export * from './ioK8sApiCoreV1Event';
export * from './ioK8sApiCoreV1EventSeries';
export * from './ioK8sApiCoreV1EventSource';
export * from './ioK8sApiCoreV1ExecAction';
export * from './ioK8sApiCoreV1FCVolumeSource';
export * from './ioK8sApiCoreV1FlexVolumeSource';
export * from './ioK8sApiCoreV1FlockerVolumeSource';
export * from './ioK8sApiCoreV1GCEPersistentDiskVolumeSource';
export * from './ioK8sApiCoreV1GRPCAction';
export * from './ioK8sApiCoreV1GitRepoVolumeSource';
export * from './ioK8sApiCoreV1GlusterfsVolumeSource';
export * from './ioK8sApiCoreV1HTTPGetAction';
export * from './ioK8sApiCoreV1HTTPHeader';
export * from './ioK8sApiCoreV1HostAlias';
export * from './ioK8sApiCoreV1HostPathVolumeSource';
export * from './ioK8sApiCoreV1ISCSIVolumeSource';
export * from './ioK8sApiCoreV1KeyToPath';
export * from './ioK8sApiCoreV1Lifecycle';
export * from './ioK8sApiCoreV1LifecycleHandler';
export * from './ioK8sApiCoreV1LocalObjectReference';
export * from './ioK8sApiCoreV1NFSVolumeSource';
export * from './ioK8sApiCoreV1NodeAffinity';
export * from './ioK8sApiCoreV1NodeSelector';
export * from './ioK8sApiCoreV1NodeSelectorRequirement';
export * from './ioK8sApiCoreV1NodeSelectorTerm';
export * from './ioK8sApiCoreV1ObjectFieldSelector';
export * from './ioK8sApiCoreV1ObjectReference';
export * from './ioK8sApiCoreV1PersistentVolumeClaim';
export * from './ioK8sApiCoreV1PersistentVolumeClaimCondition';
export * from './ioK8sApiCoreV1PersistentVolumeClaimSpec';
export * from './ioK8sApiCoreV1PersistentVolumeClaimStatus';
export * from './ioK8sApiCoreV1PersistentVolumeClaimTemplate';
export * from './ioK8sApiCoreV1PersistentVolumeClaimVolumeSource';
export * from './ioK8sApiCoreV1PhotonPersistentDiskVolumeSource';
export * from './ioK8sApiCoreV1PodAffinity';
export * from './ioK8sApiCoreV1PodAffinityTerm';
export * from './ioK8sApiCoreV1PodAntiAffinity';
export * from './ioK8sApiCoreV1PodDNSConfig';
export * from './ioK8sApiCoreV1PodDNSConfigOption';
export * from './ioK8sApiCoreV1PodSecurityContext';
export * from './ioK8sApiCoreV1PortworxVolumeSource';
export * from './ioK8sApiCoreV1PreferredSchedulingTerm';
export * from './ioK8sApiCoreV1Probe';
export * from './ioK8sApiCoreV1ProjectedVolumeSource';
export * from './ioK8sApiCoreV1QuobyteVolumeSource';
export * from './ioK8sApiCoreV1RBDVolumeSource';
export * from './ioK8sApiCoreV1ResourceFieldSelector';
export * from './ioK8sApiCoreV1ResourceRequirements';
export * from './ioK8sApiCoreV1SELinuxOptions';
export * from './ioK8sApiCoreV1ScaleIOVolumeSource';
export * from './ioK8sApiCoreV1SeccompProfile';
export * from './ioK8sApiCoreV1SecretEnvSource';
export * from './ioK8sApiCoreV1SecretKeySelector';
export * from './ioK8sApiCoreV1SecretProjection';
export * from './ioK8sApiCoreV1SecretVolumeSource';
export * from './ioK8sApiCoreV1SecurityContext';
export * from './ioK8sApiCoreV1ServiceAccountTokenProjection';
export * from './ioK8sApiCoreV1ServicePort';
export * from './ioK8sApiCoreV1StorageOSVolumeSource';
export * from './ioK8sApiCoreV1Sysctl';
export * from './ioK8sApiCoreV1TCPSocketAction';
export * from './ioK8sApiCoreV1Toleration';
export * from './ioK8sApiCoreV1TypedLocalObjectReference';
export * from './ioK8sApiCoreV1Volume';
export * from './ioK8sApiCoreV1VolumeDevice';
export * from './ioK8sApiCoreV1VolumeMount';
export * from './ioK8sApiCoreV1VolumeProjection';
export * from './ioK8sApiCoreV1VsphereVirtualDiskVolumeSource';
export * from './ioK8sApiCoreV1WeightedPodAffinityTerm';
export * from './ioK8sApiCoreV1WindowsSecurityContextOptions';
export * from './ioK8sApiPolicyV1PodDisruptionBudgetSpec';
export * from './ioK8sApimachineryPkgApisMetaV1CreateOptions';
export * from './ioK8sApimachineryPkgApisMetaV1GroupVersionResource';
export * from './ioK8sApimachineryPkgApisMetaV1LabelSelector';
export * from './ioK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
export * from './ioK8sApimachineryPkgApisMetaV1ListMeta';
export * from './ioK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
export * from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
export * from './ioK8sApimachineryPkgApisMetaV1OwnerReference';
export * from './ioK8sApimachineryPkgApisMetaV1StatusCause';
export * from './sensorCreateSensorRequest';
export * from './sensorLogEntry';
export * from './sensorSensorWatchEvent';
export * from './sensorUpdateSensorRequest';
export * from './streamResultOfEventsourceEventSourceWatchEvent';
export * from './streamResultOfEventsourceLogEntry';
export * from './streamResultOfIoArgoprojWorkflowV1alpha1LogEntry';
export * from './streamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent';
export * from './streamResultOfIoK8sApiCoreV1Event';
export * from './streamResultOfSensorLogEntry';
export * from './streamResultOfSensorSensorWatchEvent';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { EventsourceCreateEventSourceRequest } from './eventsourceCreateEventSourceRequest';
import { EventsourceEventSourceWatchEvent } from './eventsourceEventSourceWatchEvent';
import { EventsourceLogEntry } from './eventsourceLogEntry';
import { EventsourceUpdateEventSourceRequest } from './eventsourceUpdateEventSourceRequest';
import { GoogleProtobufAny } from './googleProtobufAny';
import { GrpcGatewayRuntimeError } from './grpcGatewayRuntimeError';
import { GrpcGatewayRuntimeStreamError } from './grpcGatewayRuntimeStreamError';
import { IoArgoprojEventsV1alpha1AMQPConsumeConfig } from './ioArgoprojEventsV1alpha1AMQPConsumeConfig';
import { IoArgoprojEventsV1alpha1AMQPEventSource } from './ioArgoprojEventsV1alpha1AMQPEventSource';
import { IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig } from './ioArgoprojEventsV1alpha1AMQPExchangeDeclareConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueBindConfig } from './ioArgoprojEventsV1alpha1AMQPQueueBindConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig } from './ioArgoprojEventsV1alpha1AMQPQueueDeclareConfig';
import { IoArgoprojEventsV1alpha1AWSLambdaTrigger } from './ioArgoprojEventsV1alpha1AWSLambdaTrigger';
import { IoArgoprojEventsV1alpha1Amount } from './ioArgoprojEventsV1alpha1Amount';
import { IoArgoprojEventsV1alpha1ArgoWorkflowTrigger } from './ioArgoprojEventsV1alpha1ArgoWorkflowTrigger';
import { IoArgoprojEventsV1alpha1ArtifactLocation } from './ioArgoprojEventsV1alpha1ArtifactLocation';
import { IoArgoprojEventsV1alpha1AzureEventHubsTrigger } from './ioArgoprojEventsV1alpha1AzureEventHubsTrigger';
import { IoArgoprojEventsV1alpha1AzureEventsHubEventSource } from './ioArgoprojEventsV1alpha1AzureEventsHubEventSource';
import { IoArgoprojEventsV1alpha1Backoff } from './ioArgoprojEventsV1alpha1Backoff';
import { IoArgoprojEventsV1alpha1BasicAuth } from './ioArgoprojEventsV1alpha1BasicAuth';
import { IoArgoprojEventsV1alpha1BitbucketAuth } from './ioArgoprojEventsV1alpha1BitbucketAuth';
import { IoArgoprojEventsV1alpha1BitbucketBasicAuth } from './ioArgoprojEventsV1alpha1BitbucketBasicAuth';
import { IoArgoprojEventsV1alpha1BitbucketEventSource } from './ioArgoprojEventsV1alpha1BitbucketEventSource';
import { IoArgoprojEventsV1alpha1BitbucketRepository } from './ioArgoprojEventsV1alpha1BitbucketRepository';
import { IoArgoprojEventsV1alpha1BitbucketServerEventSource } from './ioArgoprojEventsV1alpha1BitbucketServerEventSource';
import { IoArgoprojEventsV1alpha1BitbucketServerRepository } from './ioArgoprojEventsV1alpha1BitbucketServerRepository';
import { IoArgoprojEventsV1alpha1CalendarEventSource } from './ioArgoprojEventsV1alpha1CalendarEventSource';
import { IoArgoprojEventsV1alpha1CatchupConfiguration } from './ioArgoprojEventsV1alpha1CatchupConfiguration';
import { IoArgoprojEventsV1alpha1Condition } from './ioArgoprojEventsV1alpha1Condition';
import { IoArgoprojEventsV1alpha1ConditionsResetByTime } from './ioArgoprojEventsV1alpha1ConditionsResetByTime';
import { IoArgoprojEventsV1alpha1ConditionsResetCriteria } from './ioArgoprojEventsV1alpha1ConditionsResetCriteria';
import { IoArgoprojEventsV1alpha1ConfigMapPersistence } from './ioArgoprojEventsV1alpha1ConfigMapPersistence';
import { IoArgoprojEventsV1alpha1CustomTrigger } from './ioArgoprojEventsV1alpha1CustomTrigger';
import { IoArgoprojEventsV1alpha1DataFilter } from './ioArgoprojEventsV1alpha1DataFilter';
import { IoArgoprojEventsV1alpha1EmitterEventSource } from './ioArgoprojEventsV1alpha1EmitterEventSource';
import { IoArgoprojEventsV1alpha1EventContext } from './ioArgoprojEventsV1alpha1EventContext';
import { IoArgoprojEventsV1alpha1EventDependency } from './ioArgoprojEventsV1alpha1EventDependency';
import { IoArgoprojEventsV1alpha1EventDependencyFilter } from './ioArgoprojEventsV1alpha1EventDependencyFilter';
import { IoArgoprojEventsV1alpha1EventDependencyTransformer } from './ioArgoprojEventsV1alpha1EventDependencyTransformer';
import { IoArgoprojEventsV1alpha1EventPersistence } from './ioArgoprojEventsV1alpha1EventPersistence';
import { IoArgoprojEventsV1alpha1EventSource } from './ioArgoprojEventsV1alpha1EventSource';
import { IoArgoprojEventsV1alpha1EventSourceFilter } from './ioArgoprojEventsV1alpha1EventSourceFilter';
import { IoArgoprojEventsV1alpha1EventSourceList } from './ioArgoprojEventsV1alpha1EventSourceList';
import { IoArgoprojEventsV1alpha1EventSourceSpec } from './ioArgoprojEventsV1alpha1EventSourceSpec';
import { IoArgoprojEventsV1alpha1EventSourceStatus } from './ioArgoprojEventsV1alpha1EventSourceStatus';
import { IoArgoprojEventsV1alpha1ExprFilter } from './ioArgoprojEventsV1alpha1ExprFilter';
import { IoArgoprojEventsV1alpha1FileArtifact } from './ioArgoprojEventsV1alpha1FileArtifact';
import { IoArgoprojEventsV1alpha1FileEventSource } from './ioArgoprojEventsV1alpha1FileEventSource';
import { IoArgoprojEventsV1alpha1GenericEventSource } from './ioArgoprojEventsV1alpha1GenericEventSource';
import { IoArgoprojEventsV1alpha1GitArtifact } from './ioArgoprojEventsV1alpha1GitArtifact';
import { IoArgoprojEventsV1alpha1GitCreds } from './ioArgoprojEventsV1alpha1GitCreds';
import { IoArgoprojEventsV1alpha1GitRemoteConfig } from './ioArgoprojEventsV1alpha1GitRemoteConfig';
import { IoArgoprojEventsV1alpha1GithubAppCreds } from './ioArgoprojEventsV1alpha1GithubAppCreds';
import { IoArgoprojEventsV1alpha1GithubEventSource } from './ioArgoprojEventsV1alpha1GithubEventSource';
import { IoArgoprojEventsV1alpha1GitlabEventSource } from './ioArgoprojEventsV1alpha1GitlabEventSource';
import { IoArgoprojEventsV1alpha1HDFSEventSource } from './ioArgoprojEventsV1alpha1HDFSEventSource';
import { IoArgoprojEventsV1alpha1HTTPTrigger } from './ioArgoprojEventsV1alpha1HTTPTrigger';
import { IoArgoprojEventsV1alpha1Int64OrString } from './ioArgoprojEventsV1alpha1Int64OrString';
import { IoArgoprojEventsV1alpha1K8SResourcePolicy } from './ioArgoprojEventsV1alpha1K8SResourcePolicy';
import { IoArgoprojEventsV1alpha1KafkaConsumerGroup } from './ioArgoprojEventsV1alpha1KafkaConsumerGroup';
import { IoArgoprojEventsV1alpha1KafkaEventSource } from './ioArgoprojEventsV1alpha1KafkaEventSource';
import { IoArgoprojEventsV1alpha1KafkaTrigger } from './ioArgoprojEventsV1alpha1KafkaTrigger';
import { IoArgoprojEventsV1alpha1LogTrigger } from './ioArgoprojEventsV1alpha1LogTrigger';
import { IoArgoprojEventsV1alpha1MQTTEventSource } from './ioArgoprojEventsV1alpha1MQTTEventSource';
import { IoArgoprojEventsV1alpha1Metadata } from './ioArgoprojEventsV1alpha1Metadata';
import { IoArgoprojEventsV1alpha1NATSAuth } from './ioArgoprojEventsV1alpha1NATSAuth';
import { IoArgoprojEventsV1alpha1NATSEventsSource } from './ioArgoprojEventsV1alpha1NATSEventsSource';
import { IoArgoprojEventsV1alpha1NATSTrigger } from './ioArgoprojEventsV1alpha1NATSTrigger';
import { IoArgoprojEventsV1alpha1NSQEventSource } from './ioArgoprojEventsV1alpha1NSQEventSource';
import { IoArgoprojEventsV1alpha1OpenWhiskTrigger } from './ioArgoprojEventsV1alpha1OpenWhiskTrigger';
import { IoArgoprojEventsV1alpha1OwnedRepositories } from './ioArgoprojEventsV1alpha1OwnedRepositories';
import { IoArgoprojEventsV1alpha1PayloadField } from './ioArgoprojEventsV1alpha1PayloadField';
import { IoArgoprojEventsV1alpha1PubSubEventSource } from './ioArgoprojEventsV1alpha1PubSubEventSource';
import { IoArgoprojEventsV1alpha1PulsarEventSource } from './ioArgoprojEventsV1alpha1PulsarEventSource';
import { IoArgoprojEventsV1alpha1PulsarTrigger } from './ioArgoprojEventsV1alpha1PulsarTrigger';
import { IoArgoprojEventsV1alpha1RateLimit } from './ioArgoprojEventsV1alpha1RateLimit';
import { IoArgoprojEventsV1alpha1RedisEventSource } from './ioArgoprojEventsV1alpha1RedisEventSource';
import { IoArgoprojEventsV1alpha1RedisStreamEventSource } from './ioArgoprojEventsV1alpha1RedisStreamEventSource';
import { IoArgoprojEventsV1alpha1Resource } from './ioArgoprojEventsV1alpha1Resource';
import { IoArgoprojEventsV1alpha1ResourceEventSource } from './ioArgoprojEventsV1alpha1ResourceEventSource';
import { IoArgoprojEventsV1alpha1ResourceFilter } from './ioArgoprojEventsV1alpha1ResourceFilter';
import { IoArgoprojEventsV1alpha1S3Artifact } from './ioArgoprojEventsV1alpha1S3Artifact';
import { IoArgoprojEventsV1alpha1S3Bucket } from './ioArgoprojEventsV1alpha1S3Bucket';
import { IoArgoprojEventsV1alpha1S3Filter } from './ioArgoprojEventsV1alpha1S3Filter';
import { IoArgoprojEventsV1alpha1SASLConfig } from './ioArgoprojEventsV1alpha1SASLConfig';
import { IoArgoprojEventsV1alpha1SNSEventSource } from './ioArgoprojEventsV1alpha1SNSEventSource';
import { IoArgoprojEventsV1alpha1SQSEventSource } from './ioArgoprojEventsV1alpha1SQSEventSource';
import { IoArgoprojEventsV1alpha1SecureHeader } from './ioArgoprojEventsV1alpha1SecureHeader';
import { IoArgoprojEventsV1alpha1Selector } from './ioArgoprojEventsV1alpha1Selector';
import { IoArgoprojEventsV1alpha1Sensor } from './ioArgoprojEventsV1alpha1Sensor';
import { IoArgoprojEventsV1alpha1SensorList } from './ioArgoprojEventsV1alpha1SensorList';
import { IoArgoprojEventsV1alpha1SensorSpec } from './ioArgoprojEventsV1alpha1SensorSpec';
import { IoArgoprojEventsV1alpha1SensorStatus } from './ioArgoprojEventsV1alpha1SensorStatus';
import { IoArgoprojEventsV1alpha1Service } from './ioArgoprojEventsV1alpha1Service';
import { IoArgoprojEventsV1alpha1SlackEventSource } from './ioArgoprojEventsV1alpha1SlackEventSource';
import { IoArgoprojEventsV1alpha1SlackTrigger } from './ioArgoprojEventsV1alpha1SlackTrigger';
import { IoArgoprojEventsV1alpha1StandardK8STrigger } from './ioArgoprojEventsV1alpha1StandardK8STrigger';
import { IoArgoprojEventsV1alpha1Status } from './ioArgoprojEventsV1alpha1Status';
import { IoArgoprojEventsV1alpha1StatusPolicy } from './ioArgoprojEventsV1alpha1StatusPolicy';
import { IoArgoprojEventsV1alpha1StorageGridEventSource } from './ioArgoprojEventsV1alpha1StorageGridEventSource';
import { IoArgoprojEventsV1alpha1StorageGridFilter } from './ioArgoprojEventsV1alpha1StorageGridFilter';
import { IoArgoprojEventsV1alpha1StripeEventSource } from './ioArgoprojEventsV1alpha1StripeEventSource';
import { IoArgoprojEventsV1alpha1TLSConfig } from './ioArgoprojEventsV1alpha1TLSConfig';
import { IoArgoprojEventsV1alpha1Template } from './ioArgoprojEventsV1alpha1Template';
import { IoArgoprojEventsV1alpha1TimeFilter } from './ioArgoprojEventsV1alpha1TimeFilter';
import { IoArgoprojEventsV1alpha1Trigger } from './ioArgoprojEventsV1alpha1Trigger';
import { IoArgoprojEventsV1alpha1TriggerParameter } from './ioArgoprojEventsV1alpha1TriggerParameter';
import { IoArgoprojEventsV1alpha1TriggerParameterSource } from './ioArgoprojEventsV1alpha1TriggerParameterSource';
import { IoArgoprojEventsV1alpha1TriggerPolicy } from './ioArgoprojEventsV1alpha1TriggerPolicy';
import { IoArgoprojEventsV1alpha1TriggerTemplate } from './ioArgoprojEventsV1alpha1TriggerTemplate';
import { IoArgoprojEventsV1alpha1URLArtifact } from './ioArgoprojEventsV1alpha1URLArtifact';
import { IoArgoprojEventsV1alpha1ValueFromSource } from './ioArgoprojEventsV1alpha1ValueFromSource';
import { IoArgoprojEventsV1alpha1WatchPathConfig } from './ioArgoprojEventsV1alpha1WatchPathConfig';
import { IoArgoprojEventsV1alpha1WebhookContext } from './ioArgoprojEventsV1alpha1WebhookContext';
import { IoArgoprojEventsV1alpha1WebhookEventSource } from './ioArgoprojEventsV1alpha1WebhookEventSource';
import { IoArgoprojWorkflowV1alpha1ArchiveStrategy } from './ioArgoprojWorkflowV1alpha1ArchiveStrategy';
import { IoArgoprojWorkflowV1alpha1Arguments } from './ioArgoprojWorkflowV1alpha1Arguments';
import { IoArgoprojWorkflowV1alpha1ArtGCStatus } from './ioArgoprojWorkflowV1alpha1ArtGCStatus';
import { IoArgoprojWorkflowV1alpha1Artifact } from './ioArgoprojWorkflowV1alpha1Artifact';
import { IoArgoprojWorkflowV1alpha1ArtifactGC } from './ioArgoprojWorkflowV1alpha1ArtifactGC';
import { IoArgoprojWorkflowV1alpha1ArtifactGCSpec } from './ioArgoprojWorkflowV1alpha1ArtifactGCSpec';
import { IoArgoprojWorkflowV1alpha1ArtifactGCStatus } from './ioArgoprojWorkflowV1alpha1ArtifactGCStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactLocation } from './ioArgoprojWorkflowV1alpha1ArtifactLocation';
import { IoArgoprojWorkflowV1alpha1ArtifactNodeSpec } from './ioArgoprojWorkflowV1alpha1ArtifactNodeSpec';
import { IoArgoprojWorkflowV1alpha1ArtifactPaths } from './ioArgoprojWorkflowV1alpha1ArtifactPaths';
import { IoArgoprojWorkflowV1alpha1ArtifactRepository } from './ioArgoprojWorkflowV1alpha1ArtifactRepository';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef } from './ioArgoprojWorkflowV1alpha1ArtifactRepositoryRef';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus } from './ioArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactResult } from './ioArgoprojWorkflowV1alpha1ArtifactResult';
import { IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus } from './ioArgoprojWorkflowV1alpha1ArtifactResultNodeStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactoryArtifact } from './ioArgoprojWorkflowV1alpha1ArtifactoryArtifact';
import { IoArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository } from './ioArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository';
import { IoArgoprojWorkflowV1alpha1AzureArtifact } from './ioArgoprojWorkflowV1alpha1AzureArtifact';
import { IoArgoprojWorkflowV1alpha1AzureArtifactRepository } from './ioArgoprojWorkflowV1alpha1AzureArtifactRepository';
import { IoArgoprojWorkflowV1alpha1Backoff } from './ioArgoprojWorkflowV1alpha1Backoff';
import { IoArgoprojWorkflowV1alpha1BasicAuth } from './ioArgoprojWorkflowV1alpha1BasicAuth';
import { IoArgoprojWorkflowV1alpha1Cache } from './ioArgoprojWorkflowV1alpha1Cache';
import { IoArgoprojWorkflowV1alpha1ClientCertAuth } from './ioArgoprojWorkflowV1alpha1ClientCertAuth';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate } from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplate';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest } from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest } from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList } from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList';
import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest } from './ioArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest';
import { IoArgoprojWorkflowV1alpha1CollectEventRequest } from './ioArgoprojWorkflowV1alpha1CollectEventRequest';
import { IoArgoprojWorkflowV1alpha1Column } from './ioArgoprojWorkflowV1alpha1Column';
import { IoArgoprojWorkflowV1alpha1Condition } from './ioArgoprojWorkflowV1alpha1Condition';
import { IoArgoprojWorkflowV1alpha1ContainerNode } from './ioArgoprojWorkflowV1alpha1ContainerNode';
import { IoArgoprojWorkflowV1alpha1ContainerSetRetryStrategy } from './ioArgoprojWorkflowV1alpha1ContainerSetRetryStrategy';
import { IoArgoprojWorkflowV1alpha1ContainerSetTemplate } from './ioArgoprojWorkflowV1alpha1ContainerSetTemplate';
import { IoArgoprojWorkflowV1alpha1ContinueOn } from './ioArgoprojWorkflowV1alpha1ContinueOn';
import { IoArgoprojWorkflowV1alpha1Counter } from './ioArgoprojWorkflowV1alpha1Counter';
import { IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest } from './ioArgoprojWorkflowV1alpha1CreateCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1CreateS3BucketOptions } from './ioArgoprojWorkflowV1alpha1CreateS3BucketOptions';
import { IoArgoprojWorkflowV1alpha1CronWorkflow } from './ioArgoprojWorkflowV1alpha1CronWorkflow';
import { IoArgoprojWorkflowV1alpha1CronWorkflowList } from './ioArgoprojWorkflowV1alpha1CronWorkflowList';
import { IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest } from './ioArgoprojWorkflowV1alpha1CronWorkflowResumeRequest';
import { IoArgoprojWorkflowV1alpha1CronWorkflowSpec } from './ioArgoprojWorkflowV1alpha1CronWorkflowSpec';
import { IoArgoprojWorkflowV1alpha1CronWorkflowStatus } from './ioArgoprojWorkflowV1alpha1CronWorkflowStatus';
import { IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest } from './ioArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest';
import { IoArgoprojWorkflowV1alpha1DAGTask } from './ioArgoprojWorkflowV1alpha1DAGTask';
import { IoArgoprojWorkflowV1alpha1DAGTemplate } from './ioArgoprojWorkflowV1alpha1DAGTemplate';
import { IoArgoprojWorkflowV1alpha1Data } from './ioArgoprojWorkflowV1alpha1Data';
import { IoArgoprojWorkflowV1alpha1DataSource } from './ioArgoprojWorkflowV1alpha1DataSource';
import { IoArgoprojWorkflowV1alpha1Event } from './ioArgoprojWorkflowV1alpha1Event';
import { IoArgoprojWorkflowV1alpha1ExecutorConfig } from './ioArgoprojWorkflowV1alpha1ExecutorConfig';
import { IoArgoprojWorkflowV1alpha1GCSArtifact } from './ioArgoprojWorkflowV1alpha1GCSArtifact';
import { IoArgoprojWorkflowV1alpha1GCSArtifactRepository } from './ioArgoprojWorkflowV1alpha1GCSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1Gauge } from './ioArgoprojWorkflowV1alpha1Gauge';
import { IoArgoprojWorkflowV1alpha1GetUserInfoResponse } from './ioArgoprojWorkflowV1alpha1GetUserInfoResponse';
import { IoArgoprojWorkflowV1alpha1GitArtifact } from './ioArgoprojWorkflowV1alpha1GitArtifact';
import { IoArgoprojWorkflowV1alpha1HDFSArtifact } from './ioArgoprojWorkflowV1alpha1HDFSArtifact';
import { IoArgoprojWorkflowV1alpha1HDFSArtifactRepository } from './ioArgoprojWorkflowV1alpha1HDFSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1HTTP } from './ioArgoprojWorkflowV1alpha1HTTP';
import { IoArgoprojWorkflowV1alpha1HTTPArtifact } from './ioArgoprojWorkflowV1alpha1HTTPArtifact';
import { IoArgoprojWorkflowV1alpha1HTTPAuth } from './ioArgoprojWorkflowV1alpha1HTTPAuth';
import { IoArgoprojWorkflowV1alpha1HTTPBodySource } from './ioArgoprojWorkflowV1alpha1HTTPBodySource';
import { IoArgoprojWorkflowV1alpha1HTTPHeader } from './ioArgoprojWorkflowV1alpha1HTTPHeader';
import { IoArgoprojWorkflowV1alpha1HTTPHeaderSource } from './ioArgoprojWorkflowV1alpha1HTTPHeaderSource';
import { IoArgoprojWorkflowV1alpha1Header } from './ioArgoprojWorkflowV1alpha1Header';
import { IoArgoprojWorkflowV1alpha1Histogram } from './ioArgoprojWorkflowV1alpha1Histogram';
import { IoArgoprojWorkflowV1alpha1InfoResponse } from './ioArgoprojWorkflowV1alpha1InfoResponse';
import { IoArgoprojWorkflowV1alpha1Inputs } from './ioArgoprojWorkflowV1alpha1Inputs';
import { IoArgoprojWorkflowV1alpha1LabelKeys } from './ioArgoprojWorkflowV1alpha1LabelKeys';
import { IoArgoprojWorkflowV1alpha1LabelValueFrom } from './ioArgoprojWorkflowV1alpha1LabelValueFrom';
import { IoArgoprojWorkflowV1alpha1LabelValues } from './ioArgoprojWorkflowV1alpha1LabelValues';
import { IoArgoprojWorkflowV1alpha1LifecycleHook } from './ioArgoprojWorkflowV1alpha1LifecycleHook';
import { IoArgoprojWorkflowV1alpha1Link } from './ioArgoprojWorkflowV1alpha1Link';
import { IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest } from './ioArgoprojWorkflowV1alpha1LintCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1LogEntry } from './ioArgoprojWorkflowV1alpha1LogEntry';
import { IoArgoprojWorkflowV1alpha1ManifestFrom } from './ioArgoprojWorkflowV1alpha1ManifestFrom';
import { IoArgoprojWorkflowV1alpha1MemoizationStatus } from './ioArgoprojWorkflowV1alpha1MemoizationStatus';
import { IoArgoprojWorkflowV1alpha1Memoize } from './ioArgoprojWorkflowV1alpha1Memoize';
import { IoArgoprojWorkflowV1alpha1Metadata } from './ioArgoprojWorkflowV1alpha1Metadata';
import { IoArgoprojWorkflowV1alpha1MetricLabel } from './ioArgoprojWorkflowV1alpha1MetricLabel';
import { IoArgoprojWorkflowV1alpha1Metrics } from './ioArgoprojWorkflowV1alpha1Metrics';
import { IoArgoprojWorkflowV1alpha1Mutex } from './ioArgoprojWorkflowV1alpha1Mutex';
import { IoArgoprojWorkflowV1alpha1MutexHolding } from './ioArgoprojWorkflowV1alpha1MutexHolding';
import { IoArgoprojWorkflowV1alpha1MutexStatus } from './ioArgoprojWorkflowV1alpha1MutexStatus';
import { IoArgoprojWorkflowV1alpha1NodeResult } from './ioArgoprojWorkflowV1alpha1NodeResult';
import { IoArgoprojWorkflowV1alpha1NodeStatus } from './ioArgoprojWorkflowV1alpha1NodeStatus';
import { IoArgoprojWorkflowV1alpha1NodeSynchronizationStatus } from './ioArgoprojWorkflowV1alpha1NodeSynchronizationStatus';
import { IoArgoprojWorkflowV1alpha1OAuth2Auth } from './ioArgoprojWorkflowV1alpha1OAuth2Auth';
import { IoArgoprojWorkflowV1alpha1OAuth2EndpointParam } from './ioArgoprojWorkflowV1alpha1OAuth2EndpointParam';
import { IoArgoprojWorkflowV1alpha1OSSArtifact } from './ioArgoprojWorkflowV1alpha1OSSArtifact';
import { IoArgoprojWorkflowV1alpha1OSSArtifactRepository } from './ioArgoprojWorkflowV1alpha1OSSArtifactRepository';
import { IoArgoprojWorkflowV1alpha1OSSLifecycleRule } from './ioArgoprojWorkflowV1alpha1OSSLifecycleRule';
import { IoArgoprojWorkflowV1alpha1Outputs } from './ioArgoprojWorkflowV1alpha1Outputs';
import { IoArgoprojWorkflowV1alpha1Parameter } from './ioArgoprojWorkflowV1alpha1Parameter';
import { IoArgoprojWorkflowV1alpha1PodGC } from './ioArgoprojWorkflowV1alpha1PodGC';
import { IoArgoprojWorkflowV1alpha1Prometheus } from './ioArgoprojWorkflowV1alpha1Prometheus';
import { IoArgoprojWorkflowV1alpha1RawArtifact } from './ioArgoprojWorkflowV1alpha1RawArtifact';
import { IoArgoprojWorkflowV1alpha1ResourceTemplate } from './ioArgoprojWorkflowV1alpha1ResourceTemplate';
import { IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest } from './ioArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1RetryAffinity } from './ioArgoprojWorkflowV1alpha1RetryAffinity';
import { IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest } from './ioArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1RetryStrategy } from './ioArgoprojWorkflowV1alpha1RetryStrategy';
import { IoArgoprojWorkflowV1alpha1S3Artifact } from './ioArgoprojWorkflowV1alpha1S3Artifact';
import { IoArgoprojWorkflowV1alpha1S3ArtifactRepository } from './ioArgoprojWorkflowV1alpha1S3ArtifactRepository';
import { IoArgoprojWorkflowV1alpha1S3EncryptionOptions } from './ioArgoprojWorkflowV1alpha1S3EncryptionOptions';
import { IoArgoprojWorkflowV1alpha1ScriptTemplate } from './ioArgoprojWorkflowV1alpha1ScriptTemplate';
import { IoArgoprojWorkflowV1alpha1SemaphoreHolding } from './ioArgoprojWorkflowV1alpha1SemaphoreHolding';
import { IoArgoprojWorkflowV1alpha1SemaphoreRef } from './ioArgoprojWorkflowV1alpha1SemaphoreRef';
import { IoArgoprojWorkflowV1alpha1SemaphoreStatus } from './ioArgoprojWorkflowV1alpha1SemaphoreStatus';
import { IoArgoprojWorkflowV1alpha1Sequence } from './ioArgoprojWorkflowV1alpha1Sequence';
import { IoArgoprojWorkflowV1alpha1Submit } from './ioArgoprojWorkflowV1alpha1Submit';
import { IoArgoprojWorkflowV1alpha1SubmitOpts } from './ioArgoprojWorkflowV1alpha1SubmitOpts';
import { IoArgoprojWorkflowV1alpha1SuspendTemplate } from './ioArgoprojWorkflowV1alpha1SuspendTemplate';
import { IoArgoprojWorkflowV1alpha1Synchronization } from './ioArgoprojWorkflowV1alpha1Synchronization';
import { IoArgoprojWorkflowV1alpha1SynchronizationStatus } from './ioArgoprojWorkflowV1alpha1SynchronizationStatus';
import { IoArgoprojWorkflowV1alpha1TTLStrategy } from './ioArgoprojWorkflowV1alpha1TTLStrategy';
import { IoArgoprojWorkflowV1alpha1TarStrategy } from './ioArgoprojWorkflowV1alpha1TarStrategy';
import { IoArgoprojWorkflowV1alpha1Template } from './ioArgoprojWorkflowV1alpha1Template';
import { IoArgoprojWorkflowV1alpha1TemplateRef } from './ioArgoprojWorkflowV1alpha1TemplateRef';
import { IoArgoprojWorkflowV1alpha1TransformationStep } from './ioArgoprojWorkflowV1alpha1TransformationStep';
import { IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest } from './ioArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1UserContainer } from './ioArgoprojWorkflowV1alpha1UserContainer';
import { IoArgoprojWorkflowV1alpha1ValueFrom } from './ioArgoprojWorkflowV1alpha1ValueFrom';
import { IoArgoprojWorkflowV1alpha1Version } from './ioArgoprojWorkflowV1alpha1Version';
import { IoArgoprojWorkflowV1alpha1VolumeClaimGC } from './ioArgoprojWorkflowV1alpha1VolumeClaimGC';
import { IoArgoprojWorkflowV1alpha1Workflow } from './ioArgoprojWorkflowV1alpha1Workflow';
import { IoArgoprojWorkflowV1alpha1WorkflowCreateRequest } from './ioArgoprojWorkflowV1alpha1WorkflowCreateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBinding } from './ioArgoprojWorkflowV1alpha1WorkflowEventBinding';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBindingList } from './ioArgoprojWorkflowV1alpha1WorkflowEventBindingList';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBindingSpec } from './ioArgoprojWorkflowV1alpha1WorkflowEventBindingSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC } from './ioArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC';
import { IoArgoprojWorkflowV1alpha1WorkflowLintRequest } from './ioArgoprojWorkflowV1alpha1WorkflowLintRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowList } from './ioArgoprojWorkflowV1alpha1WorkflowList';
import { IoArgoprojWorkflowV1alpha1WorkflowMetadata } from './ioArgoprojWorkflowV1alpha1WorkflowMetadata';
import { IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest } from './ioArgoprojWorkflowV1alpha1WorkflowResubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowResumeRequest } from './ioArgoprojWorkflowV1alpha1WorkflowResumeRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowRetryRequest } from './ioArgoprojWorkflowV1alpha1WorkflowRetryRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSetRequest } from './ioArgoprojWorkflowV1alpha1WorkflowSetRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSpec } from './ioArgoprojWorkflowV1alpha1WorkflowSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowStatus } from './ioArgoprojWorkflowV1alpha1WorkflowStatus';
import { IoArgoprojWorkflowV1alpha1WorkflowStep } from './ioArgoprojWorkflowV1alpha1WorkflowStep';
import { IoArgoprojWorkflowV1alpha1WorkflowStopRequest } from './ioArgoprojWorkflowV1alpha1WorkflowStopRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest } from './ioArgoprojWorkflowV1alpha1WorkflowSubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest } from './ioArgoprojWorkflowV1alpha1WorkflowSuspendRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTaskSetSpec } from './ioArgoprojWorkflowV1alpha1WorkflowTaskSetSpec';
import { IoArgoprojWorkflowV1alpha1WorkflowTaskSetStatus } from './ioArgoprojWorkflowV1alpha1WorkflowTaskSetStatus';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplate } from './ioArgoprojWorkflowV1alpha1WorkflowTemplate';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest } from './ioArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest } from './ioArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateList } from './ioArgoprojWorkflowV1alpha1WorkflowTemplateList';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateRef } from './ioArgoprojWorkflowV1alpha1WorkflowTemplateRef';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest } from './ioArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest } from './ioArgoprojWorkflowV1alpha1WorkflowTerminateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowWatchEvent } from './ioArgoprojWorkflowV1alpha1WorkflowWatchEvent';
import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './ioK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1Affinity } from './ioK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1AzureDiskVolumeSource } from './ioK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFileVolumeSource } from './ioK8sApiCoreV1AzureFileVolumeSource';
import { IoK8sApiCoreV1CSIVolumeSource } from './ioK8sApiCoreV1CSIVolumeSource';
import { IoK8sApiCoreV1Capabilities } from './ioK8sApiCoreV1Capabilities';
import { IoK8sApiCoreV1CephFSVolumeSource } from './ioK8sApiCoreV1CephFSVolumeSource';
import { IoK8sApiCoreV1CinderVolumeSource } from './ioK8sApiCoreV1CinderVolumeSource';
import { IoK8sApiCoreV1ConfigMapEnvSource } from './ioK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1ConfigMapKeySelector } from './ioK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1ConfigMapProjection } from './ioK8sApiCoreV1ConfigMapProjection';
import { IoK8sApiCoreV1ConfigMapVolumeSource } from './ioK8sApiCoreV1ConfigMapVolumeSource';
import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiCoreV1ContainerPort } from './ioK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1DownwardAPIProjection } from './ioK8sApiCoreV1DownwardAPIProjection';
import { IoK8sApiCoreV1DownwardAPIVolumeFile } from './ioK8sApiCoreV1DownwardAPIVolumeFile';
import { IoK8sApiCoreV1DownwardAPIVolumeSource } from './ioK8sApiCoreV1DownwardAPIVolumeSource';
import { IoK8sApiCoreV1EmptyDirVolumeSource } from './ioK8sApiCoreV1EmptyDirVolumeSource';
import { IoK8sApiCoreV1EnvFromSource } from './ioK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVar } from './ioK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1EnvVarSource } from './ioK8sApiCoreV1EnvVarSource';
import { IoK8sApiCoreV1EphemeralVolumeSource } from './ioK8sApiCoreV1EphemeralVolumeSource';
import { IoK8sApiCoreV1Event } from './ioK8sApiCoreV1Event';
import { IoK8sApiCoreV1EventSeries } from './ioK8sApiCoreV1EventSeries';
import { IoK8sApiCoreV1EventSource } from './ioK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ExecAction } from './ioK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1FCVolumeSource } from './ioK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexVolumeSource } from './ioK8sApiCoreV1FlexVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSource } from './ioK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './ioK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GRPCAction } from './ioK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1GitRepoVolumeSource } from './ioK8sApiCoreV1GitRepoVolumeSource';
import { IoK8sApiCoreV1GlusterfsVolumeSource } from './ioK8sApiCoreV1GlusterfsVolumeSource';
import { IoK8sApiCoreV1HTTPGetAction } from './ioK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1HTTPHeader } from './ioK8sApiCoreV1HTTPHeader';
import { IoK8sApiCoreV1HostAlias } from './ioK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1HostPathVolumeSource } from './ioK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIVolumeSource } from './ioK8sApiCoreV1ISCSIVolumeSource';
import { IoK8sApiCoreV1KeyToPath } from './ioK8sApiCoreV1KeyToPath';
import { IoK8sApiCoreV1Lifecycle } from './ioK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1LifecycleHandler } from './ioK8sApiCoreV1LifecycleHandler';
import { IoK8sApiCoreV1LocalObjectReference } from './ioK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1NFSVolumeSource } from './ioK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1NodeAffinity } from './ioK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1NodeSelector } from './ioK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1NodeSelectorRequirement } from './ioK8sApiCoreV1NodeSelectorRequirement';
import { IoK8sApiCoreV1NodeSelectorTerm } from './ioK8sApiCoreV1NodeSelectorTerm';
import { IoK8sApiCoreV1ObjectFieldSelector } from './ioK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ObjectReference } from './ioK8sApiCoreV1ObjectReference';
import { IoK8sApiCoreV1PersistentVolumeClaim } from './ioK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PersistentVolumeClaimCondition } from './ioK8sApiCoreV1PersistentVolumeClaimCondition';
import { IoK8sApiCoreV1PersistentVolumeClaimSpec } from './ioK8sApiCoreV1PersistentVolumeClaimSpec';
import { IoK8sApiCoreV1PersistentVolumeClaimStatus } from './ioK8sApiCoreV1PersistentVolumeClaimStatus';
import { IoK8sApiCoreV1PersistentVolumeClaimTemplate } from './ioK8sApiCoreV1PersistentVolumeClaimTemplate';
import { IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from './ioK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './ioK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1PodAffinity } from './ioK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAffinityTerm } from './ioK8sApiCoreV1PodAffinityTerm';
import { IoK8sApiCoreV1PodAntiAffinity } from './ioK8sApiCoreV1PodAntiAffinity';
import { IoK8sApiCoreV1PodDNSConfig } from './ioK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodDNSConfigOption } from './ioK8sApiCoreV1PodDNSConfigOption';
import { IoK8sApiCoreV1PodSecurityContext } from './ioK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1PortworxVolumeSource } from './ioK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1PreferredSchedulingTerm } from './ioK8sApiCoreV1PreferredSchedulingTerm';
import { IoK8sApiCoreV1Probe } from './ioK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ProjectedVolumeSource } from './ioK8sApiCoreV1ProjectedVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSource } from './ioK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDVolumeSource } from './ioK8sApiCoreV1RBDVolumeSource';
import { IoK8sApiCoreV1ResourceFieldSelector } from './ioK8sApiCoreV1ResourceFieldSelector';
import { IoK8sApiCoreV1ResourceRequirements } from './ioK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SELinuxOptions } from './ioK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1ScaleIOVolumeSource } from './ioK8sApiCoreV1ScaleIOVolumeSource';
import { IoK8sApiCoreV1SeccompProfile } from './ioK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1SecretEnvSource } from './ioK8sApiCoreV1SecretEnvSource';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';
import { IoK8sApiCoreV1SecretProjection } from './ioK8sApiCoreV1SecretProjection';
import { IoK8sApiCoreV1SecretVolumeSource } from './ioK8sApiCoreV1SecretVolumeSource';
import { IoK8sApiCoreV1SecurityContext } from './ioK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1ServiceAccountTokenProjection } from './ioK8sApiCoreV1ServiceAccountTokenProjection';
import { IoK8sApiCoreV1ServicePort } from './ioK8sApiCoreV1ServicePort';
import { IoK8sApiCoreV1StorageOSVolumeSource } from './ioK8sApiCoreV1StorageOSVolumeSource';
import { IoK8sApiCoreV1Sysctl } from './ioK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1TCPSocketAction } from './ioK8sApiCoreV1TCPSocketAction';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1TypedLocalObjectReference } from './ioK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiCoreV1Volume } from './ioK8sApiCoreV1Volume';
import { IoK8sApiCoreV1VolumeDevice } from './ioK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMount } from './ioK8sApiCoreV1VolumeMount';
import { IoK8sApiCoreV1VolumeProjection } from './ioK8sApiCoreV1VolumeProjection';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './ioK8sApiCoreV1VsphereVirtualDiskVolumeSource';
import { IoK8sApiCoreV1WeightedPodAffinityTerm } from './ioK8sApiCoreV1WeightedPodAffinityTerm';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from './ioK8sApiCoreV1WindowsSecurityContextOptions';
import { IoK8sApiPolicyV1PodDisruptionBudgetSpec } from './ioK8sApiPolicyV1PodDisruptionBudgetSpec';
import { IoK8sApimachineryPkgApisMetaV1CreateOptions } from './ioK8sApimachineryPkgApisMetaV1CreateOptions';
import { IoK8sApimachineryPkgApisMetaV1GroupVersionResource } from './ioK8sApimachineryPkgApisMetaV1GroupVersionResource';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './ioK8sApimachineryPkgApisMetaV1LabelSelector';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from './ioK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from './ioK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from './ioK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
import { IoK8sApimachineryPkgApisMetaV1OwnerReference } from './ioK8sApimachineryPkgApisMetaV1OwnerReference';
import { IoK8sApimachineryPkgApisMetaV1StatusCause } from './ioK8sApimachineryPkgApisMetaV1StatusCause';
import { SensorCreateSensorRequest } from './sensorCreateSensorRequest';
import { SensorLogEntry } from './sensorLogEntry';
import { SensorSensorWatchEvent } from './sensorSensorWatchEvent';
import { SensorUpdateSensorRequest } from './sensorUpdateSensorRequest';
import { StreamResultOfEventsourceEventSourceWatchEvent } from './streamResultOfEventsourceEventSourceWatchEvent';
import { StreamResultOfEventsourceLogEntry } from './streamResultOfEventsourceLogEntry';
import { StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry } from './streamResultOfIoArgoprojWorkflowV1alpha1LogEntry';
import { StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent } from './streamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent';
import { StreamResultOfIoK8sApiCoreV1Event } from './streamResultOfIoK8sApiCoreV1Event';
import { StreamResultOfSensorLogEntry } from './streamResultOfSensorLogEntry';
import { StreamResultOfSensorSensorWatchEvent } from './streamResultOfSensorSensorWatchEvent';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "IoK8sApiCoreV1Container.ImagePullPolicyEnum": IoK8sApiCoreV1Container.ImagePullPolicyEnum,
        "IoK8sApiCoreV1Container.TerminationMessagePolicyEnum": IoK8sApiCoreV1Container.TerminationMessagePolicyEnum,
        "IoK8sApiCoreV1ContainerPort.ProtocolEnum": IoK8sApiCoreV1ContainerPort.ProtocolEnum,
        "IoK8sApiCoreV1HTTPGetAction.SchemeEnum": IoK8sApiCoreV1HTTPGetAction.SchemeEnum,
        "IoK8sApiCoreV1NodeSelectorRequirement.OperatorEnum": IoK8sApiCoreV1NodeSelectorRequirement.OperatorEnum,
        "IoK8sApiCoreV1PersistentVolumeClaimCondition.TypeEnum": IoK8sApiCoreV1PersistentVolumeClaimCondition.TypeEnum,
        "IoK8sApiCoreV1PersistentVolumeClaimStatus.PhaseEnum": IoK8sApiCoreV1PersistentVolumeClaimStatus.PhaseEnum,
        "IoK8sApiCoreV1SeccompProfile.TypeEnum": IoK8sApiCoreV1SeccompProfile.TypeEnum,
        "IoK8sApiCoreV1ServicePort.ProtocolEnum": IoK8sApiCoreV1ServicePort.ProtocolEnum,
        "IoK8sApiCoreV1Toleration.EffectEnum": IoK8sApiCoreV1Toleration.EffectEnum,
        "IoK8sApiCoreV1Toleration.OperatorEnum": IoK8sApiCoreV1Toleration.OperatorEnum,
}

let typeMap: {[index: string]: any} = {
    "EventsourceCreateEventSourceRequest": EventsourceCreateEventSourceRequest,
    "EventsourceEventSourceWatchEvent": EventsourceEventSourceWatchEvent,
    "EventsourceLogEntry": EventsourceLogEntry,
    "EventsourceUpdateEventSourceRequest": EventsourceUpdateEventSourceRequest,
    "GoogleProtobufAny": GoogleProtobufAny,
    "GrpcGatewayRuntimeError": GrpcGatewayRuntimeError,
    "GrpcGatewayRuntimeStreamError": GrpcGatewayRuntimeStreamError,
    "IoArgoprojEventsV1alpha1AMQPConsumeConfig": IoArgoprojEventsV1alpha1AMQPConsumeConfig,
    "IoArgoprojEventsV1alpha1AMQPEventSource": IoArgoprojEventsV1alpha1AMQPEventSource,
    "IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig": IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig,
    "IoArgoprojEventsV1alpha1AMQPQueueBindConfig": IoArgoprojEventsV1alpha1AMQPQueueBindConfig,
    "IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig": IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig,
    "IoArgoprojEventsV1alpha1AWSLambdaTrigger": IoArgoprojEventsV1alpha1AWSLambdaTrigger,
    "IoArgoprojEventsV1alpha1Amount": IoArgoprojEventsV1alpha1Amount,
    "IoArgoprojEventsV1alpha1ArgoWorkflowTrigger": IoArgoprojEventsV1alpha1ArgoWorkflowTrigger,
    "IoArgoprojEventsV1alpha1ArtifactLocation": IoArgoprojEventsV1alpha1ArtifactLocation,
    "IoArgoprojEventsV1alpha1AzureEventHubsTrigger": IoArgoprojEventsV1alpha1AzureEventHubsTrigger,
    "IoArgoprojEventsV1alpha1AzureEventsHubEventSource": IoArgoprojEventsV1alpha1AzureEventsHubEventSource,
    "IoArgoprojEventsV1alpha1Backoff": IoArgoprojEventsV1alpha1Backoff,
    "IoArgoprojEventsV1alpha1BasicAuth": IoArgoprojEventsV1alpha1BasicAuth,
    "IoArgoprojEventsV1alpha1BitbucketAuth": IoArgoprojEventsV1alpha1BitbucketAuth,
    "IoArgoprojEventsV1alpha1BitbucketBasicAuth": IoArgoprojEventsV1alpha1BitbucketBasicAuth,
    "IoArgoprojEventsV1alpha1BitbucketEventSource": IoArgoprojEventsV1alpha1BitbucketEventSource,
    "IoArgoprojEventsV1alpha1BitbucketRepository": IoArgoprojEventsV1alpha1BitbucketRepository,
    "IoArgoprojEventsV1alpha1BitbucketServerEventSource": IoArgoprojEventsV1alpha1BitbucketServerEventSource,
    "IoArgoprojEventsV1alpha1BitbucketServerRepository": IoArgoprojEventsV1alpha1BitbucketServerRepository,
    "IoArgoprojEventsV1alpha1CalendarEventSource": IoArgoprojEventsV1alpha1CalendarEventSource,
    "IoArgoprojEventsV1alpha1CatchupConfiguration": IoArgoprojEventsV1alpha1CatchupConfiguration,
    "IoArgoprojEventsV1alpha1Condition": IoArgoprojEventsV1alpha1Condition,
    "IoArgoprojEventsV1alpha1ConditionsResetByTime": IoArgoprojEventsV1alpha1ConditionsResetByTime,
    "IoArgoprojEventsV1alpha1ConditionsResetCriteria": IoArgoprojEventsV1alpha1ConditionsResetCriteria,
    "IoArgoprojEventsV1alpha1ConfigMapPersistence": IoArgoprojEventsV1alpha1ConfigMapPersistence,
    "IoArgoprojEventsV1alpha1CustomTrigger": IoArgoprojEventsV1alpha1CustomTrigger,
    "IoArgoprojEventsV1alpha1DataFilter": IoArgoprojEventsV1alpha1DataFilter,
    "IoArgoprojEventsV1alpha1EmitterEventSource": IoArgoprojEventsV1alpha1EmitterEventSource,
    "IoArgoprojEventsV1alpha1EventContext": IoArgoprojEventsV1alpha1EventContext,
    "IoArgoprojEventsV1alpha1EventDependency": IoArgoprojEventsV1alpha1EventDependency,
    "IoArgoprojEventsV1alpha1EventDependencyFilter": IoArgoprojEventsV1alpha1EventDependencyFilter,
    "IoArgoprojEventsV1alpha1EventDependencyTransformer": IoArgoprojEventsV1alpha1EventDependencyTransformer,
    "IoArgoprojEventsV1alpha1EventPersistence": IoArgoprojEventsV1alpha1EventPersistence,
    "IoArgoprojEventsV1alpha1EventSource": IoArgoprojEventsV1alpha1EventSource,
    "IoArgoprojEventsV1alpha1EventSourceFilter": IoArgoprojEventsV1alpha1EventSourceFilter,
    "IoArgoprojEventsV1alpha1EventSourceList": IoArgoprojEventsV1alpha1EventSourceList,
    "IoArgoprojEventsV1alpha1EventSourceSpec": IoArgoprojEventsV1alpha1EventSourceSpec,
    "IoArgoprojEventsV1alpha1EventSourceStatus": IoArgoprojEventsV1alpha1EventSourceStatus,
    "IoArgoprojEventsV1alpha1ExprFilter": IoArgoprojEventsV1alpha1ExprFilter,
    "IoArgoprojEventsV1alpha1FileArtifact": IoArgoprojEventsV1alpha1FileArtifact,
    "IoArgoprojEventsV1alpha1FileEventSource": IoArgoprojEventsV1alpha1FileEventSource,
    "IoArgoprojEventsV1alpha1GenericEventSource": IoArgoprojEventsV1alpha1GenericEventSource,
    "IoArgoprojEventsV1alpha1GitArtifact": IoArgoprojEventsV1alpha1GitArtifact,
    "IoArgoprojEventsV1alpha1GitCreds": IoArgoprojEventsV1alpha1GitCreds,
    "IoArgoprojEventsV1alpha1GitRemoteConfig": IoArgoprojEventsV1alpha1GitRemoteConfig,
    "IoArgoprojEventsV1alpha1GithubAppCreds": IoArgoprojEventsV1alpha1GithubAppCreds,
    "IoArgoprojEventsV1alpha1GithubEventSource": IoArgoprojEventsV1alpha1GithubEventSource,
    "IoArgoprojEventsV1alpha1GitlabEventSource": IoArgoprojEventsV1alpha1GitlabEventSource,
    "IoArgoprojEventsV1alpha1HDFSEventSource": IoArgoprojEventsV1alpha1HDFSEventSource,
    "IoArgoprojEventsV1alpha1HTTPTrigger": IoArgoprojEventsV1alpha1HTTPTrigger,
    "IoArgoprojEventsV1alpha1Int64OrString": IoArgoprojEventsV1alpha1Int64OrString,
    "IoArgoprojEventsV1alpha1K8SResourcePolicy": IoArgoprojEventsV1alpha1K8SResourcePolicy,
    "IoArgoprojEventsV1alpha1KafkaConsumerGroup": IoArgoprojEventsV1alpha1KafkaConsumerGroup,
    "IoArgoprojEventsV1alpha1KafkaEventSource": IoArgoprojEventsV1alpha1KafkaEventSource,
    "IoArgoprojEventsV1alpha1KafkaTrigger": IoArgoprojEventsV1alpha1KafkaTrigger,
    "IoArgoprojEventsV1alpha1LogTrigger": IoArgoprojEventsV1alpha1LogTrigger,
    "IoArgoprojEventsV1alpha1MQTTEventSource": IoArgoprojEventsV1alpha1MQTTEventSource,
    "IoArgoprojEventsV1alpha1Metadata": IoArgoprojEventsV1alpha1Metadata,
    "IoArgoprojEventsV1alpha1NATSAuth": IoArgoprojEventsV1alpha1NATSAuth,
    "IoArgoprojEventsV1alpha1NATSEventsSource": IoArgoprojEventsV1alpha1NATSEventsSource,
    "IoArgoprojEventsV1alpha1NATSTrigger": IoArgoprojEventsV1alpha1NATSTrigger,
    "IoArgoprojEventsV1alpha1NSQEventSource": IoArgoprojEventsV1alpha1NSQEventSource,
    "IoArgoprojEventsV1alpha1OpenWhiskTrigger": IoArgoprojEventsV1alpha1OpenWhiskTrigger,
    "IoArgoprojEventsV1alpha1OwnedRepositories": IoArgoprojEventsV1alpha1OwnedRepositories,
    "IoArgoprojEventsV1alpha1PayloadField": IoArgoprojEventsV1alpha1PayloadField,
    "IoArgoprojEventsV1alpha1PubSubEventSource": IoArgoprojEventsV1alpha1PubSubEventSource,
    "IoArgoprojEventsV1alpha1PulsarEventSource": IoArgoprojEventsV1alpha1PulsarEventSource,
    "IoArgoprojEventsV1alpha1PulsarTrigger": IoArgoprojEventsV1alpha1PulsarTrigger,
    "IoArgoprojEventsV1alpha1RateLimit": IoArgoprojEventsV1alpha1RateLimit,
    "IoArgoprojEventsV1alpha1RedisEventSource": IoArgoprojEventsV1alpha1RedisEventSource,
    "IoArgoprojEventsV1alpha1RedisStreamEventSource": IoArgoprojEventsV1alpha1RedisStreamEventSource,
    "IoArgoprojEventsV1alpha1Resource": IoArgoprojEventsV1alpha1Resource,
    "IoArgoprojEventsV1alpha1ResourceEventSource": IoArgoprojEventsV1alpha1ResourceEventSource,
    "IoArgoprojEventsV1alpha1ResourceFilter": IoArgoprojEventsV1alpha1ResourceFilter,
    "IoArgoprojEventsV1alpha1S3Artifact": IoArgoprojEventsV1alpha1S3Artifact,
    "IoArgoprojEventsV1alpha1S3Bucket": IoArgoprojEventsV1alpha1S3Bucket,
    "IoArgoprojEventsV1alpha1S3Filter": IoArgoprojEventsV1alpha1S3Filter,
    "IoArgoprojEventsV1alpha1SASLConfig": IoArgoprojEventsV1alpha1SASLConfig,
    "IoArgoprojEventsV1alpha1SNSEventSource": IoArgoprojEventsV1alpha1SNSEventSource,
    "IoArgoprojEventsV1alpha1SQSEventSource": IoArgoprojEventsV1alpha1SQSEventSource,
    "IoArgoprojEventsV1alpha1SecureHeader": IoArgoprojEventsV1alpha1SecureHeader,
    "IoArgoprojEventsV1alpha1Selector": IoArgoprojEventsV1alpha1Selector,
    "IoArgoprojEventsV1alpha1Sensor": IoArgoprojEventsV1alpha1Sensor,
    "IoArgoprojEventsV1alpha1SensorList": IoArgoprojEventsV1alpha1SensorList,
    "IoArgoprojEventsV1alpha1SensorSpec": IoArgoprojEventsV1alpha1SensorSpec,
    "IoArgoprojEventsV1alpha1SensorStatus": IoArgoprojEventsV1alpha1SensorStatus,
    "IoArgoprojEventsV1alpha1Service": IoArgoprojEventsV1alpha1Service,
    "IoArgoprojEventsV1alpha1SlackEventSource": IoArgoprojEventsV1alpha1SlackEventSource,
    "IoArgoprojEventsV1alpha1SlackTrigger": IoArgoprojEventsV1alpha1SlackTrigger,
    "IoArgoprojEventsV1alpha1StandardK8STrigger": IoArgoprojEventsV1alpha1StandardK8STrigger,
    "IoArgoprojEventsV1alpha1Status": IoArgoprojEventsV1alpha1Status,
    "IoArgoprojEventsV1alpha1StatusPolicy": IoArgoprojEventsV1alpha1StatusPolicy,
    "IoArgoprojEventsV1alpha1StorageGridEventSource": IoArgoprojEventsV1alpha1StorageGridEventSource,
    "IoArgoprojEventsV1alpha1StorageGridFilter": IoArgoprojEventsV1alpha1StorageGridFilter,
    "IoArgoprojEventsV1alpha1StripeEventSource": IoArgoprojEventsV1alpha1StripeEventSource,
    "IoArgoprojEventsV1alpha1TLSConfig": IoArgoprojEventsV1alpha1TLSConfig,
    "IoArgoprojEventsV1alpha1Template": IoArgoprojEventsV1alpha1Template,
    "IoArgoprojEventsV1alpha1TimeFilter": IoArgoprojEventsV1alpha1TimeFilter,
    "IoArgoprojEventsV1alpha1Trigger": IoArgoprojEventsV1alpha1Trigger,
    "IoArgoprojEventsV1alpha1TriggerParameter": IoArgoprojEventsV1alpha1TriggerParameter,
    "IoArgoprojEventsV1alpha1TriggerParameterSource": IoArgoprojEventsV1alpha1TriggerParameterSource,
    "IoArgoprojEventsV1alpha1TriggerPolicy": IoArgoprojEventsV1alpha1TriggerPolicy,
    "IoArgoprojEventsV1alpha1TriggerTemplate": IoArgoprojEventsV1alpha1TriggerTemplate,
    "IoArgoprojEventsV1alpha1URLArtifact": IoArgoprojEventsV1alpha1URLArtifact,
    "IoArgoprojEventsV1alpha1ValueFromSource": IoArgoprojEventsV1alpha1ValueFromSource,
    "IoArgoprojEventsV1alpha1WatchPathConfig": IoArgoprojEventsV1alpha1WatchPathConfig,
    "IoArgoprojEventsV1alpha1WebhookContext": IoArgoprojEventsV1alpha1WebhookContext,
    "IoArgoprojEventsV1alpha1WebhookEventSource": IoArgoprojEventsV1alpha1WebhookEventSource,
    "IoArgoprojWorkflowV1alpha1ArchiveStrategy": IoArgoprojWorkflowV1alpha1ArchiveStrategy,
    "IoArgoprojWorkflowV1alpha1Arguments": IoArgoprojWorkflowV1alpha1Arguments,
    "IoArgoprojWorkflowV1alpha1ArtGCStatus": IoArgoprojWorkflowV1alpha1ArtGCStatus,
    "IoArgoprojWorkflowV1alpha1Artifact": IoArgoprojWorkflowV1alpha1Artifact,
    "IoArgoprojWorkflowV1alpha1ArtifactGC": IoArgoprojWorkflowV1alpha1ArtifactGC,
    "IoArgoprojWorkflowV1alpha1ArtifactGCSpec": IoArgoprojWorkflowV1alpha1ArtifactGCSpec,
    "IoArgoprojWorkflowV1alpha1ArtifactGCStatus": IoArgoprojWorkflowV1alpha1ArtifactGCStatus,
    "IoArgoprojWorkflowV1alpha1ArtifactLocation": IoArgoprojWorkflowV1alpha1ArtifactLocation,
    "IoArgoprojWorkflowV1alpha1ArtifactNodeSpec": IoArgoprojWorkflowV1alpha1ArtifactNodeSpec,
    "IoArgoprojWorkflowV1alpha1ArtifactPaths": IoArgoprojWorkflowV1alpha1ArtifactPaths,
    "IoArgoprojWorkflowV1alpha1ArtifactRepository": IoArgoprojWorkflowV1alpha1ArtifactRepository,
    "IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef": IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef,
    "IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus": IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus,
    "IoArgoprojWorkflowV1alpha1ArtifactResult": IoArgoprojWorkflowV1alpha1ArtifactResult,
    "IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus": IoArgoprojWorkflowV1alpha1ArtifactResultNodeStatus,
    "IoArgoprojWorkflowV1alpha1ArtifactoryArtifact": IoArgoprojWorkflowV1alpha1ArtifactoryArtifact,
    "IoArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository": IoArgoprojWorkflowV1alpha1ArtifactoryArtifactRepository,
    "IoArgoprojWorkflowV1alpha1AzureArtifact": IoArgoprojWorkflowV1alpha1AzureArtifact,
    "IoArgoprojWorkflowV1alpha1AzureArtifactRepository": IoArgoprojWorkflowV1alpha1AzureArtifactRepository,
    "IoArgoprojWorkflowV1alpha1Backoff": IoArgoprojWorkflowV1alpha1Backoff,
    "IoArgoprojWorkflowV1alpha1BasicAuth": IoArgoprojWorkflowV1alpha1BasicAuth,
    "IoArgoprojWorkflowV1alpha1Cache": IoArgoprojWorkflowV1alpha1Cache,
    "IoArgoprojWorkflowV1alpha1ClientCertAuth": IoArgoprojWorkflowV1alpha1ClientCertAuth,
    "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate": IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate,
    "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest": IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest,
    "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest": IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateLintRequest,
    "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList": IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateList,
    "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest": IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateUpdateRequest,
    "IoArgoprojWorkflowV1alpha1CollectEventRequest": IoArgoprojWorkflowV1alpha1CollectEventRequest,
    "IoArgoprojWorkflowV1alpha1Column": IoArgoprojWorkflowV1alpha1Column,
    "IoArgoprojWorkflowV1alpha1Condition": IoArgoprojWorkflowV1alpha1Condition,
    "IoArgoprojWorkflowV1alpha1ContainerNode": IoArgoprojWorkflowV1alpha1ContainerNode,
    "IoArgoprojWorkflowV1alpha1ContainerSetRetryStrategy": IoArgoprojWorkflowV1alpha1ContainerSetRetryStrategy,
    "IoArgoprojWorkflowV1alpha1ContainerSetTemplate": IoArgoprojWorkflowV1alpha1ContainerSetTemplate,
    "IoArgoprojWorkflowV1alpha1ContinueOn": IoArgoprojWorkflowV1alpha1ContinueOn,
    "IoArgoprojWorkflowV1alpha1Counter": IoArgoprojWorkflowV1alpha1Counter,
    "IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest": IoArgoprojWorkflowV1alpha1CreateCronWorkflowRequest,
    "IoArgoprojWorkflowV1alpha1CreateS3BucketOptions": IoArgoprojWorkflowV1alpha1CreateS3BucketOptions,
    "IoArgoprojWorkflowV1alpha1CronWorkflow": IoArgoprojWorkflowV1alpha1CronWorkflow,
    "IoArgoprojWorkflowV1alpha1CronWorkflowList": IoArgoprojWorkflowV1alpha1CronWorkflowList,
    "IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest": IoArgoprojWorkflowV1alpha1CronWorkflowResumeRequest,
    "IoArgoprojWorkflowV1alpha1CronWorkflowSpec": IoArgoprojWorkflowV1alpha1CronWorkflowSpec,
    "IoArgoprojWorkflowV1alpha1CronWorkflowStatus": IoArgoprojWorkflowV1alpha1CronWorkflowStatus,
    "IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest": IoArgoprojWorkflowV1alpha1CronWorkflowSuspendRequest,
    "IoArgoprojWorkflowV1alpha1DAGTask": IoArgoprojWorkflowV1alpha1DAGTask,
    "IoArgoprojWorkflowV1alpha1DAGTemplate": IoArgoprojWorkflowV1alpha1DAGTemplate,
    "IoArgoprojWorkflowV1alpha1Data": IoArgoprojWorkflowV1alpha1Data,
    "IoArgoprojWorkflowV1alpha1DataSource": IoArgoprojWorkflowV1alpha1DataSource,
    "IoArgoprojWorkflowV1alpha1Event": IoArgoprojWorkflowV1alpha1Event,
    "IoArgoprojWorkflowV1alpha1ExecutorConfig": IoArgoprojWorkflowV1alpha1ExecutorConfig,
    "IoArgoprojWorkflowV1alpha1GCSArtifact": IoArgoprojWorkflowV1alpha1GCSArtifact,
    "IoArgoprojWorkflowV1alpha1GCSArtifactRepository": IoArgoprojWorkflowV1alpha1GCSArtifactRepository,
    "IoArgoprojWorkflowV1alpha1Gauge": IoArgoprojWorkflowV1alpha1Gauge,
    "IoArgoprojWorkflowV1alpha1GetUserInfoResponse": IoArgoprojWorkflowV1alpha1GetUserInfoResponse,
    "IoArgoprojWorkflowV1alpha1GitArtifact": IoArgoprojWorkflowV1alpha1GitArtifact,
    "IoArgoprojWorkflowV1alpha1HDFSArtifact": IoArgoprojWorkflowV1alpha1HDFSArtifact,
    "IoArgoprojWorkflowV1alpha1HDFSArtifactRepository": IoArgoprojWorkflowV1alpha1HDFSArtifactRepository,
    "IoArgoprojWorkflowV1alpha1HTTP": IoArgoprojWorkflowV1alpha1HTTP,
    "IoArgoprojWorkflowV1alpha1HTTPArtifact": IoArgoprojWorkflowV1alpha1HTTPArtifact,
    "IoArgoprojWorkflowV1alpha1HTTPAuth": IoArgoprojWorkflowV1alpha1HTTPAuth,
    "IoArgoprojWorkflowV1alpha1HTTPBodySource": IoArgoprojWorkflowV1alpha1HTTPBodySource,
    "IoArgoprojWorkflowV1alpha1HTTPHeader": IoArgoprojWorkflowV1alpha1HTTPHeader,
    "IoArgoprojWorkflowV1alpha1HTTPHeaderSource": IoArgoprojWorkflowV1alpha1HTTPHeaderSource,
    "IoArgoprojWorkflowV1alpha1Header": IoArgoprojWorkflowV1alpha1Header,
    "IoArgoprojWorkflowV1alpha1Histogram": IoArgoprojWorkflowV1alpha1Histogram,
    "IoArgoprojWorkflowV1alpha1InfoResponse": IoArgoprojWorkflowV1alpha1InfoResponse,
    "IoArgoprojWorkflowV1alpha1Inputs": IoArgoprojWorkflowV1alpha1Inputs,
    "IoArgoprojWorkflowV1alpha1LabelKeys": IoArgoprojWorkflowV1alpha1LabelKeys,
    "IoArgoprojWorkflowV1alpha1LabelValueFrom": IoArgoprojWorkflowV1alpha1LabelValueFrom,
    "IoArgoprojWorkflowV1alpha1LabelValues": IoArgoprojWorkflowV1alpha1LabelValues,
    "IoArgoprojWorkflowV1alpha1LifecycleHook": IoArgoprojWorkflowV1alpha1LifecycleHook,
    "IoArgoprojWorkflowV1alpha1Link": IoArgoprojWorkflowV1alpha1Link,
    "IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest": IoArgoprojWorkflowV1alpha1LintCronWorkflowRequest,
    "IoArgoprojWorkflowV1alpha1LogEntry": IoArgoprojWorkflowV1alpha1LogEntry,
    "IoArgoprojWorkflowV1alpha1ManifestFrom": IoArgoprojWorkflowV1alpha1ManifestFrom,
    "IoArgoprojWorkflowV1alpha1MemoizationStatus": IoArgoprojWorkflowV1alpha1MemoizationStatus,
    "IoArgoprojWorkflowV1alpha1Memoize": IoArgoprojWorkflowV1alpha1Memoize,
    "IoArgoprojWorkflowV1alpha1Metadata": IoArgoprojWorkflowV1alpha1Metadata,
    "IoArgoprojWorkflowV1alpha1MetricLabel": IoArgoprojWorkflowV1alpha1MetricLabel,
    "IoArgoprojWorkflowV1alpha1Metrics": IoArgoprojWorkflowV1alpha1Metrics,
    "IoArgoprojWorkflowV1alpha1Mutex": IoArgoprojWorkflowV1alpha1Mutex,
    "IoArgoprojWorkflowV1alpha1MutexHolding": IoArgoprojWorkflowV1alpha1MutexHolding,
    "IoArgoprojWorkflowV1alpha1MutexStatus": IoArgoprojWorkflowV1alpha1MutexStatus,
    "IoArgoprojWorkflowV1alpha1NodeResult": IoArgoprojWorkflowV1alpha1NodeResult,
    "IoArgoprojWorkflowV1alpha1NodeStatus": IoArgoprojWorkflowV1alpha1NodeStatus,
    "IoArgoprojWorkflowV1alpha1NodeSynchronizationStatus": IoArgoprojWorkflowV1alpha1NodeSynchronizationStatus,
    "IoArgoprojWorkflowV1alpha1OAuth2Auth": IoArgoprojWorkflowV1alpha1OAuth2Auth,
    "IoArgoprojWorkflowV1alpha1OAuth2EndpointParam": IoArgoprojWorkflowV1alpha1OAuth2EndpointParam,
    "IoArgoprojWorkflowV1alpha1OSSArtifact": IoArgoprojWorkflowV1alpha1OSSArtifact,
    "IoArgoprojWorkflowV1alpha1OSSArtifactRepository": IoArgoprojWorkflowV1alpha1OSSArtifactRepository,
    "IoArgoprojWorkflowV1alpha1OSSLifecycleRule": IoArgoprojWorkflowV1alpha1OSSLifecycleRule,
    "IoArgoprojWorkflowV1alpha1Outputs": IoArgoprojWorkflowV1alpha1Outputs,
    "IoArgoprojWorkflowV1alpha1Parameter": IoArgoprojWorkflowV1alpha1Parameter,
    "IoArgoprojWorkflowV1alpha1PodGC": IoArgoprojWorkflowV1alpha1PodGC,
    "IoArgoprojWorkflowV1alpha1Prometheus": IoArgoprojWorkflowV1alpha1Prometheus,
    "IoArgoprojWorkflowV1alpha1RawArtifact": IoArgoprojWorkflowV1alpha1RawArtifact,
    "IoArgoprojWorkflowV1alpha1ResourceTemplate": IoArgoprojWorkflowV1alpha1ResourceTemplate,
    "IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest": IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest,
    "IoArgoprojWorkflowV1alpha1RetryAffinity": IoArgoprojWorkflowV1alpha1RetryAffinity,
    "IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest": IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest,
    "IoArgoprojWorkflowV1alpha1RetryStrategy": IoArgoprojWorkflowV1alpha1RetryStrategy,
    "IoArgoprojWorkflowV1alpha1S3Artifact": IoArgoprojWorkflowV1alpha1S3Artifact,
    "IoArgoprojWorkflowV1alpha1S3ArtifactRepository": IoArgoprojWorkflowV1alpha1S3ArtifactRepository,
    "IoArgoprojWorkflowV1alpha1S3EncryptionOptions": IoArgoprojWorkflowV1alpha1S3EncryptionOptions,
    "IoArgoprojWorkflowV1alpha1ScriptTemplate": IoArgoprojWorkflowV1alpha1ScriptTemplate,
    "IoArgoprojWorkflowV1alpha1SemaphoreHolding": IoArgoprojWorkflowV1alpha1SemaphoreHolding,
    "IoArgoprojWorkflowV1alpha1SemaphoreRef": IoArgoprojWorkflowV1alpha1SemaphoreRef,
    "IoArgoprojWorkflowV1alpha1SemaphoreStatus": IoArgoprojWorkflowV1alpha1SemaphoreStatus,
    "IoArgoprojWorkflowV1alpha1Sequence": IoArgoprojWorkflowV1alpha1Sequence,
    "IoArgoprojWorkflowV1alpha1Submit": IoArgoprojWorkflowV1alpha1Submit,
    "IoArgoprojWorkflowV1alpha1SubmitOpts": IoArgoprojWorkflowV1alpha1SubmitOpts,
    "IoArgoprojWorkflowV1alpha1SuspendTemplate": IoArgoprojWorkflowV1alpha1SuspendTemplate,
    "IoArgoprojWorkflowV1alpha1Synchronization": IoArgoprojWorkflowV1alpha1Synchronization,
    "IoArgoprojWorkflowV1alpha1SynchronizationStatus": IoArgoprojWorkflowV1alpha1SynchronizationStatus,
    "IoArgoprojWorkflowV1alpha1TTLStrategy": IoArgoprojWorkflowV1alpha1TTLStrategy,
    "IoArgoprojWorkflowV1alpha1TarStrategy": IoArgoprojWorkflowV1alpha1TarStrategy,
    "IoArgoprojWorkflowV1alpha1Template": IoArgoprojWorkflowV1alpha1Template,
    "IoArgoprojWorkflowV1alpha1TemplateRef": IoArgoprojWorkflowV1alpha1TemplateRef,
    "IoArgoprojWorkflowV1alpha1TransformationStep": IoArgoprojWorkflowV1alpha1TransformationStep,
    "IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest": IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest,
    "IoArgoprojWorkflowV1alpha1UserContainer": IoArgoprojWorkflowV1alpha1UserContainer,
    "IoArgoprojWorkflowV1alpha1ValueFrom": IoArgoprojWorkflowV1alpha1ValueFrom,
    "IoArgoprojWorkflowV1alpha1Version": IoArgoprojWorkflowV1alpha1Version,
    "IoArgoprojWorkflowV1alpha1VolumeClaimGC": IoArgoprojWorkflowV1alpha1VolumeClaimGC,
    "IoArgoprojWorkflowV1alpha1Workflow": IoArgoprojWorkflowV1alpha1Workflow,
    "IoArgoprojWorkflowV1alpha1WorkflowCreateRequest": IoArgoprojWorkflowV1alpha1WorkflowCreateRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowEventBinding": IoArgoprojWorkflowV1alpha1WorkflowEventBinding,
    "IoArgoprojWorkflowV1alpha1WorkflowEventBindingList": IoArgoprojWorkflowV1alpha1WorkflowEventBindingList,
    "IoArgoprojWorkflowV1alpha1WorkflowEventBindingSpec": IoArgoprojWorkflowV1alpha1WorkflowEventBindingSpec,
    "IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC": IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC,
    "IoArgoprojWorkflowV1alpha1WorkflowLintRequest": IoArgoprojWorkflowV1alpha1WorkflowLintRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowList": IoArgoprojWorkflowV1alpha1WorkflowList,
    "IoArgoprojWorkflowV1alpha1WorkflowMetadata": IoArgoprojWorkflowV1alpha1WorkflowMetadata,
    "IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest": IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowResumeRequest": IoArgoprojWorkflowV1alpha1WorkflowResumeRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowRetryRequest": IoArgoprojWorkflowV1alpha1WorkflowRetryRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowSetRequest": IoArgoprojWorkflowV1alpha1WorkflowSetRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowSpec": IoArgoprojWorkflowV1alpha1WorkflowSpec,
    "IoArgoprojWorkflowV1alpha1WorkflowStatus": IoArgoprojWorkflowV1alpha1WorkflowStatus,
    "IoArgoprojWorkflowV1alpha1WorkflowStep": IoArgoprojWorkflowV1alpha1WorkflowStep,
    "IoArgoprojWorkflowV1alpha1WorkflowStopRequest": IoArgoprojWorkflowV1alpha1WorkflowStopRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest": IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest": IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowTaskSetSpec": IoArgoprojWorkflowV1alpha1WorkflowTaskSetSpec,
    "IoArgoprojWorkflowV1alpha1WorkflowTaskSetStatus": IoArgoprojWorkflowV1alpha1WorkflowTaskSetStatus,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplate": IoArgoprojWorkflowV1alpha1WorkflowTemplate,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest": IoArgoprojWorkflowV1alpha1WorkflowTemplateCreateRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest": IoArgoprojWorkflowV1alpha1WorkflowTemplateLintRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplateList": IoArgoprojWorkflowV1alpha1WorkflowTemplateList,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplateRef": IoArgoprojWorkflowV1alpha1WorkflowTemplateRef,
    "IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest": IoArgoprojWorkflowV1alpha1WorkflowTemplateUpdateRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest": IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest,
    "IoArgoprojWorkflowV1alpha1WorkflowWatchEvent": IoArgoprojWorkflowV1alpha1WorkflowWatchEvent,
    "IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource": IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource,
    "IoK8sApiCoreV1Affinity": IoK8sApiCoreV1Affinity,
    "IoK8sApiCoreV1AzureDiskVolumeSource": IoK8sApiCoreV1AzureDiskVolumeSource,
    "IoK8sApiCoreV1AzureFileVolumeSource": IoK8sApiCoreV1AzureFileVolumeSource,
    "IoK8sApiCoreV1CSIVolumeSource": IoK8sApiCoreV1CSIVolumeSource,
    "IoK8sApiCoreV1Capabilities": IoK8sApiCoreV1Capabilities,
    "IoK8sApiCoreV1CephFSVolumeSource": IoK8sApiCoreV1CephFSVolumeSource,
    "IoK8sApiCoreV1CinderVolumeSource": IoK8sApiCoreV1CinderVolumeSource,
    "IoK8sApiCoreV1ConfigMapEnvSource": IoK8sApiCoreV1ConfigMapEnvSource,
    "IoK8sApiCoreV1ConfigMapKeySelector": IoK8sApiCoreV1ConfigMapKeySelector,
    "IoK8sApiCoreV1ConfigMapProjection": IoK8sApiCoreV1ConfigMapProjection,
    "IoK8sApiCoreV1ConfigMapVolumeSource": IoK8sApiCoreV1ConfigMapVolumeSource,
    "IoK8sApiCoreV1Container": IoK8sApiCoreV1Container,
    "IoK8sApiCoreV1ContainerPort": IoK8sApiCoreV1ContainerPort,
    "IoK8sApiCoreV1DownwardAPIProjection": IoK8sApiCoreV1DownwardAPIProjection,
    "IoK8sApiCoreV1DownwardAPIVolumeFile": IoK8sApiCoreV1DownwardAPIVolumeFile,
    "IoK8sApiCoreV1DownwardAPIVolumeSource": IoK8sApiCoreV1DownwardAPIVolumeSource,
    "IoK8sApiCoreV1EmptyDirVolumeSource": IoK8sApiCoreV1EmptyDirVolumeSource,
    "IoK8sApiCoreV1EnvFromSource": IoK8sApiCoreV1EnvFromSource,
    "IoK8sApiCoreV1EnvVar": IoK8sApiCoreV1EnvVar,
    "IoK8sApiCoreV1EnvVarSource": IoK8sApiCoreV1EnvVarSource,
    "IoK8sApiCoreV1EphemeralVolumeSource": IoK8sApiCoreV1EphemeralVolumeSource,
    "IoK8sApiCoreV1Event": IoK8sApiCoreV1Event,
    "IoK8sApiCoreV1EventSeries": IoK8sApiCoreV1EventSeries,
    "IoK8sApiCoreV1EventSource": IoK8sApiCoreV1EventSource,
    "IoK8sApiCoreV1ExecAction": IoK8sApiCoreV1ExecAction,
    "IoK8sApiCoreV1FCVolumeSource": IoK8sApiCoreV1FCVolumeSource,
    "IoK8sApiCoreV1FlexVolumeSource": IoK8sApiCoreV1FlexVolumeSource,
    "IoK8sApiCoreV1FlockerVolumeSource": IoK8sApiCoreV1FlockerVolumeSource,
    "IoK8sApiCoreV1GCEPersistentDiskVolumeSource": IoK8sApiCoreV1GCEPersistentDiskVolumeSource,
    "IoK8sApiCoreV1GRPCAction": IoK8sApiCoreV1GRPCAction,
    "IoK8sApiCoreV1GitRepoVolumeSource": IoK8sApiCoreV1GitRepoVolumeSource,
    "IoK8sApiCoreV1GlusterfsVolumeSource": IoK8sApiCoreV1GlusterfsVolumeSource,
    "IoK8sApiCoreV1HTTPGetAction": IoK8sApiCoreV1HTTPGetAction,
    "IoK8sApiCoreV1HTTPHeader": IoK8sApiCoreV1HTTPHeader,
    "IoK8sApiCoreV1HostAlias": IoK8sApiCoreV1HostAlias,
    "IoK8sApiCoreV1HostPathVolumeSource": IoK8sApiCoreV1HostPathVolumeSource,
    "IoK8sApiCoreV1ISCSIVolumeSource": IoK8sApiCoreV1ISCSIVolumeSource,
    "IoK8sApiCoreV1KeyToPath": IoK8sApiCoreV1KeyToPath,
    "IoK8sApiCoreV1Lifecycle": IoK8sApiCoreV1Lifecycle,
    "IoK8sApiCoreV1LifecycleHandler": IoK8sApiCoreV1LifecycleHandler,
    "IoK8sApiCoreV1LocalObjectReference": IoK8sApiCoreV1LocalObjectReference,
    "IoK8sApiCoreV1NFSVolumeSource": IoK8sApiCoreV1NFSVolumeSource,
    "IoK8sApiCoreV1NodeAffinity": IoK8sApiCoreV1NodeAffinity,
    "IoK8sApiCoreV1NodeSelector": IoK8sApiCoreV1NodeSelector,
    "IoK8sApiCoreV1NodeSelectorRequirement": IoK8sApiCoreV1NodeSelectorRequirement,
    "IoK8sApiCoreV1NodeSelectorTerm": IoK8sApiCoreV1NodeSelectorTerm,
    "IoK8sApiCoreV1ObjectFieldSelector": IoK8sApiCoreV1ObjectFieldSelector,
    "IoK8sApiCoreV1ObjectReference": IoK8sApiCoreV1ObjectReference,
    "IoK8sApiCoreV1PersistentVolumeClaim": IoK8sApiCoreV1PersistentVolumeClaim,
    "IoK8sApiCoreV1PersistentVolumeClaimCondition": IoK8sApiCoreV1PersistentVolumeClaimCondition,
    "IoK8sApiCoreV1PersistentVolumeClaimSpec": IoK8sApiCoreV1PersistentVolumeClaimSpec,
    "IoK8sApiCoreV1PersistentVolumeClaimStatus": IoK8sApiCoreV1PersistentVolumeClaimStatus,
    "IoK8sApiCoreV1PersistentVolumeClaimTemplate": IoK8sApiCoreV1PersistentVolumeClaimTemplate,
    "IoK8sApiCoreV1PersistentVolumeClaimVolumeSource": IoK8sApiCoreV1PersistentVolumeClaimVolumeSource,
    "IoK8sApiCoreV1PhotonPersistentDiskVolumeSource": IoK8sApiCoreV1PhotonPersistentDiskVolumeSource,
    "IoK8sApiCoreV1PodAffinity": IoK8sApiCoreV1PodAffinity,
    "IoK8sApiCoreV1PodAffinityTerm": IoK8sApiCoreV1PodAffinityTerm,
    "IoK8sApiCoreV1PodAntiAffinity": IoK8sApiCoreV1PodAntiAffinity,
    "IoK8sApiCoreV1PodDNSConfig": IoK8sApiCoreV1PodDNSConfig,
    "IoK8sApiCoreV1PodDNSConfigOption": IoK8sApiCoreV1PodDNSConfigOption,
    "IoK8sApiCoreV1PodSecurityContext": IoK8sApiCoreV1PodSecurityContext,
    "IoK8sApiCoreV1PortworxVolumeSource": IoK8sApiCoreV1PortworxVolumeSource,
    "IoK8sApiCoreV1PreferredSchedulingTerm": IoK8sApiCoreV1PreferredSchedulingTerm,
    "IoK8sApiCoreV1Probe": IoK8sApiCoreV1Probe,
    "IoK8sApiCoreV1ProjectedVolumeSource": IoK8sApiCoreV1ProjectedVolumeSource,
    "IoK8sApiCoreV1QuobyteVolumeSource": IoK8sApiCoreV1QuobyteVolumeSource,
    "IoK8sApiCoreV1RBDVolumeSource": IoK8sApiCoreV1RBDVolumeSource,
    "IoK8sApiCoreV1ResourceFieldSelector": IoK8sApiCoreV1ResourceFieldSelector,
    "IoK8sApiCoreV1ResourceRequirements": IoK8sApiCoreV1ResourceRequirements,
    "IoK8sApiCoreV1SELinuxOptions": IoK8sApiCoreV1SELinuxOptions,
    "IoK8sApiCoreV1ScaleIOVolumeSource": IoK8sApiCoreV1ScaleIOVolumeSource,
    "IoK8sApiCoreV1SeccompProfile": IoK8sApiCoreV1SeccompProfile,
    "IoK8sApiCoreV1SecretEnvSource": IoK8sApiCoreV1SecretEnvSource,
    "IoK8sApiCoreV1SecretKeySelector": IoK8sApiCoreV1SecretKeySelector,
    "IoK8sApiCoreV1SecretProjection": IoK8sApiCoreV1SecretProjection,
    "IoK8sApiCoreV1SecretVolumeSource": IoK8sApiCoreV1SecretVolumeSource,
    "IoK8sApiCoreV1SecurityContext": IoK8sApiCoreV1SecurityContext,
    "IoK8sApiCoreV1ServiceAccountTokenProjection": IoK8sApiCoreV1ServiceAccountTokenProjection,
    "IoK8sApiCoreV1ServicePort": IoK8sApiCoreV1ServicePort,
    "IoK8sApiCoreV1StorageOSVolumeSource": IoK8sApiCoreV1StorageOSVolumeSource,
    "IoK8sApiCoreV1Sysctl": IoK8sApiCoreV1Sysctl,
    "IoK8sApiCoreV1TCPSocketAction": IoK8sApiCoreV1TCPSocketAction,
    "IoK8sApiCoreV1Toleration": IoK8sApiCoreV1Toleration,
    "IoK8sApiCoreV1TypedLocalObjectReference": IoK8sApiCoreV1TypedLocalObjectReference,
    "IoK8sApiCoreV1Volume": IoK8sApiCoreV1Volume,
    "IoK8sApiCoreV1VolumeDevice": IoK8sApiCoreV1VolumeDevice,
    "IoK8sApiCoreV1VolumeMount": IoK8sApiCoreV1VolumeMount,
    "IoK8sApiCoreV1VolumeProjection": IoK8sApiCoreV1VolumeProjection,
    "IoK8sApiCoreV1VsphereVirtualDiskVolumeSource": IoK8sApiCoreV1VsphereVirtualDiskVolumeSource,
    "IoK8sApiCoreV1WeightedPodAffinityTerm": IoK8sApiCoreV1WeightedPodAffinityTerm,
    "IoK8sApiCoreV1WindowsSecurityContextOptions": IoK8sApiCoreV1WindowsSecurityContextOptions,
    "IoK8sApiPolicyV1PodDisruptionBudgetSpec": IoK8sApiPolicyV1PodDisruptionBudgetSpec,
    "IoK8sApimachineryPkgApisMetaV1CreateOptions": IoK8sApimachineryPkgApisMetaV1CreateOptions,
    "IoK8sApimachineryPkgApisMetaV1GroupVersionResource": IoK8sApimachineryPkgApisMetaV1GroupVersionResource,
    "IoK8sApimachineryPkgApisMetaV1LabelSelector": IoK8sApimachineryPkgApisMetaV1LabelSelector,
    "IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement": IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement,
    "IoK8sApimachineryPkgApisMetaV1ListMeta": IoK8sApimachineryPkgApisMetaV1ListMeta,
    "IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry": IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry,
    "IoK8sApimachineryPkgApisMetaV1ObjectMeta": IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    "IoK8sApimachineryPkgApisMetaV1OwnerReference": IoK8sApimachineryPkgApisMetaV1OwnerReference,
    "IoK8sApimachineryPkgApisMetaV1StatusCause": IoK8sApimachineryPkgApisMetaV1StatusCause,
    "SensorCreateSensorRequest": SensorCreateSensorRequest,
    "SensorLogEntry": SensorLogEntry,
    "SensorSensorWatchEvent": SensorSensorWatchEvent,
    "SensorUpdateSensorRequest": SensorUpdateSensorRequest,
    "StreamResultOfEventsourceEventSourceWatchEvent": StreamResultOfEventsourceEventSourceWatchEvent,
    "StreamResultOfEventsourceLogEntry": StreamResultOfEventsourceLogEntry,
    "StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry": StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry,
    "StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent": StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent,
    "StreamResultOfIoK8sApiCoreV1Event": StreamResultOfIoK8sApiCoreV1Event,
    "StreamResultOfSensorLogEntry": StreamResultOfSensorLogEntry,
    "StreamResultOfSensorSensorWatchEvent": StreamResultOfSensorSensorWatchEvent,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
